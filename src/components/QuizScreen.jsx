import React, { useState } from 'react';

const questions = [
  {
    eyebrow: 'Pregunta 1 de 3',
    title: '¿Qué buscas hoy?',
    options: [
      { id: 'energia',     label: 'Energía',      sublabel: 'Activo y concentrado',    icon: '⚡' },
      { id: 'saciedad',    label: 'Saciedad',     sublabel: 'Alimentarme bien',         icon: '🔋' },
      { id: 'indulgencia', label: 'Indulgencia',  sublabel: 'Un premio merecido',       icon: '❤️' },
    ]
  },
  {
    eyebrow: 'Pregunta 2 de 3',
    title: '¿Cómo comes hoy?',
    options: [
      { id: 'poco',    label: 'Poco & frecuente', sublabel: 'Pequeñas porciones',      icon: '⭕' },
      { id: 'normal',  label: 'Normal',            sublabel: 'Como de costumbre',       icon: '🍽️' },
      { id: 'snacks',  label: 'Solo snacks',       sublabel: 'Picoteo durante el día',  icon: '🍿' },
    ]
  },
  {
    eyebrow: 'Pregunta 3 de 3',
    title: '¿Qué valoras más?',
    options: [
      { id: 'proteina',    label: 'Proteína',    sublabel: 'Alto en proteínas',       icon: '💪' },
      { id: 'natural',     label: 'Natural',      sublabel: 'Ingredientes limpios',    icon: '🌿' },
      { id: 'bajo_azucar', label: 'Bajo azúcar', sublabel: 'Sin excesos de dulce',    icon: '🧊' },
    ]
  }
];

const QuizScreen = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [animating, setAnimating] = useState(false);

  const handleOptionClick = (optionId) => {
    if (animating) return;
    setAnimating(true);
    const newAnswers = [...answers, optionId];
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setAnswers(newAnswers);
        setCurrentQuestion(currentQuestion + 1);
        setAnimating(false);
      } else {
        onComplete(newAnswers);
      }
    }, 280);
  };

  const q = questions[currentQuestion];

  return (
    <div className="screen" key={currentQuestion}>
      {/* Background */}
      <div className="quiz-screen-bg" />

      {/* Robot: background decoration only — very subtle, behind everything */}
      <div className="quiz-robot-bg">
        <img src="/robot.png" className="quiz-robot-bg-img" alt="" aria-hidden="true" />
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
      </div>

      {/* Progress Bar */}
      <div className="progress-wrapper">
        <div className="progress-header">
          <span className="progress-label">Tu perfil</span>
          <span className="progress-count">{currentQuestion + 1} / {questions.length}</span>
        </div>
        <div className="progress-track">
          <div
            className="progress-fill"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
        <div className="progress-dots">
          {questions.map((_, idx) => (
            <div
              key={idx}
              className={`progress-dot ${idx === currentQuestion ? 'active' : idx < currentQuestion ? 'done' : ''}`}
            />
          ))}
        </div>
      </div>

      {/* Centered content — options are the hero */}
      <div className="quiz-body">
        <div className="quiz-center">
          <p className="question-eyebrow">{q.eyebrow}</p>
          <h2 className="question-title">{q.title}</h2>

          <div className="quiz-options">
            {q.options.map((opt) => (
              <button
                key={opt.id}
                className={`quiz-option-card ${animating ? 'disabled' : ''}`}
                onClick={() => handleOptionClick(opt.id)}
                disabled={animating}
              >
                <div className="option-icon-wrapper">{opt.icon}</div>
                <div className="option-text-block">
                  <div className="option-label">{opt.label}</div>
                  <div className="option-sublabel">{opt.sublabel}</div>
                </div>
                <div className="option-arrow">›</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="quiz-footer">
        <div className="quiz-footer-brand">
          <img src="/unicorn-white.png" className="quiz-footer-unicorn" alt="Puratos" />
          <span className="quiz-footer-text">by Puratos</span>
        </div>
      </div>
    </div>
  );
};

export default QuizScreen;
