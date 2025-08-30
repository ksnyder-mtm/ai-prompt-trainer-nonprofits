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
          <h1>Explore AI Prompting for Nonprofits</h1>
          <p style={{ fontSize: '20px', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 16px' }}>
            Learn how AI prompting evolves from basic queries to automated workflows using the Kitty Crochet Collective as your guide.
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
          <h2 className="text-center mb-4">The 4-Level AI Journey</h2>
          
          <div className="grid grid-4">
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
                  <10 minutes
                </span>
                <span className="flex" style={{ alignItems: 'center', gap: '4px' }}>
                  <Icon name="target" size={16} color="var(--text-secondary)" />
                  Important communications
                </span>
              </div>
            </div>
            
            <div className="card text-center">
              <div className="level-number">3</div>
              <h3>Packaged Tools</h3>
              <p className="text-secondary">Pre-configured AI assistants with your org's voice saved.</p>
              <div style={{ margin: '16px 0', padding: '12px', background: 'var(--bg-cream)', borderRadius: '4px', fontSize: '14px' }}>
                "KCC Donor Communications Hub"
              </div>
              <div className="text-secondary flex" style={{ alignItems: 'center', gap: '12px', justifyContent: 'center' }}>
                <span className="flex" style={{ alignItems: 'center', gap: '4px' }}>
                  <Icon name="clock" size={16} color="var(--text-secondary)" />
                  <1 hour setup
                </span>
                <span className="flex" style={{ alignItems: 'center', gap: '4px' }}>
                  <Icon name="target" size={16} color="var(--text-secondary)" />
                  Regular tasks
                </span>
              </div>
            </div>
            
            <div className="card text-center">
              <div className="level-number">4</div>
              <h3>Automated Workflows</h3>
              <p className="text-secondary">AI runs automatically based on triggers in your systems.</p>
              <div style={{ margin: '16px 0', padding: '12px', background: 'var(--bg-cream)', borderRadius: '4px', fontSize: '14px' }}>
                Donation received → Thank you sent
              </div>
              <div className="text-secondary flex" style={{ alignItems: 'center', gap: '12px', justifyContent: 'center' }}>
                <span className="flex" style={{ alignItems: 'center', gap: '4px' }}>
                  <Icon name="clock" size={16} color="var(--text-secondary)" />
                  1-2+ hours setup
                </span>
                <span className="flex" style={{ alignItems: 'center', gap: '4px' }}>
                  <Icon name="target" size={16} color="var(--text-secondary)" />
                  Recurring processes
                </span>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <h3 style={{ color: 'var(--accent)' }}>Real Impact for KCC</h3>
            <div className="grid grid-3" style={{ marginTop: '24px' }}>
              <div className="text-center">
                <div className="flex" style={{ alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '4px' }}>
                  <Icon name="bar-chart" size={20} color="var(--primary)" />
                  <strong>15 hours/month</strong>
                </div>
                <span className="text-secondary">Saved on donor communications</span>
              </div>
              <div className="text-center">
                <div className="flex" style={{ alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '4px' }}>
                  <Icon name="zap" size={20} color="var(--primary)" />
                  <strong>6 minutes</strong>
                </div>
                <span className="text-secondary">Average response time to donors</span>
              </div>
              <div className="text-center">
                <div className="flex" style={{ alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '4px' }}>
                  <Icon name="trending-up" size={20} color="var(--primary)" />
                  <strong>65% increase</strong>
                </div>
                <span className="text-secondary">Adoption rates with AI-assisted content</span>
              </div>
            </div>
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