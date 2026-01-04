import React, { useState } from 'react';
import './BuilderCard.css';

const BuilderCard = ({ type, title, description, icon, features, link }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const getTypeColor = () => {
    switch(type) {
      case 'pipeline': return '#8b5cf6';
      case 'feature': return '#3b82f6';
      case 'model': return '#10b981';
      default: return '#8b5cf6';
    }
  };
  
  return (
    <div 
      className={`builder-card builder-${type}`}
      style={{ '--type-color': getTypeColor() }}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="builder-header">
        <div className="builder-icon" style={{ color: getTypeColor() }}>
          {icon}
        </div>
        <div className="builder-title-wrapper">
          <h3 className="builder-title">{title}</h3>
          <div className="builder-subtitle">Creative Builder</div>
        </div>
      </div>
      
      <p className="builder-description">{description}</p>
      
      <div className={`builder-features ${isExpanded ? 'expanded' : ''}`}>
        <ul>
          {features.map((feature, index) => (
            <li key={index} style={{ animationDelay: `${index * 0.1}s` }}>
              <span className="feature-icon">→</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="builder-actions">
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-primary builder-btn"
        >
          <span className="btn-text">
            <span className="btn-icon">🚀</span>
            Launch Tool
          </span>
          <span className="btn-arrow">↗</span>
        </a>
        
        <div className="builder-tags">
          <span className="tag">ML</span>
          <span className="tag">HAR</span>
          <span className="tag">Research</span>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="builder-bg-shape shape-1"></div>
      <div className="builder-bg-shape shape-2"></div>
      <div className="builder-bg-shape shape-3"></div>
    </div>
  );
};

export default BuilderCard;