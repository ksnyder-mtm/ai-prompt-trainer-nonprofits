import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';
import Icon from './Icon';
import { scenariosData } from '../data/scenarios';

const ScenarioSelection: React.FC = () => {
  const navigate = useNavigate();

  const handleScenarioSelect = (scenarioId: string) => {
    navigate(`/progression/${scenarioId}`);
  };

  return (
    <Layout>
      <div className="section">
        <div className="container">
          <div className="text-center mb-4">
            <h1>Choose a KCC Scenario</h1>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
              Each scenario shows the difference between basic and structured prompts.
              Pick one that matches your current challenges at your nonprofit.
            </p>
          </div>

          <div className="grid grid-2">
            {scenariosData.map((scenarioData) => (
              <div 
                key={scenarioData.scenario.id}
                className="card"
                style={{ cursor: 'pointer', transition: 'transform 0.2s ease' }}
                onClick={() => handleScenarioSelect(scenarioData.scenario.id)}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div className="flex" style={{ alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ flexShrink: 0, padding: '8px' }}>
                    <Icon name={scenarioData.scenario.icon || 'clipboard'} size={48} color="var(--primary)" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ marginBottom: '8px' }}>{scenarioData.scenario.title}</h3>
                    <p style={{ marginBottom: '16px', fontSize: '14px', color: 'var(--text-secondary)' }}>
                      {scenarioData.scenario.description}
                    </p>
                    
                    <div style={{ marginBottom: '16px' }}>
                      <h4 style={{ fontSize: '14px', color: 'var(--navy)', marginBottom: '8px' }}>
                        Materials Available:
                      </h4>
                      <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '13px', color: 'var(--text-secondary)' }}>
                        {scenarioData.scenario.materialsAvailable.slice(0, 3).map((material, index) => (
                          <li key={index}>{material}</li>
                        ))}
                        {scenarioData.scenario.materialsAvailable.length > 3 && (
                          <li>+ {scenarioData.scenario.materialsAvailable.length - 3} more...</li>
                        )}
                      </ul>
                    </div>

                    <div className="flex" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                        {scenarioData.materialCombinations.length} material combinations
                      </span>
                      <div className="btn btn-primary" style={{ fontSize: '14px', padding: '8px 16px' }}>
                        Explore →
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <button
              onClick={() => navigate('/')}
              className="btn btn-outline"
            >
              ← Back to Introduction
            </button>
          </div>
        </div>
      </div>

      <div className="section" style={{ background: 'var(--bg-cream)', paddingTop: '32px', paddingBottom: '32px' }}>
        <div className="container text-center">
          <h3>Why These Scenarios?</h3>
          <div className="grid grid-2" style={{ marginTop: '24px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Icon name="target" size={20} color="var(--navy)" />
                <h4 style={{ color: 'var(--navy)', margin: 0 }}>Common Challenges</h4>
              </div>
              <p className="text-secondary" style={{ fontSize: '14px' }}>
                These are the exact situations KCC faces monthly - from processing board meetings to thanking donors to recruiting volunteers.
              </p>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Icon name="trending-up" size={20} color="var(--navy)" />
                <h4 style={{ color: 'var(--navy)', margin: 0 }}>Budget-Conscious</h4>
              </div>
              <p className="text-secondary" style={{ fontSize: '14px' }}>
                With only $5,000 annually for technology, KCC needs solutions that provide maximum impact for minimal investment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ScenarioSelection;