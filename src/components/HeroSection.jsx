import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  // State for animated values
  const [step1Values, setStep1Values] = useState({ sampleRate: '96.7Hz', latency: '24ms' });
  const [step2Values, setStep2Values] = useState({
    accX: '-0.25 g',
    accY: '9.81 g',
    accZ: '0.12 g',
    gyroX: '15.3°/s',
    gyroY: '-8.7°/s',
    gyroZ: '2.4°/s'
  });
  const [step3Values, setStep3Values] = useState({
    mean: '4.82',
    stdDev: '2.15',
    energy: '0.87',
    entropy: '1.42'
  });
  const [step4Values, setStep4Values] = useState({
    activity: 'Swimming',
    emoji: '🏊‍♀️',
    confidence: '98.2%'
  });
  const [step5Values, setStep5Values] = useState({
    accuracy: '97.8%',
    inferenceTime: '24ms',
    samples: '1.2K+',
    f1Score: '0.94'
  });

  // Activities for cycling
  const activities = [
    { name: 'Swimming', emoji: '🏊‍♀️', confidence: '98.2%' },
    { name: 'Running', emoji: '🏃‍♂️', confidence: '96.5%' },
    { name: 'Walking', emoji: '🚶‍♂️', confidence: '95.8%' },
    { name: 'Cycling', emoji: '🚴‍♂️', confidence: '97.1%' },
    { name: 'Jumping', emoji: '🦘', confidence: '94.3%' }
  ];

  // Function to generate random values within ranges
  const generateRandomValue = (min, max, decimals = 2, unit = '') => {
    const value = (Math.random() * (max - min) + min).toFixed(decimals);
    return `${value}${unit}`;
  };

  useEffect(() => {
    // Animation intervals
    const step1Interval = setInterval(() => {
      setStep1Values({
        sampleRate: generateRandomValue(95, 100, 1, 'Hz'),
        latency: generateRandomValue(20, 30, 0, 'ms')
      });
    }, 500);

    const step2Interval = setInterval(() => {
      setStep2Values({
        accX: generateRandomValue(-0.5, 0.5, 2, ' g'),
        accY: generateRandomValue(9.7, 9.9, 2, ' g'),
        accZ: generateRandomValue(0, 0.3, 2, ' g'),
        gyroX: generateRandomValue(10, 20, 1, '°/s'),
        gyroY: generateRandomValue(-10, -5, 1, '°/s'),
        gyroZ: generateRandomValue(1, 5, 1, '°/s')
      });
    }, 600);

    const step3Interval = setInterval(() => {
      setStep3Values({
        mean: generateRandomValue(4.5, 5.5, 2),
        stdDev: generateRandomValue(1.8, 2.5, 2),
        energy: generateRandomValue(0.8, 0.95, 2),
        entropy: generateRandomValue(1.3, 1.6, 2)
      });
    }, 700);

    const step4Interval = setInterval(() => {
      const randomActivity = activities[Math.floor(Math.random() * activities.length)];
      setStep4Values({
        activity: randomActivity.name,
        emoji: randomActivity.emoji,
        confidence: randomActivity.confidence
      });
    }, 3000);

    const step5Interval = setInterval(() => {
      setStep5Values({
        accuracy: generateRandomValue(96, 99, 1, '%'),
        inferenceTime: generateRandomValue(20, 30, 0, 'ms'),
        samples: `${generateRandomValue(1, 2, 1, 'K+').replace('.0', '')}`,
        f1Score: generateRandomValue(0.92, 0.97, 2)
      });
    }, 850);

    return () => {
      clearInterval(step1Interval);
      clearInterval(step2Interval);
      clearInterval(step3Interval);
      clearInterval(step4Interval);
      clearInterval(step5Interval);
    };
  }, []);

  return (
    <section className="hero-section section fade-in">
      <div className="content-wrapper">
        {/* Main Title */}
        <div className="hero-title-wrapper">
          <h1 className="hero-main-title">
              <span className="hero-icon left-runner">🏃‍♂️</span>  {/* Running person */}
            HAR STUDIO
          </h1>
          <p className="hero-subtitle">
             Human Activity Recognition Platform
          </p>


          
        </div>

        {/* Continuous Professional Pipeline */}
        <div className="pipeline-container">
          {/* Animated Pipeline Line */}
          <div className="pipeline-line">
            <div className="flow-animation"></div>
          </div>
          
          {/* Step 1: Human Activity */}
          <div className="pipeline-step step-1">
            <div className="step-marker">
              <div className="marker-circle">
                <span className="marker-icon">👤</span>
              </div>
              <div className="marker-pulse"></div>
            </div>
            <div className="step-card">
              <h3 className="step-title">Human Activity</h3>
              <div className="signal-visualization">
                <div className="signal-line">
                  <div className="signal-wave"></div>
                </div>
                <div className="signal-stats">
                  <div className="stat-item">
                    <span className="stat-emoji">📈</span>
                    <span className="stat-value animated-value">{step1Values.sampleRate}</span>
                    <span className="stat-label">Sample Rate</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-emoji">⚡</span>
                    <span className="stat-value animated-value">{step1Values.latency}</span>
                    <span className="stat-label">Latency</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Data Collection */}
          <div className="pipeline-step step-2">
            <div className="step-marker">
              <div className="marker-circle">
                <span className="marker-icon">📊</span>
              </div>
              <div className="marker-pulse"></div>
            </div>
            <div className="step-card">
              <h3 className="step-title">Sensor Data</h3>
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-header">
                    <span className="stat-emoji">📱</span>
                    <span className="stat-name">Accelerometer</span>
                  </div>
                  <div className="stat-values">
                    <div className="value-row">
                      <span>X:</span>
                      <span className="value animated-value">{step2Values.accX}</span>
                    </div>
                    <div className="value-row">
                      <span>Y:</span>
                      <span className="value animated-value">{step2Values.accY}</span>
                    </div>
                    <div className="value-row">
                      <span>Z:</span>
                      <span className="value animated-value">{step2Values.accZ}</span>
                    </div>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-header">
                    <span className="stat-emoji">🔄</span>
                    <span className="stat-name">Gyroscope</span>
                  </div>
                  <div className="stat-values">
                    <div className="value-row">
                      <span>X:</span>
                      <span className="value animated-value">{step2Values.gyroX}</span>
                    </div>
                    <div className="value-row">
                      <span>Y:</span>
                      <span className="value animated-value">{step2Values.gyroY}</span>
                    </div>
                    <div className="value-row">
                      <span>Z:</span>
                      <span className="value animated-value">{step2Values.gyroZ}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Feature Engineering */}
          <div className="pipeline-step step-3">
            <div className="step-marker">
              <div className="marker-circle">
                <span className="marker-icon">⚙️</span>
              </div>
              <div className="marker-pulse"></div>
            </div>
            <div className="step-card">
              <h3 className="step-title">Feature Engineering</h3>
              <div className="features-grid">
                <div className="feature-item">
                  <span className="feature-emoji">📏</span>
                  <div className="feature-details">
                    <span className="feature-name">Mean</span>
                    <span className="feature-value animated-value">{step3Values.mean}</span>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-emoji">📐</span>
                  <div className="feature-details">
                    <span className="feature-name">Std Dev</span>
                    <span className="feature-value animated-value">{step3Values.stdDev}</span>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-emoji">⚡</span>
                  <div className="feature-details">
                    <span className="feature-name">Energy</span>
                    <span className="feature-value animated-value">{step3Values.energy}</span>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-emoji">📊</span>
                  <div className="feature-details">
                    <span className="feature-name">Entropy</span>
                    <span className="feature-value animated-value">{step3Values.entropy}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4: ML Model */}
          <div className="pipeline-step step-4">
            <div className="step-marker">
              <div className="marker-circle">
                <span className="marker-icon">🧠</span>
              </div>
              <div className="marker-pulse"></div>
            </div>
            <div className="step-card">
              <h3 className="step-title">ML Inference</h3>
              <div className="model-visualization">
                <div className="neural-network">
                  <div className="neuron-layer">
                    <div className="neuron"></div>
                    <div className="neuron"></div>
                    <div className="neuron"></div>
                  </div>
                  <div className="connections">
                    <div className="connection"></div>
                    <div className="connection"></div>
                    <div className="connection"></div>
                  </div>
                  <div className="neuron-layer">
                    <div className="neuron"></div>
                    <div className="neuron"></div>
                  </div>
                </div>
                <div className="prediction-result">
                  <div className="prediction-label">
                    <span className="prediction-emoji animated-emoji">{step4Values.emoji}</span>
                    <span className="prediction-text animated-value">{step4Values.activity}</span>
                  </div>
                  <div className="confidence-score">
                    <span>Confidence: </span>
                    <span className="score-value animated-value">{step4Values.confidence}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 5: Analytics */}
          <div className="pipeline-step step-5">
            <div className="step-marker">
              <div className="marker-circle">
                <span className="marker-icon">📈</span>
              </div>
              <div className="marker-pulse"></div>
            </div>
            <div className="step-card">
              <h3 className="step-title">Performance Analytics</h3>
              <div className="analytics-grid">
                <div className="metric-card">
                  <span className="metric-emoji">🎯</span>
                  <div className="metric-details">
                    <span className="metric-value animated-value">{step5Values.accuracy}</span>
                    <span className="metric-label">Accuracy</span>
                  </div>
                </div>
                <div className="metric-card">
                  <span className="metric-emoji">⚡</span>
                  <div className="metric-details">
                    <span className="metric-value animated-value">{step5Values.inferenceTime}</span>
                    <span className="metric-label">Inference Time</span>
                  </div>
                </div>
                <div className="metric-card">
                  <span className="metric-emoji">📊</span>
                  <div className="metric-details">
                    <span className="metric-value animated-value">{step5Values.samples}</span>
                    <span className="metric-label">Samples</span>
                  </div>
                </div>
                <div className="metric-card">
                  <span className="metric-emoji">📈</span>
                  <div className="metric-details">
                    <span className="metric-value animated-value">{step5Values.f1Score}</span>
                    <span className="metric-label">F1-Score</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Context */}
        <div className="academic-context">
          <div className="context-divider"></div>
          <div className="hero-intro">
 <div className="hero-intro">
  <p className="intro-text">
    How does Netflix know what you will watch next? How does a self driving car distinguish between a pedestrian and a lamppost? How does your phone recognize your face in the dark? 
    <br /><br />
    At the heart of these wonders lies <span className="highlight">classification</span> — machine learning's superpower to make sense of the world. 
    <br /><br />
    And the frontier keeps expanding: detecting <span className="bold">AI generated content</span>, spotting <span className="bold">deepfake videos</span>, predicting <span className="bold">disease outbreaks</span> from wearables, even helping robots understand <span className="bold">human emotion</span>. Each breakthrough starts with the same fundamental question: "What is this?"
    <br /><br />
    This platform pulls back the curtain, transforming how sensors see your movements into how algorithms understand your activities. 
    <br /><br />
    Go from <span className="bold">how does it know?</span> to <span className="bold">now I can build it myself</span> — in real time, with real data, and zero black boxes.
  </p>
  <p className="intro-cta">
    The classification problem never ends. It evolves. From recognizing swimming strokes today to diagnosing movement disorders tomorrow. Start exploring where data meets intelligence, and where today's learning becomes tomorrow's breakthrough.
  </p>
