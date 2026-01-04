import React, { useState } from 'react';
import './ChampionCard.css';

const ChampionCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`champion-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated gold corner */}
      <div className="champion-corner">
        <div className="corner-glow"></div>
        <div className="corner-medal">🥇</div>
      </div>
      
      {/* Floating particles */}
      <div className="particle gold-particle-1"></div>
      <div className="particle gold-particle-2"></div>
      <div className="particle gold-particle-3"></div>
      
      <div className="champion-header">
        <div className="champion-avatar">
          <div className="avatar-image">
            <div className="avatar-glow"></div>
            <span className="avatar-emoji">🏊‍♀️</span>
          </div>
          <div className="avatar-ring"></div>
        </div>
        
        <div className="champion-info">
          <div className="champion-badge">ELITE ATHLETE</div>
          <h2 className="champion-name">Ellen Williamsson</h2>
          <p className="champion-title">Gold Medalist Swimmer</p>
          <p className="champion-location">Vaasa, Finland</p>
        </div>
      </div>
      
      <div className="champion-content">
        <h3 className="card-title">Champion Swimming Analysis</h3>
        <p className="card-description">
          Professional dataset from gold medalist swimmer. 
          Expert motion patterns recorded with Apple Watch Pro at 100Hz.
        </p>
        
        <div className="champion-stats">
          <div className="stat-item">
            <div className="stat-icon">⚡</div>
            <div className="stat-content">
              <div className="stat-value">100Hz</div>
              <div className="stat-label">Sampling Rate</div>
            </div>
          </div>
          
          <div className="stat-item">
            <div className="stat-icon">📊</div>
            <div className="stat-content">
              <div className="stat-value">15+</div>
              <div className="stat-label">Metrics</div>
            </div>
          </div>
          
          <div className="stat-item">
            <div className="stat-icon">⏱️</div>
            <div className="stat-content">
              <div className="stat-value">50h</div>
              <div className="stat-label">Total Data</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="card-actions">
        <button className="btn btn-gold">
          <span className="btn-icon">📥</span>
          Download Dataset
          <span className="btn-glow"></span>
        </button>
        
        <button className="btn btn-outline">
          <span className="btn-icon">👁️</span>
          Preview Samples
        </button>
      </div>
    </div>
  );
};

export default ChampionCard;