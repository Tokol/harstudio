import React from 'react';

const AnalyticsCard = () => {
  return (
    <div className="analytics-card glass-effect">
      <div className="analytics-header">
        <div className="analytics-title">
          <h2>📊 Smart Analytics Dashboard</h2>
          <p>Advanced analytics and visualization platform for HAR research</p>
        </div>
        <div className="analytics-icon">🤖</div>
      </div>
      
      <div className="analytics-stats">
        <div className="stat-card">
          <div className="stat-icon">🎯</div>
          <div className="stat-number">98.2%</div>
          <div className="stat-label">Average Accuracy</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">⚡</div>
          <div className="stat-number">24ms</div>
          <div className="stat-label">Prediction Time</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">💾</div>
          <div className="stat-number">1.2GB</div>
          <div className="stat-label">Total Datasets</div>
        </div>
      </div>
      
      <div className="analytics-features">
        <div className="feature">
          <span className="feature-icon">📈</span>
          <span className="feature-text">Real-time visualization</span>
        </div>
        <div className="feature">
          <span className="feature-icon">🔍</span>
          <span className="feature-text">Detailed analytics</span>
        </div>
        <div className="feature">
          <span className="feature-icon">📊</span>
          <span className="feature-text">Export reports</span>
        </div>
      </div>
      
      <button className="btn btn-primary analytics-btn">
        <span className="btn-icon">🚀</span>
        Launch Analytics Dashboard
      </button>
      
      <style jsx>{`
        .analytics-card {
          padding: 40px;
          border-radius: var(--border-radius-lg);
          margin: 40px 0;
          position: relative;
          overflow: hidden;
          border-top: 4px solid var(--blue-primary);
        }
        
        .analytics-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 40px;
        }
        
        .analytics-title h2 {
          font-size: 2rem;
          margin-bottom: 10px;
          background: linear-gradient(135deg, var(--blue-primary), var(--purple-primary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .analytics-title p {
          color: var(--text-secondary);
          font-size: 1.1rem;
          max-width: 600px;
        }
        
        .analytics-icon {
          font-size: 60px;
          opacity: 0.8;
        }
        
        .analytics-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin: 40px 0;
        }
        
        .stat-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: var(--border-radius-md);
          padding: 30px;
          text-align: center;
          border: 1px solid var(--border-light);
          transition: all 0.3s ease;
        }
        
        .stat-card:hover {
          transform: translateY(-5px);
          border-color: var(--blue-primary);
        }
        
        .stat-icon {
          font-size: 2rem;
          margin-bottom: 15px;
        }
        
        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--blue-primary);
          margin-bottom: 5px;
        }
        
        .stat-label {
          color: var(--text-muted);
          font-size: 0.9rem;
        }
        
        .analytics-features {
          display: flex;
          gap: 30px;
          margin: 40px 0;
          flex-wrap: wrap;
        }
        
        .feature {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 15px 25px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: var(--border-radius-md);
          border-left: 4px solid var(--blue-primary);
        }
        
        .feature-icon {
          font-size: 1.2rem;
        }
        
        .feature-text {
          color: var(--text-secondary);
        }
        
        .analytics-btn {
          width: 100%;
          padding: 20px;
          font-size: 1.1rem;
          margin-top: 20px;
        }
        
        @media (max-width: 768px) {
          .analytics-stats {
            grid-template-columns: 1fr;
          }
          
          .analytics-header {
            flex-direction: column;
            gap: 20px;
          }
          
          .analytics-features {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default AnalyticsCard;