</div>
</div>
          <div className="context-divider"></div>
          
          <p className="context-tagline">
             <div className="hero-intro">
  <p className="intro-text">
    This platform demonstrates the end to end machine learning workflow for Human Activity Recognition, from sensor data collection to real time classification. Built for the Intelligent Systems program at Novia University of Applied Sciences.
  </p>
</div>
          </p>
        </div>

        <style jsx>{`
          .hero-section {
            padding-top: 80px;
            text-align: center;
            background: linear-gradient(180deg, #0a0e1a 0%, #0f1323 100%);
          }
          
          .hero-title-wrapper {
            margin-bottom: 60px;
          }
          
          .hero-main-title {
            font-size: 3.5rem;
            font-weight: 800;
            margin-bottom: 12px;
            background: linear-gradient(135deg, #FFD700, #3B82F6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            letter-spacing: -0.5px;
          }
          
          .hero-icon {
            margin-right: 15px;
          }
          
          .hero-subtitle {
            font-size: 1.2rem;
            color: rgba(255, 255, 255, 0.8);
            font-weight: 400;
            letter-spacing: 0.5px;
            margin-bottom: 20px;
          }
          
          /* Pipeline Container */
          .pipeline-container {
            position: relative;
            max-width: 1400px;
            margin: 0 auto 80px;
            padding: 0 20px;
          }
          
          .pipeline-line {
            position: absolute;
            top: 40px;
            left: 50px;
            right: 50px;
            height: 3px;
            background: linear-gradient(90deg, 
              rgba(255, 215, 0, 0.3),
              rgba(59, 130, 246, 0.3),
              rgba(16, 185, 129, 0.3),
              rgba(139, 92, 246, 0.3),
              rgba(239, 68, 68, 0.3)
            );
            border-radius: 3px;
            overflow: hidden;
          }
          
          .flow-animation {
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, 
              transparent,
              rgba(255, 255, 255, 0.6),
              transparent
            );
            animation: flow 3s linear infinite;
          }
          
          @keyframes flow {
            0% {
              left: -100%;
            }
            100% {
              left: 100%;
            }
          }
          
          /* Pipeline Steps */
          .pipeline-step {
            position: relative;
            display: inline-block;
            vertical-align: top;
            width: 20%;
            min-height: 300px;
            padding: 0 10px;
          }
          
          .step-marker {
            position: relative;
            width: 80px;
            height: 80px;
            margin: 0 auto 20px;
          }
          
          .marker-circle {
            width: 100%;
            height: 100%;
            background: rgba(15, 20, 35, 0.9);
            border: 3px solid;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            z-index: 2;
          }
          
          .step-1 .marker-circle {
            border-color: #FFD700;
            box-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
          }
          
          .step-2 .marker-circle {
            border-color: #3B82F6;
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          
          .step-3 .marker-circle {
            border-color: #10B981;
            box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
          }
          
          .step-4 .marker-circle {
            border-color: #8B5CF6;
            box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
          }
          
          .step-5 .marker-circle {
            border-color: #EF4444;
            box-shadow: 0 0 20px rgba(239, 68, 68, 0.3);
          }
          
          .marker-pulse {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border: 2px solid;
            border-radius: 50%;
            animation: pulse 2s ease-out infinite;
          }
          
          .step-1 .marker-pulse {
            border-color: #FFD700;
          }
          
          .step-2 .marker-pulse {
            border-color: #3B82F6;
          }
          
          .step-3 .marker-pulse {
            border-color: #10B981;
          }
          
          .step-4 .marker-pulse {
            border-color: #8B5CF6;
          }
          
          .step-5 .marker-pulse {
            border-color: #EF4444;
          }
          
          @keyframes pulse {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            100% {
              transform: scale(1.3);
              opacity: 0;
            }
          }
          
          .marker-icon {
            font-size: 32px;
          }
          
          .step-card {
            background: rgba(15, 20, 35, 0.8);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            padding: 20px;
            backdrop-filter: blur(10px);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s ease;
          }
          
          .step-card:hover {
            transform: translateY(-5px);
          }
          
          .step-title {
            color: white;
            font-size: 1.1rem;
            font-weight: 700;
            margin-bottom: 15px;
            text-align: center;
          }
          
          /* Animated Value Styles */
          .animated-value {
            display: inline-block;
            position: relative;
            animation: valueChange 0.5s ease-out;
          }
          
          .animated-emoji {
            display: inline-block;
            animation: emojiChange 0.5s ease-out;
          }
          
          @keyframes valueChange {
            0% {
              opacity: 0;
              transform: translateY(5px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes emojiChange {
            0% {
              opacity: 0;
              transform: scale(0.5) rotate(-10deg);
            }
            100% {
              opacity: 1;
              transform: scale(1) rotate(0);
            }
          }
          
          /* Step 1: Signal Visualization */
          .signal-visualization {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }
          
          .signal-line {
            height: 60px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 8px;
            position: relative;
            overflow: hidden;
          }
          
          .signal-wave {
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, 
              transparent,
              #FFD700,
              transparent
            );
            animation: waveMove 2s linear infinite;
          }
          
          @keyframes waveMove {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
          
          .signal-stats {
            display: flex;
            justify-content: space-between;
            gap: 10px;
          }
          
          .stat-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
          }
          
          .stat-emoji {
            font-size: 20px;
          }
          
          .stat-value {
            color: #FFD700;
            font-weight: 700;
            font-size: 0.9rem;
          }
          
          .stat-label {
            color: rgba(255, 255, 255, 0.6);
            font-size: 0.75rem;
          }
          
          /* Step 2: Stats Grid */
          .stats-grid {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          
          .stat-card {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 8px;
            padding: 12px;
          }
          
          .stat-header {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 8px;
          }
          
          .stat-name {
            color: white;
            font-size: 0.85rem;
            font-weight: 600;
          }
          
          .stat-values {
            display: flex;
            flex-direction: column;
            gap: 4px;
          }
          
          .value-row {
            display: flex;
            justify-content: space-between;
            font-size: 0.8rem;
            color: rgba(255, 255, 255, 0.8);
          }
          
          .value-row .value {
            color: #3B82F6;
            font-weight: 600;
          }
          
          /* Step 3: Features Grid */
          .features-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }
          
          .feature-item {
            display: flex;
            align-items: center;
            gap: 8px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 8px;
            padding: 10px;
          }
          
          .feature-emoji {
            font-size: 20px;
          }
          
          .feature-details {
            display: flex;
            flex-direction: column;
          }
          
          .feature-name {
            color: rgba(255, 255, 255, 0.7);
            font-size: 0.75rem;
          }
          
          .feature-value {
            color: #10B981;
            font-weight: 700;
            font-size: 0.9rem;
          }
          
          /* Step 4: Neural Network */
          .model-visualization {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
          }
          
          .neural-network {
            display: flex;
            align-items: center;
            gap: 15px;
          }
          
          .neuron-layer {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          
          .neuron {
            width: 16px;
            height: 16px;
            background: linear-gradient(135deg, #8B5CF6, #7C3AED);
            border-radius: 50%;
            animation: neuronGlow 2s ease-in-out infinite;
          }
          
          @keyframes neuronGlow {
            0%, 100% {
              opacity: 0.7;
              box-shadow: 0 0 5px #8B5CF6;
            }
            50% {
              opacity: 1;
              box-shadow: 0 0 15px #8B5CF6;
            }
          }
          
          .connections {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          
          .connection {
            width: 30px;
            height: 2px;
            background: linear-gradient(90deg, #8B5CF6, transparent);
            animation: connectionFlow 2s linear infinite;
          }
          
          @keyframes connectionFlow {
            0% {
              background: linear-gradient(90deg, #8B5CF6, transparent);
            }
            100% {
              background: linear-gradient(90deg, transparent, #8B5CF6);
            }
          }
          
          .prediction-result {
            text-align: center;
          }
          
          .prediction-label {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            margin-bottom: 5px;
          }
          
          .prediction-emoji {
            font-size: 24px;
          }
          
          .prediction-text {
            color: white;
            font-weight: 700;
            font-size: 1rem;
          }
          
          .confidence-score {
            color: rgba(255, 255, 255, 0.7);
            font-size: 0.85rem;
          }
          
          .score-value {
            color: #8B5CF6;
            font-weight: 700;
          }
          
          /* Step 5: Analytics Grid */
          .analytics-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }
          
          .metric-card {
            display: flex;
            align-items: center;
            gap: 10px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 8px;
            padding: 10px;
          }
          
          .metric-emoji {
            font-size: 20px;
          }
          
          .metric-details {
            display: flex;
            flex-direction: column;
          }
          
          .metric-value {
            color: #EF4444;
            font-weight: 700;
            font-size: 0.9rem;
          }
          
          .metric-label {
            color: rgba(255, 255, 255, 0.6);
            font-size: 0.75rem;
          }
          
          /* Academic Context */
          .academic-context {
            margin-top: 60px;
            padding: 30px 0;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .context-divider {
            height: 1px;
            background: linear-gradient(90deg, 
              transparent, 
              rgba(255, 215, 0, 0.5), 
              transparent
            );
            margin: 20px auto;
            max-width: 400px;
          }
          
          .context-title {
            font-size: 1.3rem;
            color: white;
            margin-bottom: 8px;
            font-weight: 600;
          }
          
          .context-subtitle {
            font-size: 1rem;
            color: rgba(255, 255, 255, 0.7);
            margin-bottom: 20px;
          }
          
          .context-tagline {
            font-size: 1.1rem;
            color: white;
            font-style: italic;
            max-width: 600px;
            margin: 0 auto;
            padding: 15px;
            background: rgba(255, 215, 0, 0.1);
            border-radius: 8px;
            border-left: 3px solid #FFD700;
          }
          
          /* Responsive */
          @media (max-width: 1200px) {
            .pipeline-step {
              width: 100%;
              display: block;
              margin-bottom: 40px;
            }
            
            .pipeline-line {
              display: none;
            }
            
            .hero-main-title {
              font-size: 2.5rem;
            }
          }
          
          @media (max-width: 768px) {
            .hero-main-title {
              font-size: 2rem;
            }
            
            .context-title {
              font-size: 1.1rem;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default HeroSection;