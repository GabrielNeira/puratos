import React, { useState, useEffect } from 'react';
import logoImg from '/tt-logo-white.png';

const WelcomeScreen = ({ onStart }) => {
  const [isSplash, setIsSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplash(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  const handleSkipSplash = () => {
    if (isSplash) {
      setIsSplash(false);
    }
  };

  return (
    <div 
      className={`screen welcome-screen ${isSplash ? 'state-splash' : 'state-welcome'}`}
      onClick={handleSkipSplash}
    >
      {/* Background brand decorative shapes */}
      <div className="welcome-bg-glow" />

      {/* Splash View Container */}
      <div className="splash-view-container">
        <div className="welcome-header-logo animate-fade-in">
          <img src={logoImg} className="puratos-logo-img" alt="Puratos" />
          <p className="welcome-eyebrow">Food Innovation for Good</p>
        </div>
        
        <div className="splash-content">
          <h1 className="welcome-title animate-slide-up">
            SMART<br />
            INDULGENCE<br />
            ADVISOR
          </h1>
          <p className="welcome-subtitle animate-slide-up-delay">
            Descubramos juntos qué tipo de consumidor eres y cuál es tu mejor opción.
          </p>
        </div>
        
        <div className="splash-footer animate-fade-in-delayed">
          <span className="splash-tap-prompt">Toca la pantalla para comenzar</span>
        </div>
      </div>

      {/* Welcome Menu View Container */}
      <div className="welcome-view-container">
        <div className="welcome-header-logo">
          <img src={logoImg} className="puratos-logo-img" alt="Puratos" />
          <p className="welcome-eyebrow">Food Innovation for Good</p>
        </div>

        <div className="welcome-menu-content">
          <h2 className="welcome-prompt-title">¿QUÉ ANTOJO TIENES HOY?</h2>
          <p className="welcome-prompt-subtitle">Descubre tu opción ideal en base a tus preferencias</p>
          
          <div className="welcome-cta-list">
            <button className="welcome-cta-btn" onClick={(e) => { e.stopPropagation(); onStart(); }}>
              <span className="welcome-cta-text">Tengo antojo</span>
              <span className="welcome-cta-arrow">›</span>
            </button>

            <button className="welcome-cta-btn" onClick={(e) => { e.stopPropagation(); onStart(); }}>
              <span className="welcome-cta-text">Quiero algo saludable</span>
              <span className="welcome-cta-arrow">›</span>
            </button>

            <button className="welcome-cta-btn" onClick={(e) => { e.stopPropagation(); onStart(); }}>
              <span className="welcome-cta-text">Quiero balance</span>
              <span className="welcome-cta-arrow">›</span>
            </button>
          </div>
        </div>

        <div className="welcome-footer-brand">
          Taste Tomorrow Chile 2026
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
