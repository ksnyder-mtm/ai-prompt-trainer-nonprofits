import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Layout from './Layout';
import Icon from './Icon';
import { scenariosData } from '../data/scenarios';

const CompletionSummary: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as {
    scenarioId: string;
    scenarioTitle: string;
    completedLevels: number[];
  };

  if (!state) {
    navigate('/scenarios');
    return null;
  }

  const scenarioData = scenariosData.find(s => s.scenario.id === state.scenarioId);
  const scenarioIcon = scenarioData?.scenario.icon || 'check-circle';


  const nextSteps = [
    'Practice with basic prompts to understand AI capabilities',
    'Learn the CRAFT framework (Context, Role, Action, Format, Tone)',
    'Try the PCTF framework (Persona, Context, Task, Format)',
    'Apply structured prompts to your nonprofit\'s specific needs',
    'Share these techniques with your team'
  ];

  return (
    <Layout>
      <div className="section" style={{ background: 'var(--bg-cream)', textAlign: 'center' }}>
        <div className="container">
          <div className="flex" style={{ alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '16px' }}>
            <Icon name={scenarioIcon} size={48} color="var(--primary)" />
            <h1 style={{ margin: 0 }}>Congratulations!</h1>
          </div>
          <h2 style={{ color: 'var(--primary)', marginBottom: '16px' }}>
            You've Completed: {state.scenarioTitle}
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            You now understand the difference between basic and structured prompts,
            and how frameworks like CRAFT and PCTF can help you get better results from AI.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <h2 className="text-center mb-4">What You've Learned</h2>

          <div className="grid grid-2" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="card text-center">
              <h3 style={{ color: 'var(--primary)', marginBottom: '8px' }}>Basic Prompts</h3>
              <p className="text-secondary">
                Simple, conversational requests that get quick results but may vary in quality
              </p>
            </div>

            <div className="card text-center">
              <h3 style={{ color: 'var(--accent)', marginBottom: '8px' }}>Structured Prompts</h3>
              <p className="text-secondary">
                Framework-based prompts that deliver consistent, professional outputs
              </p>
            </div>
          </div>

          <div className="card" style={{ marginTop: '32px' }}>
            <h3 style={{ marginBottom: '16px' }}>Key Insights from Your Journey</h3>
            <div className="grid grid-2" style={{ gap: '24px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Icon name="zap" size={20} color="var(--primary)" />
                  <h4 style={{ color: 'var(--primary)', margin: 0 }}>Prompt Structure</h4>
                </div>
                <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '14px', lineHeight: 1.6 }}>
                  <li><strong>Basic:</strong> Quick, simple prompts for immediate needs</li>
                  <li><strong>Structured:</strong> Framework-based prompts for professional results</li>
                  <li><strong>CRAFT:</strong> Context, Role, Action, Format, Tone</li>
                  <li><strong>PCTF:</strong> Persona, Context, Task, Format</li>
                </ul>
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Icon name="target" size={20} color="var(--accent)" />
                  <h4 style={{ color: 'var(--accent)', margin: 0 }}>When to Use Each Approach</h4>
                </div>
                <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '14px', lineHeight: 1.6 }}>
                  <li><strong>Quick brainstorming:</strong> Basic prompts</li>
                  <li><strong>Important communications:</strong> Structured prompts</li>
                  <li><strong>Professional documents:</strong> CRAFT framework</li>
                  <li><strong>Expert perspectives:</strong> PCTF framework</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card" style={{ marginTop: '24px' }}>
            <h3 style={{ marginBottom: '16px' }}>Your Next Steps</h3>
            <div className="grid grid-2" style={{ gap: '24px' }}>
              <div>
                <h4 style={{ color: 'var(--navy)', marginBottom: '12px' }}>Immediate Actions:</h4>
                <ol style={{ margin: 0, paddingLeft: '16px', fontSize: '14px', lineHeight: 1.6 }}>
                  {nextSteps.map((step, index) => (
                    <li key={index} style={{ marginBottom: '8px' }}>{step}</li>
                  ))}
                </ol>
              </div>
              <div>
                <h4 style={{ color: 'var(--navy)', marginBottom: '12px' }}>Framework Selection:</h4>
                <div style={{ fontSize: '14px', lineHeight: 1.6 }}>
                  <p><strong>CRAFT:</strong> Best for clear, task-oriented outputs</p>
                  <p><strong>PCTF:</strong> Best for specialized, expert perspectives</p>
                  <p style={{ marginTop: '12px', color: 'var(--primary)' }}>
                    <strong>Tip:</strong> Experiment with both frameworks to find what works best for your needs
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <div className="flex gap-2" style={{ justifyContent: 'center', flexWrap: 'wrap' }}>
              <button 
                onClick={() => navigate('/scenarios')} 
                className="btn btn-primary"
              >
                Explore Another Scenario
              </button>
              <button 
                onClick={() => navigate('/')} 
                className="btn btn-outline"
              >
                Start Over
              </button>
            </div>
            
            <p className="text-secondary" style={{ marginTop: '24px', fontSize: '14px' }}>
              Want to implement these strategies at your nonprofit? 
              <br />Consider reaching out to Meet the Moment for hands-on AI implementation support.
            </p>
          </div>
        </div>
      </div>

      <div className="section" style={{ background: 'var(--bg-cream)' }}>
        <div className="container text-center">
          <h3>Continue Your AI Learning Journey</h3>
          <p style={{ marginBottom: '24px', color: 'var(--text-secondary)' }}>
            Each KCC scenario teaches different aspects of nonprofit AI implementation.
          </p>
          
          <div className="grid grid-4">
            {scenariosData
              .filter(s => s.scenario.id !== state.scenarioId)
              .map((scenarioData) => (
                <button
                  key={scenarioData.scenario.id}
                  onClick={() => navigate(`/progression/${scenarioData.scenario.id}`)}
                  className="card"
                  style={{ 
                    cursor: 'pointer', 
                    textAlign: 'center',
                    padding: '16px',
                    background: 'white',
                    border: '1px solid var(--border-color)',
                    transition: 'transform 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div style={{ marginBottom: '8px' }}>
                    <Icon name={scenarioData.scenario.icon || 'clipboard'} size={32} color="var(--primary)" />
                  </div>
                  <h4 style={{ fontSize: '14px', marginBottom: '4px' }}>
                    {scenarioData.scenario.title}
                  </h4>
                  <p style={{ fontSize: '12px', color: 'var(--text-secondary)', margin: 0 }}>
                    {scenarioData.materialCombinations.length} combinations
                  </p>
                </button>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CompletionSummary;