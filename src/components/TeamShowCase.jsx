import React from 'react';
import jonasPhoto from '../assets/images/jonas.jpeg';
import sureshPhoto from '../assets/images/suresh.png';

const TeamShowcase = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Suresh Lama",
      role: "Platform Development Lead",
      photo: sureshPhoto,
      contribution: "Led the full-stack development of HAR STUDIO, implemented the machine learning pipeline, and designed the system architecture. Focused on creating an intuitive educational interface for activity recognition.",
      skills: ["Machine Learning", "Full-Stack Development", "System Design", "UI/UX", "Deployment"],
    },
    {
      id: 2,
      name: "Jonas Williamsson",
      role: "Data Collection & Processing Lead",
      photo: jonasPhoto,
      contribution: "Managed comprehensive data collection, preprocessing pipelines, and quality validation. Ensured reliable sensor data for training robust activity recognition models.",
      skills: ["Data Collection", "Data Processing", "Quality Assurance", "Sensor Analytics", "Documentation"],
    }
  ];

  return (
    <section className="team-section section fade-in">
      <div className="content-wrapper">
        <h2 className="section-title">Project Team</h2>
        <p className="section-subtitle">
          Developed by Master of Engineering students in the Intelligent Systems program at Novia University.
        </p>
        
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id} 
              className={`team-member-card ${member.id === 1 ? 'lead-card' : 'data-card'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="member-photo-container">
                <img 
                  src={member.photo} 
                  alt={member.name}
                  className="member-photo"
                />
                <div className="photo-frame"></div>
              </div>
              
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-contribution">{member.contribution}</p>
                
                <div className="member-tags">
                  {member.skills.map((skill, idx) => (
                    <span key={idx} className="tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="team-message">
          <div className="message-icon">🎓</div>
          <div className="message-content">
            <h4>Academic Project Development</h4>
            <p>
              HAR STUDIO was developed as part of the Machine Learning Methods course at Novia University of Applied Sciences. 
              The project combines academic learning with practical implementation, creating a tool that demonstrates 
              human activity recognition from sensor data to classification results.
            </p>
            <p className="note">
              The platform is open for educational use and collaboration. We welcome contributions and feedback 
              from students and researchers interested in machine learning applications.
            </p>
          </div>
          <a 
            href="https://share.streamlit.io/user/tokol"
            target="_blank"
            rel="noopener noreferrer"
            className="view-repo-btn"
          >
            View Project Repository
          </a>
        </div>

        <style jsx>{`
          .team-section {
            background: linear-gradient(135deg, 
              rgba(15, 20, 35, 0.9) 0%, 
              rgba(15, 20, 35, 0.7) 100%
            );
            border-radius: var(--border-radius-lg);
            padding: var(--spacing-xl);
            border: 1px solid rgba(255, 255, 255, 0.08);
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
          
          .team-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
            margin: var(--spacing-xl) 0;
            max-width: 900px;
            margin-left: auto;
            margin-right: auto;
          }
          
          .team-member-card {
            background: rgba(20, 25, 45, 0.8);
            border-radius: var(--border-radius-lg);
            padding: 30px;
            text-align: center;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            backdrop-filter: blur(10px);
          }
          
          .lead-card {
            border-color: rgba(59, 130, 246, 0.3);
          }
          
          .data-card {
            border-color: rgba(16, 185, 129, 0.3);
          }
          
          .team-member-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          }
          
          .member-photo-container {
            position: relative;
            width: 140px;
            height: 140px;
            margin: 0 auto 20px;
          }
          
          .member-photo {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
            position: relative;
            z-index: 2;
            border: 3px solid ${member => member.id === 1 ? 'rgba(59, 130, 246, 0.8)' : 'rgba(16, 185, 129, 0.8)'};
          }
          
          .member-info {
            margin-bottom: 10px;
          }
          
          .member-name {
            font-size: 1.3rem;
            color: white;
            margin-bottom: 5px;
            font-weight: 600;
          }
          
          .member-role {
            color: ${member => member.id === 1 ? 'rgba(59, 130, 246, 0.9)' : 'rgba(16, 185, 129, 0.9)'};
            font-size: 0.95rem;
            margin-bottom: 15px;
            font-weight: 500;
          }
          
          .member-contribution {
            color: rgba(255, 255, 255, 0.8);
            font-size: 0.95rem;
            line-height: 1.6;
            margin-bottom: 20px;
            min-height: 80px;
          }
          
          .member-tags {
            display: flex;
            justify-content: center;
            gap: 8px;
            flex-wrap: wrap;
          }
          
          .tag {
            background: ${member => member.id === 1 ? 'rgba(59, 130, 246, 0.1)' : 'rgba(16, 185, 129, 0.1)'};
            color: ${member => member.id === 1 ? 'rgba(59, 130, 246, 0.9)' : 'rgba(16, 185, 129, 0.9)'};
            padding: 6px 12px;
            border-radius: 6px;
            font-size: 0.8rem;
            font-weight: 500;
            border: 1px solid ${member => member.id === 1 ? 'rgba(59, 130, 246, 0.2)' : 'rgba(16, 185, 129, 0.2)'};
          }
          
          .team-message {
            margin-top: 50px;
            padding: 30px;
            background: rgba(30, 35, 55, 0.8);
            border-radius: var(--border-radius-lg);
            border: 1px solid rgba(255, 255, 255, 0.1);
            display: flex;
            align-items: center;
            gap: 25px;
            backdrop-filter: blur(10px);
          }
          
          .message-icon {
            font-size: 40px;
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
          
          .view-repo-btn {
            background: rgba(59, 130, 246, 0.2);
            color: rgba(59, 130, 246, 0.9);
            padding: 12px 24px;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
            border: 1px solid rgba(59, 130, 246, 0.3);
            display: inline-block;
            white-space: nowrap;
          }
          
          .view-repo-btn:hover {
            background: rgba(59, 130, 246, 0.3);
            transform: translateY(-2px);
          }
          
          @media (max-width: 768px) {
            .team-grid {
              grid-template-columns: 1fr;
              gap: 25px;
              max-width: 500px;
            }
            
            .team-message {
              flex-direction: column;
              text-align: center;
              gap: 20px;
            }
            
            .message-icon {
              font-size: 35px;
            }
            
            .team-section {
              padding: var(--spacing-lg);
            }
            
            .member-photo-container {
              width: 120px;
              height: 120px;
            }
            
            .section-title {
              font-size: 1.8rem;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default TeamShowcase;