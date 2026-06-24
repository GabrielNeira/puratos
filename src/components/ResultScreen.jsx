import React from 'react';

const ResultScreen = ({ answers, onRestart }) => {
  let profile = {
    type: "Balanced Energy",
    product: "Muffin funcional",
    message: "Te da saciedad y energía sin exceso.",
    booth: "Disfrutar Mejor",
    badgeClass: "orange",
    productImg: "🧁"
  };

  // Logic based on requirements
  if (answers.includes('energia') || answers.includes('normal')) {
    profile = {
      type: "Balanced Energy",
      product: "Muffin funcional",
      message: "Te da saciedad y energía sin exceso.",
      booth: "Disfrutar Mejor",
      badgeClass: "orange",
      productImg: "🧁"
    };
  }

  if (answers.includes('poco') || answers.includes('natural') || answers.includes('bajo_azucar')) {
    profile = {
      type: "Light & Smart",
      product: "Snack pequeño clean label",
      message: "Perfecto para comer menos pero mejor.",
      booth: "Disfrutar Mejor",
      badgeClass: "orange",
      productImg: "🍪"
    };
  }

  if (answers.includes('indulgencia') || answers.includes('snacks')) {
    profile = {
      type: "Smart Indulgent",
      product: "Mini brownie protein + fiber",
      message: "Mismo placer, más nutrición por bocado.",
      booth: "Disfrutar Mejor",
      badgeClass: "", // Defaults to burgundy
      productImg: "🍫"
    };
  }

  return (
    <div className="screen" style={{ justifyContent: 'space-between' }}>
      <div className="top-header">
        <div className="puratos-logo-text" style={{fontSize: '1.5rem'}}>Puratos</div>
      </div>

      <div className="result-content">
        <h2 className="title-main" style={{fontSize: '1.8rem', marginBottom: '1.5rem'}}>Tu mejor opción es...</h2>
        
        <div className={`result-badge ${profile.badgeClass}`}>
          <span style={{background: 'white', borderRadius: '50%', padding: '2px', display: 'flex'}}>✅</span> 
          {profile.type}
        </div>
        
        <div className="result-card-inner">
          <div className="result-text-block">
            <h3 className="result-product">{profile.product}</h3>
            <p className="result-desc">{profile.message}</p>
          </div>
          <div className="result-product-img">{profile.productImg}</div>
        </div>

        <div className="location-bar">
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
            <span style={{fontSize: '0.9rem', color: 'var(--text-light)'}}>Encuéntralo en la estación 📍</span>
            <span style={{color: 'var(--puratos-burgundy)', fontWeight: '800', fontSize: '1.2rem'}}>{profile.booth}</span>
          </div>
          <img src="/robot.png" style={{width: '60px', height: '60px', objectFit: 'contain', marginLeft: 'auto'}} alt="Purabot" />
        </div>

        <div style={{display: 'flex', gap: '1rem', width: '100%', maxWidth: '500px', marginTop: '2rem'}}>
          <button className="btn-pill btn-burgundy" style={{flex: 1, padding: '1rem'}} onClick={() => alert("Imprimiendo...")}>
            🖨️ Imprimir
          </button>
          <button className="btn-pill btn-orange" style={{flex: 1, padding: '1rem'}} onClick={() => alert("Mostrando QR...")}>
            📱 QR
          </button>
        </div>

        <button className="restart-btn" onClick={onRestart}>
          Volver a empezar
        </button>
      </div>
    </div>
  );
};

export default ResultScreen;
