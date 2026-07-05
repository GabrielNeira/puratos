import React from 'react';

const WelcomeScreen = ({ onStart }) => {
  return (
    <div className="screen">
      {/* Background layers */}
      <div className="welcome-bg" />
      <div className="welcome-bg-pattern" />

      {/* Header */}
      <div className="top-header">
        <div className="tt-logo-container">
          <img src="/unicorn-white.png" className="tt-unicorn-icon" alt="Puratos Unicorn" />
          <div className="tt-brand-name">
            <span className="tt-brand-taste">taste</span>
            <span className="tt-brand-tomorrow">Tomorrow</span>
          </div>
        </div>
        <div className="header-badge">Chile 2026</div>
      </div>

      {/* Two-column body */}
      <div className="welcome-content">
        <div className="welcome-inner">

          {/* LEFT — headline + CTAs */}
          <div className="welcome-left">
            <p className="welcome-eyebrow">by Puratos · Evento exclusivo</p>
            <h1 className="welcome-headline">
              Descubre
              <span className="accent">tu mejor</span>
              opción
            </h1>
            <p className="welcome-subtitle">
              Responde 3 preguntas y Purabot te encontrará el producto
              perfecto para ti hoy.
            </p>

            <p className="cta-label">¿Qué buscas hoy?</p>
            <div className="cta-buttons">
              <button className="cta-btn cta-btn-primary" onClick={onStart}>
                <div className="cta-btn-icon">🧁</div>
                <span className="cta-btn-label">Tengo un antojo</span>
                <span className="cta-btn-arrow">›</span>
              </button>
              <button className="cta-btn cta-btn-secondary" onClick={onStart}>
                <div className="cta-btn-icon">🍃</div>
                <span className="cta-btn-label">Quiero algo saludable</span>
                <span className="cta-btn-arrow">›</span>
              </button>
              <button className="cta-btn cta-btn-tertiary" onClick={onStart}>
                <div className="cta-btn-icon">⚖️</div>
                <span className="cta-btn-label">Busco balance</span>
                <span className="cta-btn-arrow">›</span>
              </button>
            </div>
          </div>

          {/* RIGHT — Purabot robot */}
          <div className="welcome-right">
            <div className="purabot-container">
              <img src="/robot.png" className="purabot-img" alt="Purabot" />
              <div className="purabot-shadow" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
