import React from 'react';

const QuickStartGuide = () => {
  return (
    <section className="quickstart-section section fade-in">
      <div className="content-wrapper">
        <h2 className="section-title">🎯 Get Started in Minutes</h2>
        <p className="section-subtitle">
          Choose your learning path. Perfect for beginners in Machine Learning and Activity Recognition.
        </p>
        
        <div className="paths-container">
          {/* Path A: Learn from Elite */}
          <div className="path-card path-a">
            <div className="path-header">
              <div className="path-icon">🥇</div>
              <h3 className="path-title">Path A: Learn from Elite</h3>
              <div className="path-badge">Recommended</div>
            </div>
            
            <div className="path-steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Download Swimming Dataset</h4>
                  <p>Get Ellen's professional 4-stroke data</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Open Swimming Tool</h4>
                  <p>Load the elite dataset for analysis</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Analyze Stroke Patterns</h4>
                  <p>See ML classify different swimming techniques</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Understand ML Classification</h4>
                  <p>Learn how ML recognizes activity patterns</p>
                </div>
              </div>
            </div>
            
            <div className="path-actions">
              <a 
                href="https://drive.google.com/dataset-link"
                target="_blank"
                rel="noopener noreferrer"
                className="premium-btn btn-gold"
              >
                📥 Download Dataset
              </a>
              <button className="premium-btn btn-outline">
                🚀 Start This Path
              </button>
            </div>
          </div>
          
          {/* Path B: Experiment Yourself */}
          <div className="path-card path-b">
            <div className="path-header">
              <div className="path-icon">🔬</div>
              <h3 className="path-title">Path B: Experiment Yourself</h3>
            </div>
            
            <div className="path-steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Record Your Walking Data</h4>
                  <p>Use your phone's accelerometer</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Open Walk/Run Tool</h4>
                  <p>Upload your personal activity data</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Classify Activities</h4>
                  <p>ML detects walking vs running patterns</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Learn Feature Engineering</h4>
                  <p>Understand how features affect ML accuracy</p>
                </div>
              </div>
            </div>
            
            <div className="path-actions">
              <a 
                href="https://walktorunovia.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="premium-btn btn-blue"
              >
                🚶‍♂️ Open Walk/Run Tool
              </a>
              <button className="premium-btn btn-outline">
                📱 Recording Guide
              </button>
            </div>
          </div>
        </div>
        
        <div className="quickstart-note">
          <p>💡 <strong>Tip:</strong> Start with Path A to understand ML basics, then try Path B with your own data.</p>
        </div>

        <style jsx>{`
          .quickstart-section {
            background: linear-gradient(135deg, 
              rgba(15, 23, 42, 0.8) 0%, 
              rgba(30, 32, 60, 0.8) 100%
            );
            border-radius: var(--border-radius-lg);
            margin: var(--spacing-xxl) auto;
            padding: var(--spacing-xl);
          }
          
          .paths-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin-top: var(--spacing-xl);
          }
          
          .path-card {
            background: var(--bg-card);
            border-radius: var(--border-radius-lg);
            padding: 30px;
            display: flex;
            flex-direction: column;
            transition: transform 0.3s ease;
          }
          
          .path-card:hover {
            transform: translateY(-5px);
          }
          
          .path-a {
            border-top: 4px solid var(--gold-primary);
          }
          
          .path-b {
            border-top: 4px solid var(--blue-primary);
          }
          
          .path-header {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 25px;
          }
          
          .path-icon {
            font-size: 40px;
          }
          
          .path-title {
            font-size: 1.5rem;
            color: var(--text-primary);
            flex: 1;
          }
          
          .path-badge {
            background: var(--gold-gradient);
            color: #000;
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 700;
          }
          
          .path-steps {
            flex: 1;
            margin-bottom: 25px;
          }
          
          .step {
            display: flex;
            gap: 15px;
            margin-bottom: 20px;
            align-items: flex-start;
          }
          
          .step-number {
            width: 36px;
            height: 36px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            flex-shrink: 0;
          }
          
          .path-a .step-number {
            background: var(--gold-gradient);
            color: #000;
          }
          
          .path-b .step-number {
            background: linear-gradient(135deg, var(--blue-primary), var(--blue-secondary));
            color: white;
          }
          
          .step-content h4 {
            font-size: 1rem;
            color: var(--text-primary);
            margin-bottom: 4px;
          }
          
          .step-content p {
            font-size: 0.9rem;
            color: var(--text-secondary);
            line-height: 1.4;
          }
          
          .path-actions {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
          }
          
          .quickstart-note {
            margin-top: 30px;
            padding: 20px;
            background: rgba(255, 215, 0, 0.1);
            border-radius: var(--border-radius-md);
            border-left: 4px solid var(--gold-primary);
          }
          
          .quickstart-note p {
            color: var(--text-primary);
            font-size: 1rem;
            line-height: 1.6;
          }
          
          @media (max-width: 1024px) {
            .paths-container {
              gap: 20px;
            }
          }
          
          @media (max-width: 768px) {
            .paths-container {
              grid-template-columns: 1fr;
            }
            
            .quickstart-section {
              padding: var(--spacing-lg);
            }
            
            .path-card {
              padding: 25px 20px;
            }
            
            .path-actions {
              flex-direction: column;
            }
          }
          
          @media (max-width: 480px) {
            .path-header {
              flex-direction: column;
              text-align: center;
              gap: 10px;
            }
            
            .path-badge {
              align-self: center;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default QuickStartGuide;