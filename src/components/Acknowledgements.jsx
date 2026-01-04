// Acknowledgements.jsx
import React from 'react';

const Acknowledgements = () => {
  return (
    <section className="team-section section fade-in">
      <div className="content-wrapper">
        <h2 className="section-title">Acknowledgements</h2>
        <p className="section-subtitle">
          This project was made possible with the support and contributions of several individuals and organizations.
        </p>
        
        <div className="acknowledgements-grid">
          {/* Swimming Data Contributor */}
          <div className="ack-card contributor-card">
            <div className="ack-icon">🏊‍♀️</div>
            <div className="ack-content">
              <h3>Ellen Williamsson</h3>
              <p className="ack-role">Elite Swimmer & Data Contributor</p>
              <p className="ack-description">
                Provided comprehensive swimming activity data collected during professional training sessions in Vaasa, Finland.
              </p>
              <div className="ack-tags">
                <span className="tag">Professional Athlete</span>
                <span className="tag">Data Collection</span>
                <span className="tag">Ostrobothnia Region</span>
              </div>
            </div>
          </div>
          
          {/* Course Instructor */}
          <div className="ack-card instructor-card">
            <div className="ack-icon">👨‍🏫</div>
            <div className="ack-content">
              <h3>Ray Pörn</h3>
              <p className="ack-role">Course Instructor & Degree Program Head</p>
              <p className="ack-description">
                Instructor for the Machine Learning Methods course and Head of the Intelligent Systems program at Novia University.
              </p>
              <div className="ack-tags">
                <span className="tag">Machine Learning</span>
                <span className="tag">Course Instructor</span>
                <span className="tag">Novia University</span>
              </div>
            </div>
          </div>
          
          {/* University */}
          <div className="ack-card university-card">
            <div className="ack-icon">🏛️</div>
            <div className="ack-content">
              <h3>Novia University of Applied Sciences</h3>
              <p className="ack-role">Academic Institution</p>
              <p className="ack-description">
                Master of Engineering program in Intelligent Systems, providing the academic framework and resources for this project.
              </p>
              <div className="ack-tags">
                <span className="tag">Higher Education</span>
                <span className="tag">Intelligent Systems</span>
                <span className="tag">Applied Sciences</span>
              </div>
            </div>
          </div>
          
          {/* Tools & Resources */}
          <div className="ack-card tools-card">
            <div className="ack-icon">🛠️</div>
            <div className="ack-content">
              <h3>Open Source Tools & Libraries</h3>
              <p className="ack-role">Technical Resources</p>
              <p className="ack-description">
                Built with modern web technologies and Python ML libraries. Special thanks to Phyphox for sensor data collection and the open-source community.
              </p>
              <div className="ack-tags">
                <span className="tag">React</span>
                <span className="tag">Streamlit</span>
                <span className="tag">Python</span>
                <span className="tag">Data Visualization</span>
                <span className="tag">Phyphox</span>
                <span className="tag">GitHub</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="team-message">
          <div className="message-icon">🌷</div>
          <div className="message-content">
            <h4>Academic Project Development</h4>
            <p>
              This educational platform demonstrates practical applications of machine learning in human activity recognition. 
              We thank all contributors for their support in creating a tool that bridges academic theory with hands-on implementation.
            </p>
            <p className="note">
              The platform serves as an interactive learning resource for students and researchers exploring sensor-based activity classification.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .team-section {
          background: linear-gradient(135deg, 
            rgba(30, 35, 55, 0.9) 0%, 
            rgba(15, 20, 35, 0.9) 100%
          );
          border-radius: 20px;
          padding: 60px 40px;
          margin-top: 60px;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        
        .content-wrapper {
          width: 100%;
        }
        
        .section-title {
          font-size: 2rem;
          text-align: center;
          margin-bottom: 1rem;
          color: white;
          font-weight: 600;
        }
        
        .section-subtitle {
          text-align: center;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 3rem;
          font-size: 1.1rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }
        
        .acknowledgements-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 25px;
          margin: 40px 0;
        }
        
        .ack-card {
          background: rgba(25, 30, 50, 0.8);
          border-radius: 16px;
          padding: 25px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }
        
        .ack-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        
        .contributor-card:hover {
          border-color: rgba(59, 130, 246, 0.5);
        }
        
        .instructor-card:hover {
          border-color: rgba(16, 185, 129, 0.5);
        }
        
        .university-card:hover {
          border-color: rgba(168, 85, 247, 0.5);
        }
        
        .tools-card:hover {
          border-color: rgba(245, 158, 11, 0.5);
        }
        
        .ack-icon {
          font-size: 2.5rem;
          margin-bottom: 15px;
        }
        
        .ack-content h3 {
          font-size: 1.2rem;
          color: white;
          margin-bottom: 5px;
          font-weight: 600;
        }
        
        .ack-role {
          color: rgba(59, 130, 246, 0.9);
          font-size: 0.9rem;
          margin-bottom: 15px;
          font-weight: 500;
        }
        
        .ack-description {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 15px;
        }
        
        .ack-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 15px;
        }
        
        .tag {
          background: rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.7);
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 0.8rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .team-message {
          margin-top: 40px;
          padding: 25px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 16px;
          border-left: 4px solid rgba(59, 130, 246, 0.5);
          display: flex;
          align-items: center;
          gap: 20px;
        }
        
        .message-icon {
          font-size: 2.5rem;
          flex-shrink: 0;
        }
        
        .message-content {
          flex: 1;
        }
        
        .message-content h4 {
          font-size: 1.3rem;
          color: white;
          margin-bottom: 15px;
          font-weight: 600;
        }
        
        .message-content p {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.7;
          font-size: 1rem;
          margin-bottom: 15px;
        }
        
        .note {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.7);
          font-style: italic;
          border-left: 3px solid rgba(59, 130, 246, 0.5);
          padding-left: 15px;
          margin-top: 20px;
        }
        
        @media (max-width: 768px) {
          .acknowledgements-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .team-message {
            flex-direction: column;
            text-align: center;
            gap: 15px;
          }
          
          .team-section {
            padding: 40px 20px;
          }
          
          .section-title {
            font-size: 1.8rem;
          }
        }
        
        @media (max-width: 480px) {
          .ack-card {
            padding: 20px;
          }
          
          .ack-content h3 {
            font-size: 1.1rem;
          }
          
          .ack-tags {
            gap: 5px;
          }
          
          .tag {
            padding: 3px 8px;
            font-size: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Acknowledgements;