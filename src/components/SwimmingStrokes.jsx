import React from 'react';

const SwimmingStrokes = () => {
  const strokes = [
    {
      id: 1,
      name: "Butterfly",
      icon: "🦋",
      description: "Most technical stroke with symmetrical arm movement and dolphin kick",
      characteristics: ["Symmetrical arms", "Dolphin kick", "Most energy-intensive"]
    },
    {
      id: 2,
      name: "Backstroke",
      icon: "🤚",
      description: "Swimming on back with alternating arm movements and flutter kick",
      characteristics: ["Supine position", "Alternating arms", "Continuous flutter kick"]
    },
    {
      id: 3,
      name: "Breaststroke",
      icon: "🐸",
      description: "Frog-like kick with simultaneous arm movements and gliding phase",
      characteristics: ["Frog kick", "Simultaneous arms", "Gliding phase"]
    },
    {
      id: 4,
      name: "Freestyle",
      icon: "🏃‍♂️",
      description: "Fastest stroke with alternating arm rotation and continuous flutter kick",
      characteristics: ["Alternating rotation", "Flutter kick", "Fastest stroke"]
    }
  ];

  return (
    <section className="strokes-section section fade-in">
      <div className="content-wrapper">
        <h2 className="section-title">🏊‍♀️ Professional Stroke Dataset</h2>
        <p className="section-subtitle">
          Expertly labeled by Ellen Williamsson. Gold Medal Elite Swimmer dataset with 4 stroke categories.
        </p>
        
        <div className="strokes-grid">
          {strokes.map((stroke, index) => (
            <div 
              key={stroke.id} 
              className="stroke-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="stroke-icon-wrapper floating-subtle">
                <div className="stroke-icon">{stroke.icon}</div>
              </div>
              
              <h3 className="stroke-name">{stroke.name}</h3>
              
              <p className="stroke-description">{stroke.description}</p>
              
              <div className="stroke-characteristics">
                {stroke.characteristics.map((char, idx) => (
                  <span key={idx} className="characteristic-tag">
                    {char}
                  </span>
                ))}
              </div>
              
              <div className="stroke-pattern">
                <div className="pattern-line"></div>
                <div className="pattern-line" style={{ animationDelay: '0.2s' }}></div>
                <div className="pattern-line" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="dataset-info">
          <div className="info-card">
            <div className="info-icon">📊</div>
            <div className="info-content">
              <h4>Dataset Specifications</h4>
              <div className="specs-grid">
                <div className="spec">
                  <div className="spec-value">100Hz</div>
                  <div className="spec-label">Sampling Rate</div>
                </div>
                <div className="spec">
                  <div className="spec-value">3-axis</div>
                  <div className="spec-label">Accelerometer</div>
                </div>
                <div className="spec">
                  <div className="spec-value">4</div>
                  <div className="spec-label">Stroke Categories</div>
                </div>
                <div className="spec">
                  <div className="spec-value">Professional</div>
                  <div className="spec-label">Athlete Data</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="dataset-actions">
            <a 
              href="https://drive.google.com/dataset-link"
              target="_blank"
              rel="noopener noreferrer"
              className="premium-btn btn-gold"
            >
              📥 Download Full Dataset
            </a>
            <button className="premium-btn btn-outline">
              📊 View Data Sample
            </button>
          </div>
        </div>

        <style jsx>{`
          .strokes-section {
            background: linear-gradient(135deg, 
              rgba(255, 215, 0, 0.05) 0%, 
              transparent 100%
            );
            border-radius: var(--border-radius-lg);
            padding: var(--spacing-xl);
          }
          
          .strokes-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
            margin: var(--spacing-xl) 0;
          }
          
          .stroke-card {
            background: var(--bg-card);
            border-radius: var(--border-radius-md);
            padding: 25px;
            text-align: center;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }
          
          .stroke-card:hover {
            transform: translateY(-5px);
            border-color: var(--gold-primary);
            box-shadow: var(--shadow-gold);
          }
          
          .stroke-icon-wrapper {
            width: 80px;
            height: 80px;
            background: var(--gold-gradient);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
          }
          
          .stroke-icon {
            font-size: 40px;
          }
          
          .stroke-name {
            font-size: 1.3rem;
            color: var(--text-primary);
            margin-bottom: 10px;
            font-weight: 700;
          }
          
          .stroke-description {
            font-size: 0.9rem;
            color: var(--text-secondary);
            line-height: 1.5;
            margin-bottom: 15px;
            min-height: 70px;
          }
          
          .stroke-characteristics {
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-bottom: 20px;
          }
          
          .characteristic-tag {
            background: rgba(255, 255, 255, 0.05);
            padding: 6px 12px;
            border-radius: 15px;
            font-size: 0.8rem;
            color: var(--text-secondary);
          }
          
          .stroke-pattern {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 3px;
            overflow: hidden;
          }
          
          .pattern-line {
            position: absolute;
            height: 100%;
            width: 100%;
            background: linear-gradient(90deg, transparent, var(--gold-primary), transparent);
            animation: shimmer 2s infinite linear;
          }
          
          .dataset-info {
            margin-top: 40px;
            padding: 30px;
            background: rgba(255, 215, 0, 0.1);
            border-radius: var(--border-radius-lg);
            border-left: 4px solid var(--gold-primary);
          }
          
          .info-card {
            display: flex;
            align-items: center;
            gap: 25px;
            margin-bottom: 25px;
          }
          
          .info-icon {
            font-size: 60px;
            flex-shrink: 0;
          }
          
          .info-content {
            flex: 1;
          }
          
          .info-content h4 {
            font-size: 1.3rem;
            color: var(--text-primary);
            margin-bottom: 15px;
          }
          
          .specs-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 15px;
          }
          
          .spec {
            text-align: center;
            padding: 15px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: var(--border-radius-sm);
          }
          
          .spec-value {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--gold-primary);
            margin-bottom: 5px;
          }
          
          .spec-label {
            font-size: 0.8rem;
            color: var(--text-secondary);
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          
          .dataset-actions {
            display: flex;
            gap: 20px;
            justify-content: center;
          }
          
          @media (max-width: 1024px) {
            .strokes-grid {
              grid-template-columns: repeat(2, 1fr);
            }
            
            .specs-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          
          @media (max-width: 768px) {
            .strokes-grid {
              grid-template-columns: 1fr;
            }
            
            .info-card {
              flex-direction: column;
              text-align: center;
            }
            
            .dataset-actions {
              flex-direction: column;
            }
            
            .strokes-section {
              padding: var(--spacing-lg);
            }
          }
          
          @media (max-width: 480px) {
            .stroke-card {
              padding: 20px;
            }
            
            .stroke-icon-wrapper {
              width: 60px;
              height: 60px;
            }
            
            .stroke-icon {
              font-size: 30px;
            }
            
            .specs-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default SwimmingStrokes;