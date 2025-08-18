import React from 'react';
import Icon from './Icon';
import { ArrowRightIcon } from './Icons';

interface WorkflowStep {
  icon: string;
  label: string;
  color?: string;
}

interface WorkflowDiagramProps {
  steps: WorkflowStep[];
  level: number;
}

const WorkflowDiagram: React.FC<WorkflowDiagramProps> = ({ steps, level }) => {
  const getStepIcon = (iconName: string) => {
    return <Icon name={iconName} size={20} color="white" />;
  };

  const getLevelColor = (level: number) => {
    const colors = {
      1: 'var(--soft-blue)',
      2: 'var(--primary)', 
      3: 'var(--accent)',
      4: 'var(--navy)'
    };
    return colors[level as keyof typeof colors] || 'var(--primary)';
  };

  return (
    <div style={{ 
      padding: '16px', 
      background: 'var(--bg-cream)', 
      borderRadius: '8px',
      border: `2px solid ${getLevelColor(level)}`,
      margin: '16px 0'
    }}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '8px',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              minWidth: '80px',
              padding: '8px'
            }}>
              <div style={{ 
                width: '40px', 
                height: '40px',
                borderRadius: '50%',
                background: step.color || getLevelColor(level),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '18px',
                marginBottom: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}>
{getStepIcon(step.icon)}
              </div>
              <span style={{ 
                fontSize: '12px', 
                textAlign: 'center',
                color: 'var(--text-primary)',
                fontWeight: '500',
                lineHeight: 1.2
              }}>
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div style={{ margin: '0 4px', flexShrink: 0 }}>
                <ArrowRightIcon 
                  size={20} 
                  color={getLevelColor(level)}
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default WorkflowDiagram;