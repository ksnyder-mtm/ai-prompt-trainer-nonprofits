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

  const getTimeImpact = (scenarioId: string) => {
    const impacts = {
      'board-meeting': {
        timeSaved: '2-3 hours per meeting',
        monthlyImpact: '24-36 hours saved annually',
        efficiency: '85% reduction in follow-up time'
      },
      'donor-thank-you': {
        timeSaved: '15 hours per month',
        monthlyImpact: '180 hours saved annually',
        efficiency: '6-minute average response time'
      },
      'volunteer-recruitment': {
        timeSaved: '8 hours per campaign',
        monthlyImpact: '96 hours saved annually',
        efficiency: '150+ volunteers recruited seamlessly'
      },
      'workshop-planning': {
        timeSaved: '5 hours per workshop',
        monthlyImpact: '60 hours saved annually',
        efficiency: '200+ participants per month'
      }
    };
    return impacts[scenarioId as keyof typeof impacts] || impacts['board-meeting'];
  };

  const impact = getTimeImpact(state.scenarioId);

  const nextSteps = [
    'Start with Level 1 (Basic Prompts) for immediate tasks',
    'Implement Level 2 (CRAFT structure) for important communications',
    'Set up Level 3 (Packaged Tools) for recurring tasks',
    'Plan Level 4 (Automation) for high-volume processes',
    'Train your team on the progression pathway'
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
            You now understand how AI prompting can evolve from basic queries to powerful automated workflows 
            that save nonprofit organizations significant time and resources.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <h2 className="text-center mb-4">Your Learning Impact</h2>
          
          <div className="grid grid-3">
            <div className="card text-center">
              <h3 style={{ color: 'var(--primary)', marginBottom: '8px' }}>Time Savings</h3>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--navy)' }}>
                {impact.timeSaved}
              </div>
              <p className="text-secondary">Per implementation cycle</p>
            </div>
            
            <div className="card text-center">
              <h3 style={{ color: 'var(--accent)', marginBottom: '8px' }}>Annual Impact</h3>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--navy)' }}>
                {impact.monthlyImpact}
              </div>
              <p className="text-secondary">Staff time returned to mission work</p>
            </div>
            
            <div className="card text-center">
              <h3 style={{ color: 'var(--soft-blue)', marginBottom: '8px' }}>Efficiency Gain</h3>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--navy)' }}>
                {impact.efficiency}
              </div>
              <p className="text-secondary">Measurable improvement</p>
            </div>
          </div>

          <div className="card" style={{ marginTop: '32px' }}>
            <h3 style={{ marginBottom: '16px' }}>Key Insights from Your Journey</h3>
            <div className="grid grid-2" style={{ gap: '24px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Icon name="zap" size={20} color="var(--primary)" />
                  <h4 style={{ color: 'var(--primary)', margin: 0 }}>Level Progression</h4>
                </div>
                <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '14px', lineHeight: 1.6 }}>
                  <li><strong>Level 1:</strong> Quick wins with basic prompts</li>
                  <li><strong>Level 2:</strong> Consistent results with CRAFT structure</li>
                  <li><strong>Level 3:</strong> Scalable tools with organizational context</li>
                  <li><strong>Level 4:</strong> Automated workflows for maximum efficiency</li>
                </ul>
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Icon name="target" size={20} color="var(--accent)" />
                  <h4 style={{ color: 'var(--accent)', margin: 0 }}>When to Use Each Level</h4>
                </div>
                <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '14px', lineHeight: 1.6 }}>
                  <li><strong>One-off tasks:</strong> Level 1 basic prompts</li>
                  <li><strong>Important comms:</strong> Level 2 structured format</li>
                  <li><strong>Regular activities:</strong> Level 3 packaged tools</li>
                  <li><strong>Recurring processes:</strong> Level 4 automation</li>
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
                <h4 style={{ color: 'var(--navy)', marginBottom: '12px' }}>Budget Considerations:</h4>
                <div style={{ fontSize: '14px', lineHeight: 1.6 }}>
                  <p><strong>Level 1-2:</strong> Free with existing AI tools</p>
                  <p><strong>Level 3:</strong> $20-60/month for premium AI tools</p>
                  <p><strong>Level 4:</strong> $50-200/month for automation platforms</p>
                  <p style={{ marginTop: '12px', color: 'var(--primary)' }}>
                    <strong>ROI:</strong> Time savings typically justify costs within first month
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