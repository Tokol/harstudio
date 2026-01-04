import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="particle particle-1 floating"></div>
        <div className="particle particle-2 floating-subtle"></div>
        <div className="particle particle-3 floating" style={{ animationDelay: '2s' }}></div>
        <div className="gradient-ring"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge pulse">
            <span>🏆</span> Champion Edition
          </div>
          
          <h1 className="hero-title">
            <span className="hero-title-main">HAR </span>
            <span className="hero-title-sub">Studio</span>
          </h1>
          
          <div className="hero-tagline">
            <span className="hero-tagline-word">Intelligent</span>
            <span className="hero-tagline-word">Athletic</span>
            <span className="hero-tagline-word">Analytics</span>
          </div>
          
          <p className="hero-description">
            Where champion athletic data meets intelligent machine learning analysis.
            Professional-grade tools for Human Activity Recognition research.
          </p>
          
          <div className="hero-cta">
            <button className="btn btn-primary">
              <span className="btn-icon">🚀</span>
              Get Started
              <span className="btn-arrow">→</span>
            </button>
            <button className="btn btn-secondary">
              <span className="btn-icon">📚</span>
              View Documentation
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">98.2%</div>
              <div className="stat-label">Accuracy</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <div className="stat-number">1.2K+</div>
              <div className="stat-label">Datasets</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <div className="stat-number">24ms</div>
              <div className="stat-label">Avg. Latency</div>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="visual-card glass-effect">
            <div className="visual-wave"></div>
            <div className="visual-data-point" style={{ left: '20%', animationDelay: '0s' }}></div>
            <div className="visual-data-point" style={{ left: '40%', animationDelay: '0.2s' }}></div>
            <div className="visual-data-point" style={{ left: '60%', animationDelay: '0.4s' }}></div>
            <div className="visual-data-point" style={{ left: '80%', animationDelay: '0.6s' }}></div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <div className="scroll-line"></div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;