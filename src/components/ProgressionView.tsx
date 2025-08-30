import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from './Layout';
import Icon from './Icon';
import WorkflowDiagram from './WorkflowDiagram';
import { scenariosData } from '../data/scenarios';
import { ScenarioData } from '../types';

const ProgressionView: React.FC = () => {
  const { scenarioId } = useParams<{ scenarioId: string }>();
  const navigate = useNavigate();
  const [scenarioData, setScenarioData] = useState<ScenarioData | null>(null);
  const [currentApproachIndex, setCurrentApproachIndex] = useState<number>(0);
  const [selectedFramework, setSelectedFramework] = useState<string>('CRAFT');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('chatgpt');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['overview', 'example']));

  useEffect(() => {
    const data = scenariosData.find(s => s.scenario.id === scenarioId);
    if (data) {
      // Filter out Approach 4 as it's beyond scope
      const filteredData = {
        ...data,
        levels: data.levels.filter(level => level.level <= 3)
      };
      setScenarioData(filteredData);
      
      // If level 2 has frameworks, expand workflow and example sections by default
      const level2 = filteredData.levels.find(l => l.level === 2);
      if (level2 && level2.frameworks) {
        setExpandedSections(new Set(['overview', 'workflow', 'example']));
      }
    }
  }, [scenarioId]);

  if (!scenarioData) {
    return (
      <Layout>
        <div className="section">
          <div className="container text-center">
            <h2>Scenario not found</h2>
            <button onClick={() => navigate('/scenarios')} className="btn btn-primary">
              ← Back to Scenarios
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  const currentLevel = scenarioData.levels[currentApproachIndex];

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  const goToPrevious = () => {
    if (currentApproachIndex > 0) {
      const newIndex = currentApproachIndex - 1;
      setCurrentApproachIndex(newIndex);
      // Expand workflow and example sections for Level 2 to show framework toggle
      const sections = scenarioData?.levels[newIndex].level === 2 
        ? new Set(['overview', 'workflow', 'example']) 
        : new Set(['overview']);
      setExpandedSections(sections);
    }
  };

  const goToNext = () => {
    if (currentApproachIndex < scenarioData.levels.length - 1) {
      const newIndex = currentApproachIndex + 1;
      setCurrentApproachIndex(newIndex);
      // Expand workflow and example sections for Level 2 to show framework toggle
      const sections = scenarioData?.levels[newIndex].level === 2 
        ? new Set(['overview', 'workflow', 'example']) 
        : new Set(['overview']);
      setExpandedSections(sections);
    }
  };

  const handleComplete = () => {
    navigate('/completion', { 
      state: { 
        scenarioId: scenarioData.scenario.id,
        scenarioTitle: scenarioData.scenario.title,
        completedLevels: scenarioData.levels.map(l => l.level)
      }
    });
  };

  const getWorkflowSteps = (level: number) => {
    switch (level) {
      case 1:
        return [
          { icon: 'user', label: 'Staff Member' },
          { icon: 'message-circle', label: 'Basic Prompt' },
          { icon: 'cpu', label: 'AI Process' },
          { icon: 'file-text', label: 'Variable Output' },
          { icon: 'edit', label: 'Manual Editing' }
        ];
      case 2:
        return [
          { icon: 'user', label: 'Staff Member' },
          { icon: 'settings', label: 'CRAFT Structure' },
          { icon: 'cpu', label: 'AI Process' },
          { icon: 'file-text', label: 'Consistent Output' },
          { icon: 'check-circle', label: 'Ready to Use' }
        ];
      case 3:
        return [
          { icon: 'user', label: 'Staff Member' },
          { icon: 'zap', label: 'Packaged Tool' },
          { icon: 'cpu', label: 'AI + Context' },
          { icon: 'file-text', label: 'Branded Output' },
          { icon: 'eye', label: 'Quick Review' }
        ];
      default:
        return [];
    }
  };

  const getApproachColor = (level: number) => {
    switch(level) {
      case 1: return 'var(--primary)';
      case 2: return 'var(--accent)';
      case 3: return 'var(--navy)';
      default: return 'var(--primary)';
    }
  };

  const getTimeInvestmentBadge = (time: string) => {
    if (time.includes('Seconds')) return { color: '#4CAF50', label: 'Quick' };
    if (time.includes('2-3 minutes')) return { color: '#FF9800', label: 'Moderate' };
    if (time.includes('30 minutes')) return { color: '#2196F3', label: 'Initial Setup' };
    return { color: '#9E9E9E', label: 'Varies' };
  };

  const timeBadge = getTimeInvestmentBadge(currentLevel.timeInvestment);

  return (
    <Layout>
      {/* Header Section */}
      <div className="section" style={{ paddingBottom: '24px', background: 'var(--bg-cream)' }}>
        <div className="container">
          <div className="flex flex-between" style={{ alignItems: 'center', marginBottom: '24px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <Icon name={scenarioData.scenario.icon || 'clipboard'} size={32} color="var(--primary)" />
                <h1 style={{ margin: 0 }}>{scenarioData.scenario.title}</h1>
              </div>
              <p className="text-secondary" style={{ margin: 0 }}>{scenarioData.scenario.description}</p>
            </div>
            <button 
              onClick={() => navigate('/scenarios')} 
              className="btn btn-outline"
            >
              ← All Scenarios
            </button>
          </div>

          {/* Progress Indicator */}
          <div style={{ 
            background: 'white', 
            padding: '24px', 
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <div style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h3 style={{ margin: 0, fontSize: '16px', color: 'var(--navy)' }}>Learning Progress</h3>
                <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                  Approach {currentLevel.level} of {scenarioData.levels.length}
                </span>
              </div>
              
              {/* Progress dots with connecting line */}
              <div style={{ position: 'relative', marginBottom: '20px' }}>
                {/* Connecting line */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '15%',
                  right: '15%',
                  height: '2px',
                  background: 'var(--border-color)',
                  zIndex: 0
                }} />
                
                {/* Progress line (filled portion) */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '15%',
                  width: `${(currentApproachIndex / (scenarioData.levels.length - 1)) * 70}%`,
                  height: '2px',
                  background: getApproachColor(currentLevel.level),
                  zIndex: 1,
                  transition: 'width 0.3s ease'
                }} />
                
                {/* Progress dots */}
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  position: 'relative',
                  zIndex: 2,
                  padding: '0 10%'
                }}>
                  {scenarioData.levels.map((level, index) => (
                    <button
                      key={level.level}
                      onClick={() => {
                        setCurrentApproachIndex(index);
                        // Expand workflow and example sections for Level 2 to show framework toggle
                        const sections = scenarioData.levels[index].level === 2 
                          ? new Set(['overview', 'workflow', 'example']) 
                          : new Set(['overview']);
                        setExpandedSections(sections);
                      }}
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        border: index === currentApproachIndex ? `3px solid ${getApproachColor(level.level)}` : '2px solid var(--border-color)',
                        background: index === currentApproachIndex ? getApproachColor(level.level) : index <= currentApproachIndex ? 'var(--soft-blue)' : 'white',
                        color: index <= currentApproachIndex ? 'white' : 'var(--text-secondary)',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        fontSize: '16px'
                      }}
                      aria-label={`Go to Approach ${level.level}`}
                    >
                      {level.level}
                    </button>
                  ))}
                </div>
              </div>

              {/* Approach labels */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                padding: '0 10%',
                fontSize: '12px' 
              }}>
                {scenarioData.levels.map((level) => (
                  <div 
                    key={level.level}
                    style={{ 
                      textAlign: 'center',
                      width: '80px',
                      opacity: level.level === currentLevel.level ? 1 : 0.6,
                      fontWeight: level.level === currentLevel.level ? 'bold' : 'normal',
                      color: level.level === currentLevel.level ? getApproachColor(level.level) : 'var(--text-secondary)'
                    }}
                  >
                    {level.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="section" style={{ background: 'var(--bg-white)', paddingTop: '32px' }}>
        <div className="container">
          <div style={{
            background: 'white',
            borderRadius: '16px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            border: `3px solid ${getApproachColor(currentLevel.level)}`
          }}>
            {/* Approach Header */}
            <div style={{ 
              background: `linear-gradient(135deg, ${getApproachColor(currentLevel.level)}, ${getApproachColor(currentLevel.level)}dd)`,
              color: 'white',
              padding: '24px 32px',
              position: 'relative'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ flex: 1 }}>
                  <h2 style={{ margin: '0 0 8px 0', fontSize: '32px', fontWeight: 'bold' }}>
                    Approach {currentLevel.level}: {currentLevel.name}
                  </h2>
                  <p style={{ margin: '0 0 16px 0', fontSize: '18px', opacity: 0.95 }}>
                    {currentLevel.description}
                  </p>
                  
                  {/* Quick stats */}
                  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <div style={{ 
                      background: 'rgba(255,255,255,0.2)', 
                      padding: '6px 12px', 
                      borderRadius: '20px',
                      fontSize: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      <Icon name="clock" size={14} />
                      <span>{currentLevel.timeInvestment}</span>
                    </div>
                    <div style={{ 
                      background: timeBadge.color,
                      padding: '6px 12px', 
                      borderRadius: '20px',
                      fontSize: '14px',
                      fontWeight: 'bold'
                    }}>
                      {timeBadge.label}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Sections */}
            <div style={{ padding: '32px' }}>
              {/* Section 1: Overview */}
              <div style={{ marginBottom: '24px' }}>
                <button
                  onClick={() => toggleSection('overview')}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '16px',
                    background: expandedSections.has('overview') ? 'var(--bg-cream)' : 'var(--bg-white)',
                    border: '2px solid var(--border-color)',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Icon name="info" size={20} color={getApproachColor(currentLevel.level)} />
                    <h3 style={{ margin: 0 }}>Overview & When to Use</h3>
                  </div>
                  <Icon 
                    name={expandedSections.has('overview') ? 'chevron-up' : 'chevron-down'} 
                    size={20} 
                  />
                </button>
                
                {expandedSections.has('overview') && (
                  <div style={{ 
                    padding: '24px',
                    background: 'var(--bg-white)',
                    border: '2px solid var(--border-color)',
                    borderTop: 'none',
                    borderRadius: '0 0 8px 8px'
                  }}>
                    <div className="grid grid-2" style={{ gap: '24px' }}>
                      <div>
                        <h4 style={{ color: 'var(--navy)', marginBottom: '12px' }}>
                          <Icon name="target" size={16} style={{ marginRight: '6px', display: 'inline' }} />
                          Best For
                        </h4>
                        <p style={{ margin: '0 0 16px 0' }}>{currentLevel.bestFor}</p>
                        
                        <h4 style={{ color: 'var(--navy)', marginBottom: '12px' }}>
                          <Icon name="layers" size={16} style={{ marginRight: '6px', display: 'inline' }} />
                          Materials Needed
                        </h4>
                        <p style={{ margin: '0 0 16px 0', fontSize: '14px' }}>
                          {currentLevel.level === 1 && "Minimal - just your basic request and meeting transcript (strongly recommended - can be generated from Zoom, Teams, or Google Meet)"}
                          {currentLevel.level === 2 && "Complete context: meeting transcript, roles, objectives, format, tone - transcript greatly improves accuracy"}
                          {currentLevel.level === 3 && "Only specific instance details (transcript auto-loaded into tool)"}
                        </p>

                        <h4 style={{ color: 'var(--navy)', marginBottom: '12px' }}>
                          <Icon name="check-square" size={16} style={{ marginRight: '6px', display: 'inline' }} />
                          Output Quality
                        </h4>
                        <p style={{ margin: 0 }}>{currentLevel.outputQuality}</p>
                      </div>
                      
                      <div>
                        <h4 style={{ color: 'var(--navy)', marginBottom: '12px' }}>
                          <Icon name="briefcase" size={16} style={{ marginRight: '6px', display: 'inline' }} />
                          KCC Use Cases
                        </h4>
                        <ul style={{ margin: 0, paddingLeft: '20px' }}>
                          {currentLevel.kccUseCases.map((useCase, index) => (
                            <li key={index} style={{ marginBottom: '8px' }}>{useCase}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Section 2: Workflow */}
              <div style={{ marginBottom: '24px' }}>
                <button
                  onClick={() => toggleSection('workflow')}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '16px',
                    background: expandedSections.has('workflow') ? 'var(--bg-cream)' : 'var(--bg-white)',
                    border: '2px solid var(--border-color)',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Icon name="git-branch" size={20} color={getApproachColor(currentLevel.level)} />
                    <h3 style={{ margin: 0 }}>How It Works</h3>
                  </div>
                  <Icon 
                    name={expandedSections.has('workflow') ? 'chevron-up' : 'chevron-down'} 
                    size={20} 
                  />
                </button>
                
                {expandedSections.has('workflow') && (
                  <div style={{ 
                    padding: '24px',
                    background: 'var(--bg-white)',
                    border: '2px solid var(--border-color)',
                    borderTop: 'none',
                    borderRadius: '0 0 8px 8px'
                  }}>
                    {/* Framework Toggle for Level 2 */}
                    {currentLevel.level === 2 && currentLevel.frameworks && (
                      <div style={{ marginBottom: '24px' }}>
                        <h4 style={{ marginBottom: '12px' }}>Choose Your Structured Framework</h4>
                        <div style={{ 
                          display: 'flex', 
                          gap: '8px',
                          padding: '4px',
                          background: 'var(--bg-cream)',
                          borderRadius: '6px',
                          marginBottom: '20px'
                        }}>
                          {currentLevel.frameworks.map((framework) => (
                            <button
                              key={framework.framework}
                              onClick={() => setSelectedFramework(framework.framework)}
                              className={`btn ${selectedFramework === framework.framework ? 'btn-primary' : 'btn-outline'}`}
                              style={{ flex: 1, fontSize: '13px' }}
                            >
                              <div>
                                <div style={{ fontWeight: 'bold' }}>{framework.framework}</div>
                                <div style={{ fontSize: '11px', opacity: 0.8 }}>
                                  {framework.promptStructure}
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>

                        {/* Framework Explainer */}
                        <div style={{ 
                          marginBottom: '20px',
                          padding: '16px',
                          background: 'var(--bg-cream)',
                          borderRadius: '8px',
                          border: '2px solid var(--primary)'
                        }}>
                          <h4 style={{ color: 'var(--navy)', marginBottom: '12px' }}>
                            <Icon name="info" size={16} style={{ marginRight: '6px', display: 'inline' }} />
                            {selectedFramework === 'CRAFT' ? 'CRAFT Framework Explained' : 'PCTF Framework Explained'}
                          </h4>
                          
                          {selectedFramework === 'CRAFT' ? (
                            <div style={{ fontSize: '13px', lineHeight: 1.6 }}>
                              <div style={{ marginBottom: '10px' }}>
                                <strong style={{ color: 'var(--primary)' }}>C – Context:</strong> Provide the background or situation the model needs to know. Helps anchor the response in the right scenario.<br/>
                                <em>Example: "You are advising nonprofit leaders exploring AI adoption."</em>
                              </div>
                              <div style={{ marginBottom: '10px' }}>
                                <strong style={{ color: 'var(--primary)' }}>R – Role:</strong> Define who the model should act as. Shapes tone, expertise, and perspective.<br/>
                                <em>Example: "Act as a technology strategist with expertise in nonprofit governance."</em>
                              </div>
                              <div style={{ marginBottom: '10px' }}>
                                <strong style={{ color: 'var(--primary)' }}>A – Action:</strong> State what you want the model to do. Keeps instructions clear and targeted.<br/>
                                <em>Example: "Explain risks of AI in fundraising."</em>
                              </div>
                              <div style={{ marginBottom: '10px' }}>
                                <strong style={{ color: 'var(--primary)' }}>F – Format:</strong> Specify the structure or style of the output. Ensures the response is delivered in the way you can use it.<br/>
                                <em>Example: "Summarize in three concise bullet points."</em>
                              </div>
                              <div>
                                <strong style={{ color: 'var(--primary)' }}>T – Tone:</strong> Set the voice, style, or emotional quality of the response. Makes the answer fit your audience.<br/>
                                <em>Example: "Use plain, accessible language without jargon."</em>
                              </div>
                            </div>
                          ) : (
                            <div style={{ fontSize: '13px', lineHeight: 1.6 }}>
                              <div style={{ marginBottom: '10px' }}>
                                <strong style={{ color: 'var(--primary)' }}>P – Persona:</strong> Define who the responder should be (e.g., expert, coach, teacher, strategist). Helps set tone, voice, and perspective.<br/>
                                <em>Example: "You are a nonprofit technology advisor."</em>
                              </div>
                              <div style={{ marginBottom: '10px' }}>
                                <strong style={{ color: 'var(--primary)' }}>C – Context:</strong> Provide the background or situation that shapes the response. Ensures relevance, accuracy, and tailored guidance.<br/>
                                <em>Example: "The audience is nonprofit leaders with limited technical expertise."</em>
                              </div>
                              <div style={{ marginBottom: '10px' }}>
                                <strong style={{ color: 'var(--primary)' }}>T – Task:</strong> State what you want done — the specific action or output. Keeps the response focused and actionable.<br/>
                                <em>Example: "Explain how nonprofits can adopt AI responsibly."</em>
                              </div>
                              <div>
                                <strong style={{ color: 'var(--primary)' }}>F – Format:</strong> Specify how you want the response presented (structure, style, length). Prevents ambiguity and ensures usable results.<br/>
                                <em>Example: "Summarize in bullet points, plain English, max 200 words."</em>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    <WorkflowDiagram steps={getWorkflowSteps(currentLevel.level)} level={currentLevel.level} />
                    <div style={{ 
                      marginTop: '16px',
                      padding: '16px',
                      background: 'var(--bg-cream)',
                      borderRadius: '8px',
                      fontFamily: 'monospace',
                      fontSize: '14px'
                    }}>
                      {currentLevel.workflowVisual}
                    </div>
                  </div>
                )}
              </div>

              {/* Section 3: Example */}
              <div style={{ marginBottom: '24px' }}>
                <button
                  onClick={() => toggleSection('example')}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '16px',
                    background: expandedSections.has('example') ? 'var(--bg-cream)' : 'var(--bg-white)',
                    border: '2px solid var(--border-color)',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Icon name="code" size={20} color={getApproachColor(currentLevel.level)} />
                    <h3 style={{ margin: 0 }}>Real KCC Example</h3>
                  </div>
                  <Icon 
                    name={expandedSections.has('example') ? 'chevron-up' : 'chevron-down'} 
                    size={20} 
                  />
                </button>
                
                {expandedSections.has('example') && (
                  <div style={{ 
                    padding: '24px',
                    background: 'var(--bg-white)',
                    border: '2px solid var(--border-color)',
                    borderTop: 'none',
                    borderRadius: '0 0 8px 8px'
                  }}>
                    {currentLevel.level === 2 && currentLevel.frameworks ? (
                      /* Level 2 with Framework Toggle */
                      <>

                        {(() => {
                          const currentFramework = currentLevel.frameworks.find(f => f.framework === selectedFramework);
                          return currentFramework ? (
                            <>
                              <div style={{ marginBottom: '20px' }}>
                                <h4 style={{ color: 'var(--primary)', marginBottom: '8px' }}>
                                  <Icon name="file-text" size={16} style={{ marginRight: '4px', display: 'inline' }} />
                                  {currentFramework.framework} Prompt
                                </h4>
                                <div style={{ 
                                  padding: '16px', 
                                  background: 'var(--bg-cream)', 
                                  borderRadius: '8px',
                                  fontSize: '14px',
                                  whiteSpace: 'pre-line',
                                  border: '1px solid var(--border-color)'
                                }}>
                                  {currentFramework.prompt}
                                </div>
                              </div>

                              <div style={{ marginBottom: '20px' }}>
                                <h4 style={{ color: 'var(--accent)', marginBottom: '8px' }}>
                                  <Icon name="cpu" size={16} style={{ marginRight: '4px', display: 'inline' }} />
                                  AI Output
                                </h4>
                                <div style={{ 
                                  padding: '16px', 
                                  background: 'white', 
                                  borderRadius: '8px',
                                  fontSize: '14px',
                                  border: '1px solid var(--border-color)',
                                  whiteSpace: 'pre-line',
                                  maxHeight: '400px',
                                  overflowY: 'auto'
                                }}>
                                  {currentFramework.output}
                                </div>
                              </div>

                              <div style={{ 
                                padding: '16px',
                                background: 'var(--bg-cream)',
                                borderRadius: '8px',
                                border: '1px solid var(--primary)'
                              }}>
                                <h4 style={{ color: 'var(--navy)', marginBottom: '8px' }}>
                                  <Icon name="lightbulb" size={16} style={{ marginRight: '4px', display: 'inline' }} />
                                  Why {currentFramework.framework} Works
                                </h4>
                                <p style={{ margin: 0, fontSize: '14px' }}>
                                  {currentFramework.explanation}
                                </p>
                              </div>
                            </>
                          ) : null;
                        })()}
                      </>
                    ) : currentLevel.level === 3 && currentLevel.platforms ? (
                      /* Level 3 with Platform Toggle */
                      <>
                        <div style={{ marginBottom: '16px' }}>
                          <h4 style={{ marginBottom: '12px' }}>Choose Your Platform</h4>
                          <div style={{ 
                            display: 'flex', 
                            gap: '8px',
                            flexWrap: 'wrap',
                            padding: '4px',
                            background: 'var(--bg-cream)',
                            borderRadius: '6px'
                          }}>
                            {currentLevel.platforms.map((platform) => (
                              <button
                                key={platform.platform}
                                onClick={() => setSelectedPlatform(platform.platform)}
                                className={`btn ${selectedPlatform === platform.platform ? 'btn-primary' : 'btn-outline'}`}
                                style={{ fontSize: '13px', padding: '8px 16px' }}
                              >
                                {platform.platformName}
                              </button>
                            ))}
                          </div>
                        </div>

                        {(() => {
                          const currentPlatform = currentLevel.platforms.find(p => p.platform === selectedPlatform);
                          return currentPlatform ? (
                            <>
                              <div style={{ 
                                marginBottom: '20px',
                                padding: '16px',
                                background: 'var(--bg-white)',
                                borderRadius: '8px',
                                border: '1px solid var(--border-color)'
                              }}>
                                <h4 style={{ color: 'var(--navy)', marginBottom: '8px' }}>
                                  <Icon name="info" size={16} style={{ marginRight: '4px', display: 'inline' }} />
                                  About {currentPlatform.platformName}
                                </h4>
                                <p style={{ margin: 0, fontSize: '14px' }}>
                                  {currentPlatform.description}
                                </p>
                              </div>

                              <div style={{ marginBottom: '20px' }}>
                                <h4 style={{ color: 'var(--primary)', marginBottom: '8px' }}>
                                  <Icon name="file-text" size={16} style={{ marginRight: '4px', display: 'inline' }} />
                                  Prompt Input
                                </h4>
                                <div style={{ 
                                  padding: '16px', 
                                  background: 'var(--bg-cream)', 
                                  borderRadius: '8px',
                                  fontSize: '14px',
                                  whiteSpace: 'pre-line',
                                  border: '1px solid var(--border-color)'
                                }}>
                                  {currentPlatform.prompt}
                                </div>
                              </div>

                              <div style={{ marginBottom: '20px' }}>
                                <h4 style={{ color: 'var(--accent)', marginBottom: '8px' }}>
                                  <Icon name="cpu" size={16} style={{ marginRight: '4px', display: 'inline' }} />
                                  AI Output
                                </h4>
                                <div style={{ 
                                  padding: '16px', 
                                  background: 'white', 
                                  borderRadius: '8px',
                                  fontSize: '14px',
                                  border: '1px solid var(--border-color)',
                                  whiteSpace: 'pre-line',
                                  maxHeight: '400px',
                                  overflowY: 'auto'
                                }}>
                                  {currentPlatform.output}
                                </div>
                              </div>

                              <div style={{ 
                                padding: '16px',
                                background: 'var(--bg-cream)',
                                borderRadius: '8px',
                                border: '1px solid var(--accent)'
                              }}>
                                <h4 style={{ color: 'var(--navy)', marginBottom: '8px' }}>
                                  <Icon name="settings" size={16} style={{ marginRight: '4px', display: 'inline' }} />
                                  Setup Instructions
                                </h4>
                                <div style={{ fontSize: '13px', whiteSpace: 'pre-line' }}>
                                  {currentPlatform.setupInstructions}
                                </div>
                              </div>
                            </>
                          ) : null;
                        })()}
                      </>
                    ) : (
                      /* Level 1 - Simple Example */
                      <>
                        {currentLevel.prompt && (
                          <div style={{ marginBottom: '20px' }}>
                            <h4 style={{ color: 'var(--primary)', marginBottom: '8px' }}>
                              <Icon name="file-text" size={16} style={{ marginRight: '4px', display: 'inline' }} />
                              Prompt Input
                            </h4>
                            <div style={{ 
                              padding: '16px', 
                              background: 'var(--bg-cream)', 
                              borderRadius: '8px',
                              fontSize: '14px',
                              border: '1px solid var(--border-color)'
                            }}>
                              {currentLevel.prompt}
                            </div>
                          </div>
                        )}

                        {currentLevel.output && (
                          <div style={{ marginBottom: '20px' }}>
                            <h4 style={{ color: 'var(--accent)', marginBottom: '8px' }}>
                              <Icon name="cpu" size={16} style={{ marginRight: '4px', display: 'inline' }} />
                              AI Output
                            </h4>
                            <div style={{ 
                              padding: '16px', 
                              background: 'white', 
                              borderRadius: '8px',
                              fontSize: '14px',
                              border: '1px solid var(--border-color)',
                              whiteSpace: 'pre-line',
                              maxHeight: '400px',
                              overflowY: 'auto'
                            }}>
                              {currentLevel.output}
                            </div>
                          </div>
                        )}

                        {currentLevel.explanation && (
                          <div style={{ 
                            padding: '16px',
                            background: 'var(--bg-cream)',
                            borderRadius: '8px',
                            border: '1px solid var(--primary)'
                          }}>
                            <h4 style={{ color: 'var(--navy)', marginBottom: '8px' }}>
                              <Icon name="lightbulb" size={16} style={{ marginRight: '4px', display: 'inline' }} />
                              Why This Approach Works
                            </h4>
                            <p style={{ margin: 0, fontSize: '14px' }}>
                              {currentLevel.explanation}
                            </p>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* Navigation Controls */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginTop: '32px',
                padding: '24px',
                background: 'var(--bg-cream)',
                borderRadius: '12px',
                border: '2px solid var(--border-color)'
              }}>
                <button
                  onClick={goToPrevious}
                  disabled={currentApproachIndex === 0}
                  className="btn btn-outline"
                  style={{ 
                    opacity: currentApproachIndex === 0 ? 0.5 : 1,
                    cursor: currentApproachIndex === 0 ? 'not-allowed' : 'pointer'
                  }}
                >
                  <Icon name="arrow-left" size={16} style={{ marginRight: '8px', display: 'inline' }} />
                  Previous Approach
                </button>

                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                    Progress
                  </div>
                  <div style={{ fontWeight: 'bold', color: 'var(--navy)' }}>
                    {currentApproachIndex + 1} of {scenarioData.levels.length} Approaches
                  </div>
                </div>

                {currentApproachIndex < scenarioData.levels.length - 1 ? (
                  <button
                    onClick={goToNext}
                    className="btn btn-primary"
                  >
                    Next Approach
                    <Icon name="arrow-right" size={16} style={{ marginLeft: '8px', display: 'inline' }} />
                  </button>
                ) : (
                  <button
                    onClick={handleComplete}
                    className="btn btn-accent"
                    style={{ fontWeight: 'bold' }}
                  >
                    Complete & View Summary
                    <Icon name="check-circle" size={16} style={{ marginLeft: '8px', display: 'inline' }} />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Quick Tips */}
          <div style={{ 
            marginTop: '32px',
            padding: '20px',
            background: 'var(--bg-white)',
            borderRadius: '12px',
            border: '2px solid var(--primary)',
            textAlign: 'center'
          }}>
            <h4 style={{ color: 'var(--navy)', marginBottom: '8px' }}>
              <Icon name="star" size={16} style={{ marginRight: '6px', display: 'inline' }} />
              Remember
            </h4>
            <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: 'var(--text-secondary)' }}>
              These are <strong>alternative approaches</strong>, not sequential steps. 
              Choose the approach that matches your task's complexity and available time. 
              Most nonprofits use Approaches 1-2 for daily tasks.
            </p>
          </div>

          {/* Tool Requirements */}
          <div style={{ 
            marginTop: '16px',
            padding: '20px',
            background: 'var(--bg-cream)',
            borderRadius: '12px',
            border: '2px solid var(--accent)'
          }}>
            <h4 style={{ color: 'var(--navy)', marginBottom: '12px', textAlign: 'center' }}>
              <Icon name="settings" size={16} style={{ marginRight: '6px', display: 'inline' }} />
              Recommended AI Tools for Nonprofits
            </h4>
            <div style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              <p style={{ margin: '0 0 12px 0', fontWeight: 'bold', color: 'var(--navy)' }}>
                ⚠️ We do NOT recommend free AI tools for professional nonprofit work
              </p>
              <p style={{ margin: '0 0 16px 0' }}>
                <strong>Organizational Options (Recommended):</strong>
              </p>
              <ul style={{ margin: '0 0 16px 0', paddingLeft: '20px', textAlign: 'left' }}>
                <li><strong>Microsoft 365 Copilot</strong> - If your organization uses Microsoft 365</li>
                <li><strong>Google Gemini</strong> - If your organization uses Google Workspace</li>
                <li><strong>Claude Teams</strong> - Enterprise accounts with enhanced privacy</li>
                <li><strong>ChatGPT Teams</strong> - Team accounts with data protection</li>
              </ul>
              <p style={{ margin: 0, fontSize: '13px', fontStyle: 'italic' }}>
                <strong>Pro Tip:</strong> Always use meeting transcripts when available - they can be generated automatically from Zoom, Microsoft Teams, or Google Meet recordings and dramatically improve AI output quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProgressionView;