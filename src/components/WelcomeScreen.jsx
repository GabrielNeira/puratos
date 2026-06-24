import React from 'react';

const WelcomeScreen = ({ onStart }) => {
  return (
    <div className="screen">
      <div className="top-header">
        <div className="puratos-logo-text">Puratos</div> {/* Logo placeholder */}
      </div>
      
      <div className="welcome-content">
        <h2 className="welcome-greeting">Hola, soy Purabot 👋</h2>
        <p className="welcome-subgreeting">Estoy aquí para ayudarte a encontrar tu opción ideal.</p>
        
        <img src="/robot.png" className="robot-image-huge" alt="Purabot" />
        
        <div className="welcome-form-overlay">
          <h1 className="title-main">¿Quieres disfrutar...<br/>pero de forma más<br/>inteligente?</h1>
          
          <div className="pill-buttons">
            <button className="btn-pill btn-burgundy" onClick={onStart}>
              <span className="icon">🧁</span> Tengo antojo
            </button>
            <button className="btn-pill btn-orange" onClick={onStart}>
              <span className="icon">🍃</span> Quiero algo saludable
            </button>
            <button className="btn-pill btn-yellow" onClick={onStart}>
              <span className="icon">⚖️</span> Quiero balance
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
