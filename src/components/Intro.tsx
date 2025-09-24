import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';
import Icon from './Icon';

const Intro: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/scenarios');
  };

  const handleSkipIntro = () => {
    navigate('/scenarios');
  };

  return (
    <Layout>
      <div className="section" style={{ background: 'var(--bg-cream)', paddingTop: '24px', paddingBottom: '24px' }}>
        <div className="container text-center">
          <h1>AI Prompt Training for Nonprofits</h1>
          <p style={{ fontSize: '20px', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 16px' }}>
            Learn how to create effective AI prompts - from basic queries to structured formats - using the Kitty Crochet Collective as your guide.
          </p>
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 32px', fontStyle: 'italic' }}>
            The Kitty Crochet Collective is a 501(c)(3) nonprofit in Cedar Rapids, Iowa, that partners with knitting clubs to create hand-stitched sweaters for shelter kittens, increasing their adoption rates by 65%. With a $5,000 annual technology budget and 25 staff members serving 400+ kittens yearly, KCC represents the resource constraints and impact potential of many nonprofits today.
          </p>
          
          <div className="grid grid-2" style={{ marginTop: '48px', marginBottom: '48px' }}>
            <div className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <Icon name="users" size={24} color="var(--primary)" />
                <h3 style={{ margin: 0 }}>For Nonprofit Professionals</h3>
              </div>
              <p>Whether you're an executive using basic templates or a development manager already experimenting with ChatGPT, this interactive trainer meets you where you are.</p>
            </div>
            <div className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <Icon name="target" size={24} color="var(--primary)" />
                <h3 style={{ margin: 0 }}>Real-World Scenarios</h3>
              </div>
              <p>Work through actual KCC situations: board meeting follow-ups, donor thank you notes, volunteer recruitment, and workshop planning.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <h2 className="text-center mb-4">From Basic to Structured Prompts</h2>

          <div className="grid grid-2" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="card text-center">
              <div className="level-number">1</div>
              <h3>Basic Prompt</h3>
              <p className="text-secondary">Simple questions to AI chat. Quick but variable results.</p>
              <div style={{ margin: '16px 0', padding: '12px', background: 'var(--bg-cream)', borderRadius: '4px', fontSize: '14px' }}>
                "Write a thank you email to our donors"
              </div>
              <div className="text-secondary flex" style={{ alignItems: 'center', gap: '12px', justifyContent: 'center' }}>
                <span className="flex" style={{ alignItems: 'center', gap: '4px' }}>
                  <Icon name="clock" size={16} color="var(--text-secondary)" />
                  Seconds
                </span>
                <span className="flex" style={{ alignItems: 'center', gap: '4px' }}>
                  <Icon name="target" size={16} color="var(--text-secondary)" />
                  Quick tasks
                </span>
              </div>
            </div>
            
            <div className="card text-center">
              <div className="level-number">2</div>
              <h3>Structured Format</h3>
              <p className="text-secondary">CRAFT framework ensures consistent, professional results.</p>
              <div style={{ margin: '16px 0', padding: '12px', background: 'var(--bg-cream)', borderRadius: '4px', fontSize: '14px' }}>
                Context + Role + Action + Format + Tone
              </div>
              <div className="text-secondary flex" style={{ alignItems: 'center', gap: '12px', justifyContent: 'center' }}>
                <span className="flex" style={{ alignItems: 'center', gap: '4px' }}>
                  <Icon name="clock" size={16} color="var(--text-secondary)" />
                  &lt;10 minutes
                </span>
                <span className="flex" style={{ alignItems: 'center', gap: '4px' }}>
                  <Icon name="target" size={16} color="var(--text-secondary)" />
                  Important communications
                </span>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <h3 style={{ color: 'var(--accent)' }}>Why Structure Matters</h3>
            <p style={{ maxWidth: '600px', margin: '16px auto', color: 'var(--text-secondary)' }}>
              See the difference between basic and structured prompts through real nonprofit scenarios.
              Learn how frameworks like CRAFT and PCTF help you get consistent, professional results from AI.
            </p>
          </div>

          <div className="text-center mt-4">
            <button onClick={handleGetStarted} className="btn btn-primary" style={{ marginRight: '16px' }}>
              Start Learning <Icon name="zap" size={16} style={{ marginLeft: '4px' }} />
            </button>
            <button onClick={handleSkipIntro} className="btn btn-outline">
              Skip Intro
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Intro;