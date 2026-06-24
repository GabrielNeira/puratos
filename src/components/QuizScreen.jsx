import React, { useState } from 'react';

const questions = [
  {
    title: "1. ¿Qué buscas hoy?",
    options: [
      { id: 'energia', label: 'Energía', icon: '⚡' },
      { id: 'saciedad', label: 'Saciedad', icon: '🔋' },
      { id: 'indulgencia', label: 'Indulgencia', icon: '❤️' }
    ]
  },
  {
    title: "2. ¿Cómo comes hoy?",
    options: [
      { id: 'poco', label: 'Poco pero frecuente', icon: '⭕' },
      { id: 'normal', label: 'Normal', icon: '🍽️' },
      { id: 'snacks', label: 'Solo snacks', icon: '🍿' }
    ]
  },
  {
    title: "3. ¿Qué valoras más?",
    options: [
      { id: 'proteina', label: 'Proteína', icon: '💪' },
      { id: 'natural', label: 'Natural', icon: '🌿' },
      { id: 'bajo_azucar', label: 'Bajo en azúcar', icon: '🧊' }
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
    }, 300);
  };

  const q = questions[currentQuestion];

  return (
    <div className="screen" key={currentQuestion}>
      <div className="top-header" style={{ justifyContent: 'center', marginBottom: '1rem' }}>
        <div className="puratos-logo-text" style={{fontSize: '1.5rem'}}>Puratos</div>
      </div>
      
      <div className="progress-container">
        {[0, 1, 2].map((idx) => (
          <React.Fragment key={idx}>
            <div className={`progress-node ${idx <= currentQuestion ? 'active' : ''}`}>
              {idx + 1}
            </div>
            {idx < 2 && (
              <div className={`progress-line ${idx < currentQuestion ? 'filled' : ''}`} />
            )}
          </React.Fragment>
        ))}
      </div>
      
      <div className="quiz-content">
        <h2 className="question-title">{q.title}</h2>
        
        <div className="quiz-options">
          {q.options.map((opt) => (
            <button 
              key={opt.id} 
              className={`quiz-option-card ${animating ? 'disabled' : ''}`}
              onClick={() => handleOptionClick(opt.id)}
            >
              <div className="option-icon">{opt.icon}</div>
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="footer-bar">
        <img src="/robot.png" className="footer-robot" alt="Purabot" />
        <div className="footer-text">Pregunta {currentQuestion + 1} de 3</div>
      </div>
    </div>
  );
};

export default QuizScreen;
