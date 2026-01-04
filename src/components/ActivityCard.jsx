import React, { useState } from 'react';

const ActivityCard = ({ activity }) => {
  const [hovered, setHovered] = useState(false);
  const [badgeHovered, setBadgeHovered] = useState(false);

  const getThemeColors = () => {
    switch(activity.theme) {
      case 'gold':
        return {
          primary: 'var(--gold-primary)',
          secondary: 'var(--gold-secondary)',
          gradient: 'var(--gold-gradient)',
          bg: 'rgba(255, 215, 0, 0.1)',
          badgeBg: 'linear-gradient(135deg, #FFD700, #D4AF37)',
          badgeText: '#000000'
        };
      case 'blue':
        return {
          primary: 'var(--blue-primary)',
          secondary: 'var(--blue-secondary)',
          gradient: 'linear-gradient(135deg, var(--blue-primary), var(--blue-secondary))',
          bg: 'rgba(59, 130, 246, 0.1)',
          badgeBg: 'linear-gradient(135deg, #3B82F6, #60A5FA)',
          badgeText: '#FFFFFF'
        };
      case 'purple':
        return {
          primary: 'var(--purple-primary)',
          secondary: 'var(--purple-secondary)',
          gradient: 'linear-gradient(135deg, var(--purple-primary), var(--purple-secondary))',
          bg: 'rgba(139, 92, 246, 0.1)',
          badgeBg: 'linear-gradient(135deg, #8B5CF6, #A78BFA)',
          badgeText: '#FFFFFF'
        };
      case 'teal':
        return {
          primary: 'var(--teal-primary)',
          secondary: 'var(--teal-secondary)',
          gradient: 'linear-gradient(135deg, var(--teal-primary), var(--teal-secondary))',
          bg: 'rgba(16, 185, 129, 0.1)',
          badgeBg: 'linear-gradient(135deg, #10B981, #34D399)',
          badgeText: '#FFFFFF'
        };
      default:
        return {
          primary: 'var(--gold-primary)',
          secondary: 'var(--gold-secondary)',
          gradient: 'var(--gold-gradient)',
          bg: 'rgba(255, 215, 0, 0.1)',
          badgeBg: 'var(--gold-gradient)',
          badgeText: '#000000'
        };
    }
  };

  const theme = getThemeColors();

  const getBadgeContent = () => {
    switch(activity.id) {
      case 1: // Swimming
        return {
          photoText: 'EW',
          title: 'Ellen Williamsson',
          subtitle: 'Gold Medal Elite',
          location: 'Vaasa, Finland',
          icon: '🥇',
          type: 'swimmer'
        };
      case 2: // Team
        return {
          photoText: 'JSR',
          title: 'Team',
          subtitle: '3 Students',
          location: 'Novia UAS',
          icon: '👥',
          type: 'team'
        };
      case 3: // Custom Builder
        return {
          photoText: '⚡',
          title: 'Create',
          subtitle: 'Custom Activities',
          location: 'Build & Learn',
          icon: '🛠️',
          type: 'builder'
        };
      case 4: // Predictor
        return {
          photoText: '🤖',
          title: 'ML Predictor',
          subtitle: 'Advanced Analytics',
          location: 'Test Models',
          icon: '📊',
          type: 'predictor'
        };
      default:
        return {
          photoText: '?',
          title: 'Data Source',
          subtitle: 'Professional',
          location: 'Dataset',
          icon: '📁',
          type: 'default'
        };
    }
  };

  const badgeContent = getBadgeContent();

  const getOptionIcon = (type) => {
    switch(type) {
      case 'download': return '📥';
      case 'upload': return '⬆️';
      case 'create': return '⚡';
      case 'learn': return '📚';
      case 'analyze': return '📊';
      default: return '📥';
    }
  };

  return (
    <div 
      className={`activity-card glass-effect ${hovered ? 'hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ 
        borderTop: `4px solid ${theme.primary}`,
        '--theme-primary': theme.primary,
        '--theme-secondary': theme.secondary,
        '--theme-gradient': theme.gradient,
        '--theme-bg': theme.bg
      }}
    >
      {/* OVERLAPPING BADGE - E-COMMERCE STYLE */}
      <div 
        className={`badge-container ${badgeHovered ? 'badge-hovered' : ''}`}
        onMouseEnter={() => setBadgeHovered(true)}
        onMouseLeave={() => setBadgeHovered(false)}
        style={{
          '--badge-bg': theme.badgeBg,
          '--badge-text': theme.badgeText
        }}
      >
        <div className="badge-photo">
          <div className="badge-photo-inner">
            <span className="badge-photo-text">{badgeContent.photoText}</span>
            <div className="badge-photo-icon">{badgeContent.icon}</div>
          </div>
          <div className="badge-photo-ring"></div>
        </div>
        
        <div className="badge-content">
          <h4 className="badge-title">{badgeContent.title}</h4>
          <p className="badge-subtitle">{badgeContent.subtitle}</p>
          <p className="badge-location">{badgeContent.location}</p>
        </div>
        
        <div className="badge-glow"></div>
      </div>

      {/* Card Header */}
      <div className="card-header">
        <div className="card-icon" style={{ color: theme.primary }}>
          {activity.icon}
        </div>
        <div className="card-title-wrapper">
          <h3 className="card-title">{activity.title}</h3>
          {activity.subtitle && (
            <p className="card-subtitle">{activity.subtitle}</p>
          )}
        </div>
      </div>

      {/* Dataset Info */}
      <div className="dataset-info">
        <div className="dataset-source">
          <span className="source-icon">📊</span>
          <div className="source-content">
            <div className="source-label">Dataset</div>
            <div className="source-value">{activity.datasetDescription}</div>
          </div>
        </div>
        
        <div className="dataset-ml">
          <span className="ml-icon">🎯</span>
          <div className="ml-content">
            <div className="ml-label">ML Concept</div>
            <div className="ml-value">{activity.learningObjective}</div>
          </div>
        </div>
      </div>

      {/* Options Grid */}
      <div className="options-grid">
        {activity.options.map((option, index) => (
          <div 
            key={index} 
            className="option-card"
            style={{ 
              background: theme.bg,
              borderLeft: `4px solid ${theme.primary}`
            }}
          >
            <div className="option-icon">
              {getOptionIcon(option.type)}
            </div>
            <div className="option-content">
              <h4 className="option-title">{option.label}</h4>
              <p className="option-desc">{option.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Features List */}
      

      {/* Action Buttons */}
      <div className="card-actions">
        <a 
          href={activity.toolLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`premium-btn ${activity.theme === 'gold' ? 'btn-gold' : 'btn-blue'}`}
          style={{ background: theme.gradient }}
        >
          <span className="btn-icon">{activity.icon}</span>
          Open Tool
        </a>
        
        {activity.hasDataset && activity.datasetLink && (
          <a 
            href={activity.datasetLink}
            target="_blank"
            rel="noopener noreferrer"
            className="premium-btn btn-outline"
          >
            <span className="btn-icon">📥</span>
            Download Dataset
          </a>
        )}
      </div>

      {/* Card Glow Effect */}
      <div className="card-glow" style={{ background: theme.gradient }}></div>

      <style jsx>{`
        .activity-card {
          padding: 30px;
          position: relative;
          overflow: hidden;
          height: 100%;
          min-height: 520px;
          display: flex;
          flex-direction: column;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border-radius: var(--border-radius-lg);
          clip-path: polygon(
            0 0, 
            100% 0, 
            100% 100%, 
            0 100%, 
            0 0,
            20px 0,
            20px 20px,
            0 20px
          );
        }
        
        .activity-card.hovered {
          transform: translateY(-10px);
          box-shadow: var(--shadow-lg);
        }
        
        /* OVERLAPPING BADGE STYLES */
        .badge-container {
          position: absolute;
          top: -25px;
          left: -25px;
          width: 120px;
          height: 120px;
          background: var(--badge-bg);
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: var(--badge-text);
          z-index: 10;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          overflow: hidden;
          padding-top: 15px;
        }
        
        .badge-container.badge-hovered {
          transform: scale(1.05) rotate(5deg);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
        }
        
        .badge-photo {
          position: relative;
          width: 60px;
          height: 60px;
          margin-bottom: 8px;
        }
        
        .badge-photo-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
          font-weight: 900;
          font-size: 20px;
          color: #000;
        }
        
        .badge-photo-ring {
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.6);
          z-index: 1;
          animation: borderGlow 3s ease-in-out infinite;
        }
        
        .badge-photo-icon {
          position: absolute;
          bottom: -5px;
          right: -5px;
          background: var(--badge-bg);
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          z-index: 3;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }
        
        .badge-content {
          text-align: center;
          padding: 0 10px;
        }
        
        .badge-title {
          font-size: 0.85rem;
          font-weight: 900;
          margin-bottom: 2px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .badge-subtitle {
          font-size: 0.7rem;
          opacity: 0.9;
          margin-bottom: 2px;
          font-weight: 600;
        }
        
        .badge-location {
          font-size: 0.65rem;
          opacity: 0.7;
          font-weight: 500;
        }
        
        .badge-glow {
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          border-radius: 50%;
          background: var(--badge-bg);
          opacity: 0.3;
          filter: blur(15px);
          z-index: -1;
        }
        
        /* Card Header */
        .card-header {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          margin-bottom: 20px;
          margin-top: 10px;
        }
        
        .card-icon {
          font-size: 36px;
          flex-shrink: 0;
        }
        
        .card-title-wrapper {
          flex: 1;
        }
        
        .card-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 4px;
          line-height: 1.2;
        }
        
        .card-subtitle {
          color: var(--theme-primary, var(--gold-primary));
          font-size: 0.9rem;
          font-weight: 500;
          opacity: 0.9;
        }
        
        /* Dataset Info */
        .dataset-info {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          margin: 15px 0;
          padding: 15px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: var(--border-radius-md);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .dataset-source,
        .dataset-ml {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        
        .source-icon,
        .ml-icon {
          font-size: 18px;
          flex-shrink: 0;
          margin-top: 2px;
        }
        
        .source-content,
        .ml-content {
          flex: 1;
        }
        
        .source-label,
        .ml-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-bottom: 2px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .source-value,
        .ml-value {
          font-size: 0.85rem;
          color: var(--text-primary);
          font-weight: 500;
          line-height: 1.3;
        }
        
        /* Options Grid */
        .options-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin: 15px 0;
        }
        
        .option-card {
          padding: 12px;
          border-radius: var(--border-radius-sm);
          display: flex;
          align-items: flex-start;
          gap: 10px;
          transition: all 0.3s ease;
        }
        
        .option-card:hover {
          transform: translateY(-3px);
          background: rgba(255, 255, 255, 0.1) !important;
        }
        
        .option-icon {
          font-size: 20px;
          flex-shrink: 0;
          margin-top: 2px;
        }
        
        .option-content {
          flex: 1;
        }
        
        .option-title {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 3px;
        }
        
        .option-desc {
          font-size: 0.75rem;
          color: var(--text-secondary);
          line-height: 1.3;
        }
        
        /* Features List */
        .features-list {
          margin: 15px 0;
          flex: 1;
        }
        
        .features-list ul {
          list-style: none;
          padding: 0;
        }
        
        .features-list li {
          color: var(--text-secondary);
          padding: 6px 0;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .feature-bullet {
          font-size: 1.2rem;
          flex-shrink: 0;
        }
        
        /* Action Buttons */
        .card-actions {
          margin-top: auto;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        
        .card-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .activity-card.hovered .card-glow {
          opacity: 0.5;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
          .activity-card {
            min-height: 550px;
            padding: 25px 20px 20px;
            clip-path: polygon(
              0 0, 
              100% 0, 
              100% 100%, 
              0 100%, 
              0 0,
              15px 0,
              15px 15px,
              0 15px
            );
          }
          
          .badge-container {
            width: 100px;
            height: 100px;
            top: -20px;
            left: -20px;
          }
          
          .badge-photo {
            width: 50px;
            height: 50px;
          }
          
          .badge-photo-inner {
            font-size: 18px;
          }
          
          .badge-title {
            font-size: 0.75rem;
          }
          
          .badge-subtitle {
            font-size: 0.65rem;
          }
          
          .badge-location {
            font-size: 0.6rem;
          }
          
          .card-title {
            font-size: 1.2rem;
          }
          
          .dataset-info {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          
          .options-grid {
            grid-template-columns: 1fr;
          }
          
          .card-actions {
            flex-direction: column;
          }
        }
        
        @media (max-width: 480px) {
          .activity-card {
            padding: 25px 15px 15px;
          }
          
          .badge-container {
            width: 90px;
            height: 90px;
            top: -15px;
            left: -15px;
          }
          
          .badge-photo {
            width: 45px;
            height: 45px;
          }
          
          .badge-photo-inner {
            font-size: 16px;
          }
          
          .card-header {
            flex-direction: column;
            text-align: center;
            gap: 10px;
            margin-top: 5px;
          }
          
          .card-icon {
            margin: 0 auto;
          }
        }
        
        @media (max-width: 360px) {
          .badge-container {
            width: 80px;
            height: 80px;
          }
          
          .badge-photo {
            width: 40px;
            height: 40px;
          }
          
          .badge-title {
            font-size: 0.7rem;
          }
          
          .badge-subtitle,
          .badge-location {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default ActivityCard;