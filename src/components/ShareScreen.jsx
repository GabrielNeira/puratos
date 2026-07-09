import React, { useState } from 'react';
import logoImg from '/tt-logo-white.png';

const ShareScreen = ({ profileName, productName, message, onFinish }) => {
  const [activeModal, setActiveModal] = useState(null); // 'print' | 'qr' | 'coupon' | null

  const handlePrint = () => {
    setActiveModal('print');
    // Give a short delay to render the printable area, then print
    setTimeout(() => {
      window.print();
    }, 500);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="screen share-screen">
      {/* Printable Receipt Area (Only visible when printing) */}
      <div className="print-only-receipt">
        <div className="receipt-header">
          <h3>TASTE TOMORROW CHILE 2026</h3>
          <p>Food Innovation for Good</p>
        </div>
        <div className="receipt-divider">--------------------------------</div>
        <div className="receipt-body">
          <p className="receipt-label">Tu Perfil:</p>
          <h4 className="receipt-value">{profileName}</h4>
          <p className="receipt-label">Producto Recomendado:</p>
          <h4 className="receipt-value">{productName}</h4>
          <p className="receipt-text">{message}</p>
          <p className="receipt-station">Búscalo en la estación: "Disfrutar Mejor"</p>
        </div>
        <div className="receipt-divider">--------------------------------</div>
        <div className="receipt-footer">
          <p>¡Gracias por participar!</p>
          <p>Puratos Chile</p>
        </div>
      </div>

      {/* Main UI Header */}
      <div className="share-header">
        <div className="puratos-logo-wrap-red">
          <img src={logoImg} className="puratos-logo-img-red" alt="Puratos" />
          <p className="quiz-eyebrow">Food Innovation for Good</p>
        </div>
      </div>

      {/* Main UI Body */}
      <div className="share-body animate-fade-in">
        <h2 className="share-title">LLEVA TU RECOMENDACIÓN</h2>
        <h3 className="share-subtitle">CONTIGO</h3>

        <div className="share-options-list">
          {/* Card: Imprimir Ticket */}
          <button className="share-option-card" onClick={handlePrint}>
            <div className="share-card-icon">🖨️</div>
            <div className="share-card-text">
              <div className="share-card-title">Imprimir Ticket</div>
              <div className="share-card-desc">Obtén tu receta física y código impreso</div>
            </div>
            <span className="share-card-chevron">›</span>
          </button>

          {/* Card: Ver QR */}
          <button className="share-option-card" onClick={() => setActiveModal('qr')}>
            <div className="share-card-icon">📱</div>
            <div className="share-card-text">
              <div className="share-card-title">Ver Código QR</div>
              <div className="share-card-desc">Escanea y guarda la info en tu celular</div>
            </div>
            <span className="share-card-chevron">›</span>
          </button>

          {/* Card: Obtener Cupón */}
          <button className="share-option-card" onClick={() => setActiveModal('coupon')}>
            <div className="share-card-icon">🏷️</div>
            <div className="share-card-text">
              <div className="share-card-title">Obtener Cupón</div>
              <div className="share-card-desc">Descuento exclusivo en tu producto</div>
            </div>
            <span className="share-card-chevron">›</span>
          </button>
        </div>

        {/* Thank You Note */}
        <div className="share-thanks-container">
          <p className="share-thanks-eyebrow">Gracias por elegir</p>
          <p className="share-thanks-brand">Disfrutar Mejor</p>
        </div>

        {/* Finish CTA */}
        <button className="share-finish-btn" onClick={onFinish}>
          Finalizar
        </button>
      </div>

      {/* MODALS */}
      {activeModal && (
        <div className="share-modal-overlay" onClick={closeModal}>
          <div className="share-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="share-modal-close" onClick={closeModal}>×</button>

            {/* QR Modal */}
            {activeModal === 'qr' && (
              <div className="modal-inner qr-modal">
                <h4>TU RECOMENDACIÓN EN TU CELULAR</h4>
                <p>Escanea el código QR para ver la ficha técnica y beneficios de tu producto.</p>
                <div className="qr-code-wrap">
                  {/* Mock beautiful SVG QR code */}
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100" height="100" fill="white" />
                    <path d="M10 10h20v20H10zm5 5v10h10V15zm55-5h20v20H70zm5 5v10h10V15zM10 70h20v20H10zm5 5v10h10V75zm35-25h10v10H50zm10 10h10v10H60zm-20 0h10v10H40zm20 10h10v10H60zm-10 10h10v10H50zm-20-20h10v10H30zm10-10h10v10H40zm40 20h10v20H80v-10H70v-10zm-10 10h10v10H70zm10-20h10v10H80z" fill="#cc092f" />
                  </svg>
                </div>
                <div className="modal-profile-info">
                  <strong>{profileName}</strong>
                  <span>{productName}</span>
                </div>
              </div>
            )}

            {/* Coupon Modal */}
            {activeModal === 'coupon' && (
              <div className="modal-inner coupon-modal">
                <h4>CUPÓN DE DESCUENTO EXCLUSIVO</h4>
                <p>Presenta este cupón en caja para obtener una muestra de degustación o descuento especial.</p>
                <div className="coupon-ticket-wrap">
                  <div className="coupon-discount">100% OFF</div>
                  <div className="coupon-code">CODE: TT-2026-CHILE-{profileName.split(' ')[0].toUpperCase()}</div>
                  <div className="coupon-barcode">
                    <div className="barcode-line w-2"></div>
                    <div className="barcode-line w-1"></div>
                    <div className="barcode-line w-4"></div>
                    <div className="barcode-line w-2"></div>
                    <div className="barcode-line w-3"></div>
                    <div className="barcode-line w-1"></div>
                    <div className="barcode-line w-2"></div>
                    <div className="barcode-line w-4"></div>
                  </div>
                </div>
                <div className="modal-profile-info">
                  <strong>{productName}</strong>
                  <span>Válido solo durante el Taste Tomorrow Chile 2026</span>
                </div>
              </div>
            )}

            {/* Print Modal Overlay (Simulated print feedback) */}
            {activeModal === 'print' && (
              <div className="modal-inner print-modal">
                <div className="print-loader-icon">🖨️</div>
                <h4>IMPRIMIENDO TICKET...</h4>
                <p>Tu ticket con la recomendación está siendo impreso. Por favor retíralo del dispensador.</p>
                <button className="share-modal-btn" onClick={closeModal}>Aceptar</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShareScreen;
