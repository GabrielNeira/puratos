import React from 'react';
import robotImg from '/robot.png';
import logoImg from '/tt-logo-white.png';

const WelcomeScreen = ({ onStart }) => {
  return (
    <div className="screen welcome-screen">

      {/* Header */}
      <div className="welcome-header">
        <div className="puratos-logo-wrap">
          <img
            src={logoImg}
            className="puratos-logo-img"
            alt="Puratos"
            style={{
              filter: 'brightness(0) saturate(100%) invert(10%) sepia(90%) saturate(700%) hue-rotate(330deg) brightness(85%)',
            }}
          />
        </div>
      </div>

      {/* Body — dos columnas */}
      <div className="welcome-body">

        {/* Columna izquierda: texto + botones */}
        <div className="welcome-left">
          <p className="welcome-eyebrow">Food Innovation for Good</p>

          <h1 className="welcome-title">
            Smart<br />
            Indulgence<br />
            Advisor
          </h1>

          <p className="welcome-subtitle">
            Descubramos juntos qué tipo de consumidor eres y cuál es tu mejor opción.
          </p>

          <div className="welcome-cta-list">

            <button className="welcome-cta-btn" onClick={onStart}>
              <div className="welcome-cta-icon">
                {/* Ícono cupcake / antojo */}
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C9.2 2 7 4.2 7 7c0 .4.1.8.1 1.2C5.3 8.7 4 10.2 4 12v1h16v-1c0-1.8-1.3-3.3-3.1-3.8.1-.4.1-.8.1-1.2C17 4.2 14.8 2 12 2zm0 2c1.7 0 3 1.3 3 3 0 .3-.1.7-.1 1H9.1c-.1-.3-.1-.7-.1-1 0-1.7 1.3-3 3-3zM5 15v1c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-1H5z"/>
                </svg>
              </div>
              <span className="welcome-cta-text">Tengo antojo</span>
              <span className="welcome-cta-arrow">›</span>
            </button>

            <button className="welcome-cta-btn" onClick={onStart}>
              <div className="welcome-cta-icon">
                {/* Ícono hoja / saludable */}
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-8 2 0-4-5-5-5-5s2 4 0 8z"/>
                </svg>
              </div>
              <span className="welcome-cta-text">Quiero algo saludable</span>
              <span className="welcome-cta-arrow">›</span>
            </button>

            <button className="welcome-cta-btn" onClick={onStart}>
              <div className="welcome-cta-icon">
                {/* Ícono balance */}
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3L1 9l4 2.18V16h2v-3.82l2 1.09V17c0 2.76 2.24 5 5 5s5-2.24 5-5v-3.73l2-1.09V16h2V11.18L23 9 12 3zm0 14c-1.66 0-3-1.34-3-3v-1.95l3 1.63 3-1.63V14c0 1.66-1.34 3-3 3z"/>
                </svg>
              </div>
              <span className="welcome-cta-text">Quiero balance</span>
              <span className="welcome-cta-arrow">›</span>
            </button>

          </div>
        </div>

        {/* Columna derecha: robot */}
        <div className="welcome-right">
          <img src={robotImg} className="welcome-robot-img" alt="Purabot" />
        </div>

      </div>
    </div>
  );
};

export default WelcomeScreen;
