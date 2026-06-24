import { useState } from 'react'
import './App.css'
import WelcomeScreen from './components/WelcomeScreen'
import QuizScreen from './components/QuizScreen'
import ResultScreen from './components/ResultScreen'

function App() {
  const [step, setStep] = useState(0) // 0: welcome, 1: quiz, 2: result
  const [answers, setAnswers] = useState([])

  const startQuiz = () => {
    setStep(1)
    setAnswers([])
  }

  const handleQuizComplete = (finalAnswers) => {
    setAnswers(finalAnswers)
    setStep(2)
  }

  const restartQuiz = () => {
    setStep(0)
    setAnswers([])
  }

  return (
    <div className="app-container">
      {step === 0 && <WelcomeScreen onStart={startQuiz} />}
      {step === 1 && <QuizScreen onComplete={handleQuizComplete} />}
      {step === 2 && <ResultScreen answers={answers} onRestart={restartQuiz} />}
    </div>
  )
}

export default App
