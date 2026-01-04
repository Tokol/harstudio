import React from 'react';

const Contributors = () => {
  const contributors = [
    {
      name: "Ellen Williamsson",
      role: "Gold Medalist Swimmer",
      description: "Professional Athlete Data Contributor",
      location: "Vaasa, Finland",
      icon: "🏊‍♀️",
      type: "champion"
    },
    {
      name: "Research Team",
      role: "Development Team",
      description: "Jonas Williamsson, Suresh Lama, Ramandeep Singh",
      location: "Novia UAS Students",
      icon: "👥",
      type: "team"
    },
    {
      name: "Ray Pörn",
      role: "Degree Head & Lecturer",
      description: "Intelligent Systems Program",
      location: "Novia University of Applied Sciences",
      icon: "👨‍🏫",
      type: "academic"
    }
  ];

  return (
    <div className="contributors-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">🎖️</div>
          <h2 className="section-title">Featured Contributors</h2>
          <p className="section-subtitle">Meet the team behind HAR Studio</p>
        </div>
        
        <div className="contributors-grid">
          {contributors.map((contributor, index) => (
            <div 
              key={index} 
              className={`contributor-card contributor-${contributor.type}`}
            >
              <div className="contributor-avatar">
                <div className="avatar-inner">
                  {contributor.icon}
                </div>
              </div>
              
              <div className="contributor-content">
                <h3 className="contributor-name">{contributor.name}</h3>
                <div className="contributor-role">{contributor.role}</div>
                <p className="contributor-description">{contributor.description}</p>
                <div className="contributor-location">{contributor.location}</div>
              </div>
              
              <div className="contributor-decoration"></div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .contributors-section {
          padding: 80px 0;
          background: linear-gradient(135deg, 
            rgba(20, 22, 46, 0.8) 0%, 
            rgba(30, 32, 60, 0.8) 100%
          );
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }
        
        .section-badge {
          font-size: 3rem;
          margin-bottom: 20px;
          display: inline-block;
          animation: float 4s ease-in-out infinite;
        }
        
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 10px;
          background: linear-gradient(135deg, var(--gold-primary), var(--purple-primary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .section-subtitle {
          color: var(--text-secondary);
          font-size: 1.1rem;
        }
        
        .contributors-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        
        .contributor-card {
          background: var(--bg-card);
          border-radius: var(--border-radius-lg);
          padding: 40px 30px;
          text-align: center;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 1px solid var(--border-light);
        }
        
        .contributor-card:hover {
          transform: translateY(-10px);
          border-color: var(--gold-primary);
        }
        
        .contributor-card.champion:hover {
          border-color: var(--gold-primary);
        }
        
        .contributor-card.team:hover {
          border-color: var(--teal-primary);
        }
        
        .contributor-card.academic:hover {
          border-color: var(--blue-primary);
        }
        
        .contributor-avatar {
          width: 120px;
          height: 120px;
          margin: 0 auto 25px;
          position: relative;
        }
        
        .avatar-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 48px;
          position: relative;
          z-index: 2;
        }
        
        .contributor-champion .avatar-inner {
          background: linear-gradient(135deg, var(--gold-primary), var(--gold-secondary));
          color: #000;
        }
        
        .contributor-team .avatar-inner {
          background: linear-gradient(135deg, var(--teal-primary), var(--teal-secondary));
          color: white;
        }
        
        .contributor-academic .avatar-inner {
          background: linear-gradient(135deg, var(--blue-primary), var(--blue-secondary));
          color: white;
        }
        
        .contributor-avatar::before {
          content: '';
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          border-radius: 50%;
          background: inherit;
          filter: blur(20px);
          opacity: 0.3;
          z-index: 1;
        }
        
        .contributor-content {
          margin-bottom: 20px;
        }
        
        .contributor-name {
          font-size: 1.5rem;
          margin-bottom: 8px;
          color: var(--text-primary);
        }
        
        .contributor-role {
          color: var(--gold-primary);
          font-weight: 600;
          margin-bottom: 10px;
          font-size: 1.1rem;
        }
        
        .contributor-description {
          color: var(--text-secondary);
          margin-bottom: 10px;
          line-height: 1.5;
        }
        
        .contributor-location {
          color: var(--text-muted);
          font-size: 0.9rem;
        }
        
        .contributor-decoration {
          position: absolute;
          top: 0;
          right: 0;
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, transparent 50%, rgba(255,255,255,0.05) 50%);
          border-top-right-radius: var(--border-radius-lg);
        }
        
        @media (max-width: 1024px) {
          .contributors-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .contributors-grid {
            grid-template-columns: 1fr;
          }
          
          .contributors-section {
            padding: 60px 0;
          }
          
          .section-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Contributors;