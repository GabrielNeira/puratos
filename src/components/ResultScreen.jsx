import React from 'react';
import logoImg    from '/tt-logo-white.png';
import imgMuffin  from '/prod-muffin.jpg';
import imgBread   from '/prod-bread.jpg';
import imgChoco   from '/prod-choco.jpg';

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
    type:    'Balanced Energy',
    product: 'Muffin Funcional',
    message: 'Te da saciedad y energía sin exceso. Perfecto para tu día en el evento.',
    booth:   'Disfrutar Mejor',
    image:   imgMuffin,
  },
  light: {
    type:    'Light & Smart',
    product: 'Snack Clean Label',
    message: 'Snack pequeño clean label. Perfecto para comer menos pero mejor.',
    booth:   'Disfrutar Mejor',
    image:   imgBread,
  },
  indulgent: {
    type:    'Smart Indulgent',
    product: 'Mini Brownie Protein + Fiber',
    message: 'Mismo placer, más nutrición por bocado.',
    booth:   'Disfrutar Mejor',
    image:   imgChoco,
  },
};

const ResultScreen = ({ profile: profileKey, onRestart }) => {
  const profile = PROFILES[profileKey] || PROFILES.balanced;

  return (
    <div className="screen result-screen">

      {/* Header */}
      <div className="result-header">
        <img
          src={logoImg}
          className="puratos-logo-img-red"
          alt="Puratos"
          style={{
            height: 'clamp(26px, 3.2vh, 40px)',
            width: 'auto',
            objectFit: 'contain',
            filter: 'brightness(0) saturate(100%) invert(10%) sepia(90%) saturate(700%) hue-rotate(330deg) brightness(85%)',
          }}
        />
      </div>

      {/* Body */}
      <div className="result-body">

        {/* Izquierda — texto */}
        <div className="result-left">
          <p className="result-eyebrow">Tu mejor opción es...</p>

          {/* Badge pill rojo */}
          <div className="result-badge">
            <div className="result-badge-check">
              <CheckIcon />
            </div>
            {profile.type}
          </div>

          <h2 className="result-product-name">{profile.product}</h2>
          <p className="result-desc">{profile.message}</p>

          <div className="result-location">
            <span className="result-location-label">
              <PinIcon />
              Encuéntralo en la estación
            </span>
            <span className="result-location-value">{profile.booth}</span>
          </div>

          <button className="result-continue-btn" onClick={onRestart}>
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
