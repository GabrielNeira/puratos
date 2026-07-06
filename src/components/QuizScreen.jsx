import React, { useState } from 'react';

/* ── SVG icons inline ─────────────────────────────────────── */
const IconEnergy = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
  </svg>
);

const IconSatiety = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-5.44-6.19-6-9.52-6-3.32 0-9.51.56-9.51 6h19.03z"/>
  </svg>
);

const IconIndulgence = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

const IconFew = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
  </svg>
);

const IconNormal = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/>
  </svg>
);

const IconSnack = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-5.44-6.19-6-9.52-6-3.32 0-9.51.56-9.51 6h19.03z"/>
  </svg>
);

const IconProtein = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.57 14.86L22 13.43 20.57 12l-1 1-1.06-1.06 2.5-2.5-1.5-1.5L18 9.93l-1-1 1.43-1.43L17 6.07l-2.5 2.5-1.06-1.06L15 6 12.93 3.93 11.5 5.36 10.5 4.36 11.93 2.93 10.5 1.5 8 4l1.06 1.06L8 6.07 6.07 4.14 4.64 5.57 7.14 8.07 8.2 7.01l1.06 1.06-1.43 1.43 1.43 1.43 1-1 1.06 1.06-2.5 2.5 1.5 1.5 1.06-1.06 1 1-1.43 1.43 1.43 1.43 2.5-2.5 1.06 1.06-1.06 1.06 1.5 1.5 2.5-2.5-1.06-1.06 1-1z"/>
  </svg>
);

const IconNatural = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-8 2 0-4-5-5-5-5s2 4 0 8z"/>
  </svg>
);

const IconLowSugar = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2a5 5 0 1 0 0 10A5 5 0 0 0 12 2zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM2 20c0-4 4-7 10-7s10 3 10 7H2z"/>
  </svg>
);

/* ── Preguntas ────────────────────────────────────────────── */
const questions = [
  {
    title: '1. ¿Qué buscas hoy?',
    options: [
      { id: 'energia',     label: 'Energía',      sublabel: 'Activo y concentrado',   Icon: IconEnergy },
      { id: 'saciedad',    label: 'Saciedad',     sublabel: 'Alimentarme bien',        Icon: IconSatiety },
      { id: 'indulgencia', label: 'Indulgencia',  sublabel: 'Un premio merecido',      Icon: IconIndulgence },
    ],
  },
  {
    title: '2. ¿Cómo comes hoy?',
    options: [
      { id: 'poco',   label: 'Poco pero frecuente', sublabel: 'Pequeñas porciones',     Icon: IconFew },
      { id: 'normal', label: 'Normal',               sublabel: 'Como de costumbre',      Icon: IconNormal },
      { id: 'snacks', label: 'Solo snacks',          sublabel: 'Picoteo durante el día', Icon: IconSnack },
    ],
  },
  {
    title: '3. ¿Qué valoras más?',
    options: [
      { id: 'proteina',    label: 'Proteína',    sublabel: 'Alto en proteínas',      Icon: IconProtein },
      { id: 'natural',     label: 'Natural',     sublabel: 'Ingredientes limpios',   Icon: IconNatural },
      { id: 'bajo_azucar', label: 'Bajo en azúcar', sublabel: 'Sin excesos de dulce', Icon: IconLowSugar },
    ],
  },
];

/* ── Component ───────────────────────────────────────────── */
const QuizScreen = ({ onComplete }) => {
  const [current, setCurrent]   = useState(0);
  const [answers, setAnswers]   = useState([]);
  const [animating, setAnimating] = useState(false);

  const handleOption = (id) => {
    if (animating) return;
    setAnimating(true);
    const next = [...answers, id];
    setTimeout(() => {
      if (current < questions.length - 1) {
        setAnswers(next);
        setCurrent(current + 1);
        setAnimating(false);
      } else {
        onComplete(next);
      }
    }, 260);
  };

  const q = questions[current];

  return (
    <div className="screen quiz-screen" key={current}>

      {/* Header */}
      <div className="quiz-header">
        <img src="/tt-logo-white.png" className="puratos-logo-img-red" alt="Puratos"
          style={{ filter: 'brightness(0) saturate(100%) invert(10%) sepia(90%) saturate(700%) hue-rotate(330deg) brightness(85%)' }}
        />
      </div>

      {/* Step indicator */}
      <div className="step-indicator">
        {questions.map((_, i) => (
          <React.Fragment key={i}>
            <div className={`step-dot ${i < current ? 'done' : i === current ? 'active' : 'inactive'}`}>
              {i + 1}
            </div>
            {i < questions.length - 1 && (
              <div className={`step-line ${i < current ? 'done' : ''}`} />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Body */}
      <div className="quiz-body">
        <h2 className="quiz-question-title">{q.title}</h2>

        <div className="quiz-options">
          {q.options.map(({ id, label, sublabel, Icon }) => (
            <button
              key={id}
              className="quiz-option"
              onClick={() => handleOption(id)}
              disabled={animating}
            >
              <div className="option-icon">
                <Icon />
              </div>
              <div className="option-text">
                <div className="option-label">{label}</div>
                <div className="option-sublabel">{sublabel}</div>
              </div>
              <span className="option-chevron">›</span>
            </button>
          ))}
        </div>
      </div>

      {/* Footer rojo */}
      <div className="quiz-footer">
        <span className="quiz-footer-label">
          Pregunta {current + 1} de {questions.length}
        </span>
        <img src="/robot.png" className="quiz-footer-robot" alt="" aria-hidden="true" />
      </div>

    </div>
  );
};

export default QuizScreen;
