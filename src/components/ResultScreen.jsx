import React from 'react';
import logoImg from '/tt-logo-white.png';
import imgBrownie from '/Brownie.png';
import imgMuffin from '/Queque.png';
import imgBarrita from '/Barrita_de_cereal.png';

/* Checkmark SVG para el badge */
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
  </svg>
);

/* Pin location icon */
const PinIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

/* Perfiles */
const PROFILES = {
  balanced: {
    key:     'balanced',
    type:    'Balanced Energy',
    product: 'Muffin Funcional',
    message: 'Te da saciedad y energía sin exceso.',
    booth:   'Disfrutar Mejor',
    image:   imgMuffin,
  },
  light: {
    key:     'light',
    type:    'Light & Smart',
    product: 'Snack Pequeño Clean Label',
    message: 'Perfecto para comer menos pero mejor.',
    booth:   'Disfrutar Mejor',
    image:   imgBarrita,
  },
  indulgent: {
    key:     'indulgent',
    type:    'Smart Indulgent',
    product: 'Mini Brownie Protein & Fiber',
    message: 'Mismo placer, más nutrición por bocado.',
    booth:   'Disfrutar Mejor',
    image:   imgBrownie,
  },
};

const ResultScreen = ({ profile: profileKey, onContinue }) => {
  const profile = PROFILES[profileKey] || PROFILES.balanced;
  const themeClass = `theme-${profile.key}`;

  return (
    <div className={`screen result-screen ${themeClass}`}>
      {/* Header */}
      <div className="result-header">
        <div className="puratos-logo-wrap-red">
          <img src={logoImg} className="puratos-logo-img-red" alt="Puratos" />
          <p className="quiz-eyebrow">Food Innovation for Good</p>
        </div>
      </div>

      {/* Body */}
      <div className="result-body animate-fade-in">
        
        {/* Izquierda — texto */}
        <div className="result-left">
          <p className="result-eyebrow">Tu mejor opción es...</p>

          {/* Badge pill */}
          <div className="result-badge">
            <div className="result-badge-check">
              <CheckIcon />
            </div>
            <span className="result-badge-text">{profile.type}</span>
          </div>

          <h2 className="result-product-name">{profile.product}</h2>
          <p className="result-desc">{profile.message}</p>

          <div className="result-location">
            <span className="result-location-label">
              <PinIcon />
              Encuéntralo en la estación:
            </span>
            <span className="result-location-value">{profile.booth}</span>
          </div>

          <button className="result-continue-btn" onClick={onContinue}>
            Continuar
          </button>
        </div>

        {/* Derecha — imagen del producto */}
        <div className="result-right">
          <div className="result-product-img-wrap">
            <img
              src={profile.image}
              className="result-product-img"
              alt={profile.product}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ResultScreen;
