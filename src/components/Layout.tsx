import React from 'react';
import mtmLogo from '../assets/mtm-logo.png';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <img src={mtmLogo} alt="Meet the Moment" className="header-logo" />
            <h2 style={{ margin: 0, fontSize: '24px', color: 'var(--navy)' }}>
              AI Prompt Progression Trainer
            </h2>
          </div>
        </div>
      </header>
      
      <main style={{ flex: 1 }}>
        {children}
      </main>
      
      <footer className="footer">
        <img src={mtmLogo} alt="Meet the Moment" className="footer-logo" />
        <p className="footer-text">Prototype by Meet the Moment</p>
      </footer>
    </>
  );
};

export default Layout;