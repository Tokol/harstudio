import React from 'react';

const PremiumFooter = () => {
  return (
    <footer className="premium-footer section fade-in">
      <div className="content-wrapper">
        <div className="footer-content">
          {/* ML Concepts Section */}
          <div className="ml-concepts">
            <h3 className="concepts-title">🤖 Machine Learning in Practice</h3>
            <p className="concepts-subtitle">
              This platform demonstrates real-world application of key ML concepts:
            </p>
            
            <div className="concepts-grid">
              <div className="concept-card">
                <div className="concept-icon">🎯</div>
                <div className="concept-content">
                  <h4>Supervised Learning</h4>
                  <p>Activity classification with labeled datasets</p>
                </div>
              </div>
              
              <div className="concept-card">
                <div className="concept-icon">⚙️</div>
                <div className="concept-content">
                  <h4>Feature Engineering</h4>
                  <p>Extracting patterns from sensor data</p>
                </div>
              </div>
              
              <div className="concept-card">
                <div className="concept-icon">📊</div>
                <div className="concept-content">
                  <h4>Model Evaluation</h4>
                  <p>Performance metrics and validation</p>
                </div>
              </div>
              
              <div className="concept-card">
                <div className="concept-icon">🚀</div>
                <div className="concept-content">
                  <h4>Real-world Deployment</h4>
                  <p>From prototype to practical application</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Educational Context */}
          <div className="educational-context">
            <div className="context-divider"></div>
            
            <div className="course-info">
              <h4 className="course-title">🎓 Educational Tool For</h4>
              
              <div className="course-details">
                <div className="detail">
                  <div className="detail-icon">📚</div>
                  <div className="detail-content">
                    <h5>Machine Learning Methods Course</h5>
                    <p>Core curriculum component</p>
                  </div>
                </div>
                
                <div className="detail">
                  <div className="detail-icon">🏃‍♂️</div>
                  <div className="detail-content">
                    <h5>Activity Classification Practical</h5>
                    <p>Hands-on learning experience</p>
                  </div>
                </div>
                
                <div className="detail">
                  <div className="detail-icon">🎯</div>
                  <div className="detail-content">
                    <h5>Master Program Project</h5>
                    <p>Intelligent Systems Program, Novia UAS</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="context-divider"></div>
          </div>
          
          {/* Student Contribution */}
          <div className="contribution-section">
            <div className="contribution-header">
              <div className="contribution-icon">💬</div>
              <div className="contribution-content">
                <h4>Built by Students, For Students</h4>
                <p>
                  This is a student-led educational tool. Your feedback and contributions 
                  help improve the learning experience for current and future students.
                </p>
              </div>
            </div>
            
            <div className="contribution-actions">
              <button className="premium-btn btn-outline" onClick={() => window.open('https://forms.gle/YatjDMCYGSy3M23R8')}>
  💡 Suggest Enhancement (Google Form)
</button>
             
            </div>
          </div>
          
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-divider"></div>
            
            <div className="copyright-info">
              <p className="copyright-text">
                © 2026 HAR Studio | Academic Project | Novia University of Applied Sciences
              </p>
              <p className="footer-tagline">
                "See ML concepts come alive through activity recognition"
              </p>
            </div>
            
            <div className="footer-divider"></div>
          </div>
        </div>

        <style jsx>{`
          .premium-footer {
            background: linear-gradient(135deg, 
              rgba(15, 23, 42, 0.9) 0%, 
              rgba(30, 32, 60, 0.9) 100%
            );
            border-radius: var(--border-radius-lg);
            padding: var(--spacing-xl);
            margin-top: var(--spacing-xxl);
          }
          
          .ml-concepts {
            margin-bottom: 40px;
          }
          
          .concepts-title {
            font-size: 1.8rem;
            color: var(--text-primary);
            text-align: center;
            margin-bottom: 15px;
            background: var(--gold-gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .concepts-subtitle {
            color: var(--text-secondary);
            text-align: center;
            margin-bottom: 30px;
            font-size: 1.1rem;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
          }
          
          .concepts-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }
          
          .concept-card {
            padding: 20px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: var(--border-radius-md);
            text-align: center;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
          }
          
          .concept-card:hover {
            transform: translateY(-5px);
            border-color: var(--gold-primary);
            background: rgba(255, 215, 0, 0.1);
          }
          
          .concept-icon {
            font-size: 36px;
            margin-bottom: 15px;
          }
          
          .concept-content h4 {
            font-size: 1.1rem;
            color: var(--text-primary);
            margin-bottom: 8px;
            font-weight: 600;
          }
          
          .concept-content p {
            font-size: 0.9rem;
            color: var(--text-secondary);
            line-height: 1.4;
          }
          
          .context-divider {
            height: 1px;
            background: linear-gradient(90deg, transparent, var(--gold-primary), transparent);
            margin: 30px auto;
            max-width: 600px;
          }
          
          .course-info {
            text-align: center;
          }
          
          .course-title {
            font-size: 1.5rem;
            color: var(--text-primary);
            margin-bottom: 25px;
          }
          
          .course-details {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            max-width: 900px;
            margin: 0 auto;
          }
          
          .detail {
            display: flex;
            gap: 15px;
            align-items: center;
            padding: 20px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: var(--border-radius-md);
          }
          
          .detail-icon {
            font-size: 28px;
            color: var(--gold-primary);
            flex-shrink: 0;
          }
          
          .detail-content h5 {
            font-size: 1rem;
            color: var(--text-primary);
            margin-bottom: 5px;
            text-align: left;
          }
          
          .detail-content p {
            font-size: 0.9rem;
            color: var(--text-secondary);
            text-align: left;
            line-height: 1.4;
          }
          
          .contribution-section {
            margin: 40px 0;
            padding: 30px;
            background: rgba(139, 92, 246, 0.1);
            border-radius: var(--border-radius-lg);
            border-left: 4px solid var(--purple-primary);
          }
          
          .contribution-header {
            display: flex;
            align-items: center;
            gap: 25px;
            margin-bottom: 25px;
          }
          
          .contribution-icon {
            font-size: 60px;
            flex-shrink: 0;
          }
          
          .contribution-content {
            flex: 1;
          }
          
          .contribution-content h4 {
            font-size: 1.5rem;
            color: var(--text-primary);
            margin-bottom: 10px;
          }
          
          .contribution-content p {
            color: var(--text-secondary);
            line-height: 1.6;
            font-size: 1.05rem;
          }
          
          .contribution-actions {
            display: flex;
            gap: 20px;
            justify-content: center;
          }
          
          .footer-bottom {
            margin-top: 40px;
          }
          
          .footer-divider {
            height: 1px;
            background: linear-gradient(90deg, transparent, var(--gold-primary), transparent);
            margin: 20px 0;
          }
          
          .copyright-info {
            text-align: center;
            padding: 20px 0;
          }
          
          .copyright-text {
            color: var(--text-secondary);
            font-size: 0.9rem;
            margin-bottom: 10px;
          }
          
          .footer-tagline {
            color: var(--gold-primary);
            font-size: 1.1rem;
            font-style: italic;
            font-weight: 500;
          }
          
          @media (max-width: 1024px) {
            .concepts-grid {
              grid-template-columns: repeat(2, 1fr);
            }
            
            .course-details {
              grid-template-columns: 1fr;
            }
            
            .detail {
              flex-direction: column;
              text-align: center;
            }
            
            .detail-content h5,
            .detail-content p {
              text-align: center;
            }
          }
          
          @media (max-width: 768px) {
            .concepts-grid {
              grid-template-columns: 1fr;
            }
            
            .contribution-header {
              flex-direction: column;
              text-align: center;
              gap: 20px;
            }
            
            .contribution-actions {
              flex-direction: column;
            }
            
            .premium-footer {
              padding: var(--spacing-lg);
            }
          }
          
          @media (max-width: 480px) {
            .concept-card {
              padding: 15px;
            }
            
            .detail {
              padding: 15px;
            }
            
            .contribution-section {
              padding: 20px;
            }
            
            .contribution-content h4 {
              font-size: 1.3rem;
            }
            
            .footer-tagline {
              font-size: 1rem;
            }
          }
        `}</style>
      </div>
    </footer>
  );
};

export default PremiumFooter;