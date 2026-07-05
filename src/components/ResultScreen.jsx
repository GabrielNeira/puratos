import React from 'react';

const PROFILES = {
  balanced: {
    type: 'Balanced Energy',
    product: 'Muffin Funcional',
    message: 'Energía sostenida y saciedad sin excesos. La combinación perfecta para tu día en el evento.',
    booth: 'Disfrutar Mejor',
    emoji: '🧁',
  },
  light: {
    type: 'Light & Smart',
    product: 'Snack Clean Label',
    message: 'Pequeño en tamaño, grande en nutrición. Perfecto para comer mejor sin sacrificar sabor.',
    booth: 'Disfrutar Mejor',
    emoji: '🍪',
  },
  indulgent: {
    type: 'Smart Indulgent',
    product: 'Mini Brownie Protein',
    message: 'El mismo placer de siempre, con más proteína y fibra por cada bocado.',
    booth: 'Disfrutar Mejor',
    emoji: '🍫',
  },
};

const ResultScreen = ({ profile: profileKey, onRestart }) => {
  const profile = PROFILES[profileKey] || PROFILES.balanced;

  return (
    <div className="screen">
      {/* Backgrounds */}
      <div className="result-screen-bg">
        <div className="result-screen-bg-gradient" />
        <div className="result-confetti-layer" />
      </div>

      {/* Header */}
      <div className="top-header">
        <div className="tt-logo-container">
          <img src="/unicorn-white.png" className="tt-unicorn-icon" alt="Puratos Unicorn" />
          <div className="tt-brand-name">
            <span className="tt-brand-taste">taste</span>
            <span className="tt-brand-tomorrow">Tomorrow</span>
          </div>
        </div>
        <div className="header-badge">Tu resultado</div>
      </div>

      {/* Two-column body */}
      <div className="result-body">

        {/* LEFT — text info */}
        <div className="result-left">
          <div className="result-profile-badge">
            <span className="dot" />
            {profile.type}
          </div>

          <p className="result-headline">Tu mejor opción es</p>
          <h2 className="result-product-name">{profile.product}</h2>
          <p className="result-desc">{profile.message}</p>

          <div className="result-location-card">
            <div className="result-location-inner">
              <span className="result-location-label">Encuéntralo en la estación</span>
              <span className="result-location-value">📍 {profile.booth}</span>
            </div>
            <div className="result-location-pin">
              <img
                src="/unicorn-white.png"
                style={{ width: '20px', height: '20px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                alt="Puratos"
              />
            </div>
          </div>

          <button className="restart-btn" onClick={onRestart} style={{ marginTop: 'clamp(0.8rem, 1.5vh, 1.5rem)' }}>
            ↩ Volver a empezar
          </button>
        </div>

        {/* RIGHT — emoji product visual */}
        <div className="result-right">
          <div className="result-product-visual">
            <span style={{ position: 'relative', zIndex: 1, filter: 'drop-shadow(0 16px 30px rgba(0,0,0,0.4))' }}>
              {profile.emoji}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ResultScreen;
