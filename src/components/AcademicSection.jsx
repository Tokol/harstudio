import React from 'react';
import rayPhoto from '../assets/images/ray-porn.jpg';
import noviaLogo from '../assets/logos/novia-logo.png';

const AcademicSection = () => {
  return (
    <section className="academic-section section fade-in">
      <div className="content-wrapper">
        <h2 className="section-title">👨‍🏫 Academic Context & Supervision</h2>
        
        <div className="academic-content">
          {/* Supervisor Section */}
          <div className="supervisor-card">
            <div className="supervisor-photo-container">
              <img 
                src={rayPhoto} 
                alt="Ray Pörn - Academic Supervisor"
                className="supervisor-photo"
              />
              <div className="supervisor-frame"></div>
            </div>
            
            <div className="supervisor-info">
              <h3 className="supervisor-name">Ray Pörn</h3>
              <p className="supervisor-title">Degree Head & Lecturer</p>
              <p className="supervisor-department">Intelligent Systems Program</p>
              <p className="supervisor-institution">Novia University of Applied Sciences</p>
              
              <div className="supervisor-quote">
                <div className="quote-icon">❝</div>
                <p className="quote-text">
                  This project demonstrates practical application of Machine Learning Methods 
                  through human activity recognition - an excellent example of student-led 
                  educational tool development that bridges theory with real-world application.
                </p>
                <div className="quote-icon">❞</div>
              </div>
            </div>
          </div>
          
          {/* University Context */}
          <div className="university-context">
            <div className="university-logo-container">
              <img 
                src={noviaLogo} 
                alt="Novia University of Applied Sciences"
                className="university-logo"
              />
            </div>
            
            <div className="university-info">
              <h4 className="university-title">Novia University of Applied Sciences</h4>
              
              <div className="program-details">
                <div className="program-item">
                  <div className="program-icon">🎓</div>
                  <div className="program-content">
                    <h5>Master of Engineering</h5>
                    <p>Intelligent Systems Program</p>
                  </div>
                </div>
                
                <div className="program-item">
                  <div className="program-icon">🤖</div>
                  <div className="program-content">
                    <h5>Machine Learning Methods</h5>
                    <p>Core Course - Activity Classification</p>
                  </div>
                </div>
                
                <div className="program-item">
                  <div className="program-icon">🔬</div>
                  <div className="program-content">
                    <h5>Practical Application</h5>
                    <p>Hands-on project development</p>
                  </div>
                </div>
              </div>
              
              <div className="academic-values">
                <span className="value-tag">Innovation</span>
                <span className="value-tag">Practical Learning</span>
                <span className="value-tag">Student-Led</span>
                <span className="value-tag">Industry Relevance</span>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .academic-section {
            background: linear-gradient(135deg, 
              rgba(16, 185, 129, 0.05) 0%, 
              transparent 100%
            );
            border-radius: var(--border-radius-lg);
            padding: var(--spacing-xl);
          }
          
          .academic-content {
            max-width: 1000px;
            margin: var(--spacing-xl) auto;
          }
          
          .supervisor-card {
            display: flex;
            gap: 40px;
            margin-bottom: 50px;
            padding: 40px;
            background: var(--bg-card);
            border-radius: var(--border-radius-lg);
            border-left: 4px solid var(--teal-primary);
          }
          
          .supervisor-photo-container {
            position: relative;
            flex-shrink: 0;
          }
          
          .supervisor-photo {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid var(--teal-primary);
            position: relative;
            z-index: 2;
          }
          
          .supervisor-frame {
            position: absolute;
            top: -10px;
            left: -10px;
            right: -10px;
            bottom: -10px;
            border-radius: 50%;
            border: 2px solid var(--teal-primary);
            opacity: 0.5;
            z-index: 1;
          }
          
          .supervisor-info {
            flex: 1;
          }
          
          .supervisor-name {
            font-size: 2rem;
            color: var(--text-primary);
            margin-bottom: 5px;
            font-weight: 700;
          }
          
          .supervisor-title {
            color: var(--teal-primary);
            font-size: 1.2rem;
            margin-bottom: 5px;
            font-weight: 600;
          }
          
          .supervisor-department,
          .supervisor-institution {
            color: var(--text-secondary);
            font-size: 1rem;
            margin-bottom: 5px;
          }
          
          .supervisor-quote {
            margin-top: 25px;
            padding: 25px;
            background: rgba(16, 185, 129, 0.1);
            border-radius: var(--border-radius-md);
            position: relative;
          }
          
          .quote-icon {
            position: absolute;
            font-size: 30px;
            color: var(--teal-primary);
            opacity: 0.5;
          }
          
          .quote-icon:first-child {
            top: 10px;
            left: 15px;
          }
          
          .quote-icon:last-child {
            bottom: 10px;
            right: 15px;
          }
          
          .quote-text {
            color: var(--text-secondary);
            font-size: 1.1rem;
            line-height: 1.6;
            font-style: italic;
            text-align: center;
            padding: 0 30px;
          }
          
          .university-context {
            display: flex;
            gap: 40px;
            padding: 40px;
            background: var(--bg-card);
            border-radius: var(--border-radius-lg);
            border-right: 4px solid var(--teal-primary);
          }
          
          .university-logo-container {
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .university-logo {
            max-width: 200px;
            height: auto;
            filter: brightness(0) invert(1);
            opacity: 0.9;
          }
          
          .university-info {
            flex: 1;
          }
          
          .university-title {
            font-size: 1.8rem;
            color: var(--text-primary);
            margin-bottom: 25px;
            font-weight: 700;
          }
          
          .program-details {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-bottom: 30px;
          }
          
          .program-item {
            display: flex;
            gap: 15px;
            padding: 20px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: var(--border-radius-md);
          }
          
          .program-icon {
            font-size: 30px;
            color: var(--teal-primary);
            flex-shrink: 0;
          }
          
          .program-content h5 {
            font-size: 1rem;
            color: var(--text-primary);
            margin-bottom: 5px;
            font-weight: 600;
          }
          
          .program-content p {
            font-size: 0.9rem;
            color: var(--text-secondary);
            line-height: 1.4;
          }
          
          .academic-values {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
          }
          
          .value-tag {
            background: rgba(16, 185, 129, 0.1);
            color: var(--teal-primary);
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 500;
          }
          
          @media (max-width: 1024px) {
            .program-details {
              grid-template-columns: repeat(2, 1fr);
            }
            
            .supervisor-card {
              flex-direction: column;
              text-align: center;
              align-items: center;
            }
            
            .university-context {
              flex-direction: column;
              text-align: center;
              align-items: center;
            }
          }
          
          @media (max-width: 768px) {
            .program-details {
              grid-template-columns: 1fr;
            }
            
            .supervisor-card,
            .university-context {
              padding: 30px 20px;
            }
            
            .supervisor-photo {
              width: 150px;
              height: 150px;
            }
            
            .university-logo {
              max-width: 150px;
            }
            
            .academic-section {
              padding: var(--spacing-lg);
            }
          }
          
          @media (max-width: 480px) {
            .supervisor-name {
              font-size: 1.5rem;
            }
            
            .university-title {
              font-size: 1.4rem;
            }
            
            .quote-text {
              font-size: 1rem;
              padding: 0 15px;
            }
            
            .program-item {
              flex-direction: column;
              text-align: center;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default AcademicSection;