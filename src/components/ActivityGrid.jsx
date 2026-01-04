import React, { useState } from 'react';
// Import your images from assets
import ellenImage from '../assets/images/ellen.jpeg';
import teamImage from '../assets/images/grp.png';     // Adjust path based on your structure
// import teamImage from '../assets/team.jpg';
// import customImage from '../assets/custom.jpg';
// import predictorImage from '../assets/predictor.jpg';

const ActivityGrid = () => {
  const activities = [
    {
      id: 1,
      title: "Swimming Stroke Classification",
      subtitle: "(4 Medley Categories)",
      icon: "🏊‍♀️",
      theme: "gold",
      mlConcept: "Multi-class Classification",
      datasetDescription: "Ellen Williamsson Dataset",
      options: [
        { type: "download", label: "Download Dataset", description: "Professional 4-stroke swimming data", icon: "📥" },
        { type: "upload", label: "Upload Your Own", description: "Record and classify swimming activities", icon: "⬆️" }
      ],
      toolLink: "https://swimmingactivitynovia.streamlit.app/",
      datasetLink: "https://drive.google.com/uc?export=download&id=1dKcxA0OxgR5ljTjhhHUSfKKeVRyJXOH6",
      hasDataset: true,
      badge: { 
        type: "image", 
        image: ellenImage, // Use imported image
        initials: "EW", 
        emoji: "🥇", 
        name: "Ellen Williamsson", 
        tag: "Gold Medalist Elite Swimmer", 
        location: "Vaasa, Finland" 
      }
    },
    {
      id: 2,
      title: "Walk Toe Rise Run Analysis",
      subtitle: "(Three-Activity Detection)",
      icon: "🚶‍♂️",
      theme: "blue",
      mlConcept: "Sequence Recognition",
      datasetDescription: "Team Dataset",
      options: [
        { type: "download", label: "Download Dataset", description: "Walking, toe rise, running patterns", icon: "📥" },
        { type: "upload", label: "Upload Your Own", description: "Classify daily movement activities", icon: "⬆️" }
      ],
      toolLink: "https://walktorunovia.streamlit.app/",
      datasetLink: "https://drive.google.com/uc?export=download&id=1sB60rfywdoW4SlN4I0wn_gJAwc7ujT96",
      hasDataset: true,
      badge: { 
        type: "image", 
        image: teamImage, // Use imported image
        initials: "JSR", 
        emoji: "👥", 
        name: "Team", 
        tag: "3 Students", 
        location: "Novia UAS" 
      }
    },
    {
      id: 3,
      title: "Custom Activity Builder",
      subtitle: "(Create & Experiment)",
      icon: "🛠️",
      theme: "purple",
      mlConcept: "End-to-end ML Pipeline",
      datasetDescription: "Build from templates or scratch",
      options: [
        { type: "create", label: "Create New Activity", description: "Define custom categories and ML pipeline", icon: "⚡" },
        { type: "learn", label: "Learn ML Workflow", description: "Step-by-step tutorials and guidance", icon: "📚" }
      ],
      toolLink: "https://customactivitynovia.streamlit.app/",
      hasDataset: false,
      badge: { 
        type: "emoji", // Using emoji for this one
        image: "", // Optional: you can still have image as fallback
        initials: "⚡", 
        emoji: "🛠️", 
        name: "Custom Builder", 
        tag: "Your Creativity", 
        location: "Build Anything" 
      }
    },
    {
      id: 4,
      title: "ML Model Predictor",
      subtitle: "(Test & Analyze)",
      icon: "🤖",
      theme: "teal",
      mlConcept: "Model Evaluation",
      datasetDescription: "Test trained models on new data",
      options: [
        { type: "upload", label: "Upload Trained Model", description: "Test on new activity data", icon: "⬆️" },
        { type: "analyze", label: "Advanced Analytics", description: "Model performance visualization", icon: "📊" }
      ],
      toolLink: "https://predictionovia.streamlit.app/",
      hasDataset: false,
      badge: { 
        type: "emoji", // Using emoji for this one
        image: "", // Optional: you can still have image as fallback
        initials: "🤖", 
        emoji: "📊", 
        name: "Predictor Tool", 
        tag: "Advanced Analytics", 
        location: "Test & Evaluate" 
      }
    }
  ];

  return (
    <section className="activity-grid-section">
      <div className="content-wrapper">
        <h2 className="section-title">Choose Your Tool</h2>
        <p className="section-subtitle">
          Practical activity recognition projects for the Machine Learning Methods.
        </p>

        <div className="grid-container">
          {activities.map((activity) => (
            <div key={activity.id} className="grid-item">
              <ActivityCard activity={activity} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .activity-grid-section {
          padding: 100px 0;
          background: #0a0e1a;
        }
        .content-wrapper {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .section-title {
          font-size: 2.8rem;
          text-align: center;
          color: white;
          font-weight: 800;
          margin-bottom: 20px;
        }
        .section-subtitle {
          text-align: center;
          font-size: 1.3rem;
          color: rgba(255, 255, 255, 0.7);
          max-width: 900px;
          margin: 0 auto 80px;
        }
        .grid-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 50px;
        }
        @media (max-width: 1024px) {
          .grid-container {
            gap: 40px;
          }
        }
        @media (max-width: 768px) {
          .grid-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

const ActivityCard = ({ activity }) => {
  const [hovered, setHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  const themeColors = {
    gold: {
      primary: '#FFD700',
      lightBg: 'rgba(255, 215, 0, 0.2)',
      pillLeftIcon: '📊',
      pillRightIcon: '🎯',
      optionIconColor: '#FFD700'
    },
    blue: {
      primary: '#3B82F6',
      lightBg: 'rgba(59, 130, 246, 0.2)',
      pillLeftIcon: '📊',
      pillRightIcon: '🎯',
      optionIconColor: '#3B82F6'
    },
    purple: {
      primary: '#8B5CF6',
      lightBg: 'rgba(139, 92, 246, 0.2)',
      pillLeftIcon: '🛠️',
      pillRightIcon: '🔄',
      optionIconColor: '#8B5CF6'
    },
    teal: {
      primary: '#10B981',
      lightBg: 'rgba(16, 185, 129, 0.2)',
      pillLeftIcon: '🤖',
      pillRightIcon: '📈',
      optionIconColor: '#10B981'
    }
  };

  const theme = themeColors[activity.theme] || themeColors.gold;

  // Function to render badge content
  const renderBadgeContent = () => {
    const badge = activity.badge;
    
    if (badge.type === "image" && badge.image && !imageError) {
      return (
        <img 
          src={badge.image} 
          alt={badge.name}
          className="badge-image"
          onError={() => setImageError(true)}
        />
      );
    } else if (badge.type === "emoji") {
      return <div className="badge-emoji">{badge.emoji}</div>;
    } else {
      // Default to initials (or fallback from image error)
      return <div className="badge-initials">{badge.initials}</div>;
    }
  };

  return (
    <div
      className={`activity-card ${hovered ? 'hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Card Header with Badge and Info */}
      <div className="card-header">
        {/* Left-aligned badge */}
        <div className="badge-container">
          <div className="badge-circle">
            {renderBadgeContent()}
          </div>
        </div>
        
        {/* Right-aligned info */}
        <div className="source-info">
          <h3 className="source-name">{activity.badge.name}</h3>
          <p className="source-tag">{activity.badge.tag}</p>
          <p className="source-location">{activity.badge.location}</p>
        </div>
      </div>

      {/* Main Content - Centered */}
      <div className="main-content">
        <div className="main-header">
          <span className="main-icon">{activity.icon}</span>
          <div className="title-wrapper">
            <h2 className="title">{activity.title}</h2>
            <p className="subtitle" style={{ color: theme.primary }}>{activity.subtitle}</p>
          </div>
        </div>

        {/* Pills */}
        <div className="pills">
          <div className="pill">
            <span className="pill-icon-left">{theme.pillLeftIcon}</span>
            {activity.datasetDescription}
          </div>
          <div className="pill">
            {activity.mlConcept}
            <span className="pill-icon-right">{theme.pillRightIcon}</span>
          </div>
        </div>

        {/* Options */}
        <div className="options">
          {activity.options.map((opt, i) => (
            <div key={i} className="option" style={{ borderLeftColor: theme.primary }}>
              <span className="option-icon" style={{ color: theme.primary }}>{opt.icon}</span>
              <div>
                <h4 className="option-title">{opt.label}</h4>
                <p className="option-desc">{opt.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="actions">
          <a href={activity.toolLink} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background: 'white', color: '#000' }}>
            {activity.icon} Open Tool
          </a>
          {activity.hasDataset && activity.datasetLink && (
            <a href={activity.datasetLink} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ borderColor: theme.primary, color: theme.primary }}>
              📥 Download Dataset
            </a>
          )}
        </div>
      </div>

      <style jsx>{`
        .activity-card {
          position: relative;
          background: rgba(15, 20, 35, 0.8);
          backdrop-filter: blur(12px);
          border-radius: 32px;
          padding: 30px 40px 40px;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6);
          transition: all 0.4s ease;
          display: flex;
          flex-direction: column;
          min-height: 680px;
        }
        .activity-card.hovered {
          transform: translateY(-12px);
          box-shadow: 0 28px 70px rgba(0, 0, 0, 0.8);
        }

        /* Card Header Layout */
        .card-header {
          display: flex;
          align-items: flex-start;
          gap: 24px;
          margin-bottom: 30px;
          padding-bottom: 25px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .badge-container {
          flex-shrink: 0;
        }

        .badge-circle {
          width: 100px;
          height: 100px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
          overflow: hidden;
        }

        /* Image styling */
        .badge-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .badge-initials {
          font-size: 42px;
          font-weight: 900;
          color: #000;
          text-transform: uppercase;
        }

        .badge-emoji {
          font-size: 48px;
        }

        .source-info {
          flex: 1;
        }

        .source-name {
          font-size: 1.8rem;
          font-weight: 800;
          color: white;
          margin: 0 0 8px 0;
        }

        .source-tag {
          font-size: 1.1rem;
          color: white;
          opacity: 0.9;
          margin: 0 0 6px 0;
          font-weight: 600;
        }

        .source-location {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .source-location::before {
          content: "📍";
          font-size: 0.9rem;
        }

        /* Main Content */
        .main-content {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .main-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 25px;
          margin-bottom: 30px;
          text-align: center;
        }

        .main-icon {
          font-size: 64px;
          flex-shrink: 0;
        }

        .title-wrapper {
          text-align: left;
        }

        .title {
          font-size: 2rem;
          font-weight: 800;
          color: white;
          margin: 0;
          line-height: 1.2;
        }

        .subtitle {
          font-size: 1.25rem;
          font-weight: 600;
          margin: 8px 0 0;
        }

        .pills {
          display: flex;
          gap: 15px;
          margin-bottom: 30px;
          justify-content: center;
        }

        .pill {
          flex: 0 1 auto;
          min-width: 200px;
          background: rgba(255, 255, 255, 0.08);
          padding: 14px 24px;
          border-radius: 50px;
          color: white;
          font-size: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-weight: 500;
        }

        .pill-icon-left,
        .pill-icon-right {
          font-size: 1.3rem;
        }

        .options {
          display: flex;
          gap: 20px;
          margin-bottom: 35px;
        }

        .option {
          flex: 1;
          background: rgba(255, 255, 255, 0.08);
          padding: 20px;
          border-radius: 20px;
          border-left: 5px solid;
          display: flex;
          gap: 16px;
          align-items: flex-start;
          transition: transform 0.3s ease;
        }

        .option:hover {
          transform: translateY(-4px);
        }

        .option-icon {
          font-size: 32px;
          margin-top: 4px;
        }

        .option-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: white;
          margin: 0 0 8px;
        }

        .option-desc {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.85);
          margin: 0;
          line-height: 1.4;
        }

        .actions {
          display: flex;
          gap: 20px;
          margin-top: auto;
        }

        .btn-primary {
          flex: 1;
          color: #000;
          background: white;
          padding: 16px;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 700;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(255, 255, 255, 0.3);
        }

        .btn-secondary {
          flex: 1;
          background: transparent;
          border: 3px solid;
          color: white;
          padding: 16px;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 700;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-4px);
        }

        @media (max-width: 1024px) {
          .activity-card {
            padding: 25px 30px 35px;
            min-height: 650px;
          }
          
          .badge-circle {
            width: 90px;
            height: 90px;
          }
          
          .badge-initials {
            font-size: 36px;
          }
          
          .badge-emoji {
            font-size: 42px;
          }
          
          .title {
            font-size: 1.8rem;
          }
          
          .pill {
            min-width: 180px;
          }
        }

        @media (max-width: 768px) {
          .activity-card {
            padding: 20px 25px 30px;
            min-height: auto;
          }
          
          .card-header {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 20px;
          }
          
          .source-info {
            text-align: center;
          }
          
          .main-header {
            flex-direction: column;
            gap: 15px;
          }
          
          .main-icon {
            font-size: 56px;
          }
          
          .title-wrapper {
            text-align: center;
          }
          
          .title {
            font-size: 1.6rem;
          }
          
          .pills, .options, .actions {
            flex-direction: column;
          }
          
          .pill {
            min-width: unset;
          }
        }

        @media (max-width: 480px) {
          .activity-card {
            padding: 20px 20px 30px;
          }
          
          .badge-circle {
            width: 80px;
            height: 80px;
          }
          
          .badge-initials {
            font-size: 32px;
          }
          
          .badge-emoji {
            font-size: 38px;
          }
          
          .source-name {
            font-size: 1.5rem;
          }
          
          .title {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ActivityGrid;