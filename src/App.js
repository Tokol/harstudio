import React, { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import ActivityGrid from './components/ActivityGrid';
import TeamShowcase from './components/TeamShowcase';
import PremiumFooter from './components/PremiumFooter';
import Acknowledgements from './components/Acknowledgements';
import ellenImage from './assets/images/ellen.jpeg';
import './styles/premium.css';
import './styles/animations.css';

function App() {
  useEffect(() => {
    // Add scroll animations
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.style.animationDelay = `${index * 0.1}s`;
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // Preload Ellen image to reduce visible load delay in ActivityGrid.
    const preloadImage = new Image();
    preloadImage.src = ellenImage;

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="premium-app">
      {/* Background Particles */}
      <div className="background-particles">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="gold-gradient-overlay"></div>
      </div>

      {/* Main Content */}
      <div className="content-wrapper">
        <HeroSection />
        <ActivityGrid />
      
        <TeamShowcase />
        <Acknowledgements/>
        <PremiumFooter />
      </div>
    </div>
  );
}

export default App;
