import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="university-badge">
            <span className="badge-icon">🏛️</span>
            <div className="badge-content">
              <div className="badge-title">Novia University of Applied Sciences</div>
              <div className="badge-subtitle">Intelligent Systems Program</div>
            </div>
          </div>
          
          <div className="footer-info">
            <p className="footer-description">
              Master of Engineering, Intelligent Systems • Activity Classification Course
              <br />
              This is an open-source educational tool for HAR research. Contributions welcome.
            </p>
            
            <div className="footer-links">
              <a href="#" className="footer-link">
                <span className="link-icon">📚</span>
                Documentation
              </a>
              <a href="#" className="footer-link">
                <span className="link-icon">💾</span>
                GitHub
              </a>
              <a href="#" className="footer-link">
                <span className="link-icon">📧</span>
                Contact
              </a>
              <a href="#" className="footer-link">
                <span className="link-icon">🔗</span>
                API
              </a>
            </div>
          </div>
          
          <div className="footer-copyright">
            <div className="copyright-text">
              © {new Date().getFullYear()} HAR Studio. All rights reserved.
            </div>
            <div className="copyright-credits">
              Made with ❤️ by Novia UAS Students
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-decoration"></div>
      
      <style jsx>{`
        .footer {
          background: var(--bg-secondary);
          padding: 60px 0 30px;
          position: relative;
          overflow: hidden;
        }
        
        .footer-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }
        
        .university-badge {
          display: inline-flex;
          align-items: center;
          gap: 15px;
          background: linear-gradient(135deg, var(--blue-primary), var(--purple-primary));
          padding: 20px 40px;
          border-radius: 50px;
          margin-bottom: 40px;
          box-shadow: var(--shadow-lg);
          animation: float-subtle 4s ease-in-out infinite;
        }
        
        .badge-icon {
          font-size: 2rem;
        }
        
        .badge-content {
          text-align: left;
        }
        
        .badge-title {
          font-weight: 700;
          font-size: 1.2rem;
          color: white;
        }
        
        .badge-subtitle {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.9);
        }
        
        .footer-info {
          margin-bottom: 40px;
        }
        
        .footer-description {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 30px;
          font-size: 1.1rem;
        }
        
        .footer-links {
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
        }
        
        .footer-link {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-secondary);
          text-decoration: none;
          padding: 10px 20px;
          border-radius: var(--border-radius-sm);
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.05);
        }
        
        .footer-link:hover {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          transform: translateY(-3px);
        }
        
        .link-icon {
          font-size: 1.2rem;
        }
        
        .footer-copyright {
          padding-top: 30px;
          border-top: 1px solid var(--border-light);
        }
        
        .copyright-text {
          color: var(--text-muted);
          margin-bottom: 10px;
          font-size: 0.9rem;
        }
        
        .copyright-credits {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }
        
        .footer-decoration {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100px;
          background: linear-gradient(to top, var(--bg-primary), transparent);
          pointer-events: none;
        }
        
        @media (max-width: 768px) {
          .footer {
            padding: 40px 0 20px;
          }
          
          .university-badge {
            flex-direction: column;
            text-align: center;
            padding: 20px;
          }
          
          .badge-content {
            text-align: center;
          }
          
          .footer-links {
            gap: 15px;
          }
          
          .footer-link {
            padding: 8px 16px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;