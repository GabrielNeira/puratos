import { useState, useCallback } from 'react'
import './App.css'
import WelcomeScreen from './components/WelcomeScreen'
import QuizScreen from './components/QuizScreen'
import ResultScreen from './components/ResultScreen'
import ShareScreen from './components/ShareScreen'

// ─── Metrics helpers ────────────────────────────────────────────────────────
const METRICS_KEY = 'tt_quiz_metrics'

const profileLabels = {
  balanced:  'Balanced Energy – Muffin Funcional',
  light:     'Light & Smart – Snack Clean Label',
  indulgent: 'Smart Indulgent – Mini Brownie Protein',
}

function loadMetrics() {
  try {
    return JSON.parse(localStorage.getItem(METRICS_KEY)) || { balanced: 0, light: 0, indulgent: 0 }
  } catch {
    return { balanced: 0, light: 0, indulgent: 0 }
  }
}

function saveMetrics(m) {
  localStorage.setItem(METRICS_KEY, JSON.stringify(m))
}

function resolveProfile(answers) {
  if (answers.includes('indulgencia') || answers.includes('snacks')) return 'indulgent'
  if (answers.includes('poco') || answers.includes('natural') || answers.includes('bajo_azucar')) return 'light'
  return 'balanced'
}

function exportCSV(metrics) {
  const now = new Date().toLocaleString('es-CL')
  const total = Object.values(metrics).reduce((a, b) => a + b, 0)

  const rows = [
    ['Taste Tomorrow Chile 2026 – Métricas del Quiz'],
    [`Exportado el: ${now}`],
    [''],
    ['Perfil', 'Nombre del Producto', 'Cantidad', 'Porcentaje'],
    ...Object.entries(metrics).map(([key, count]) => {
      const pct = total > 0 ? ((count / total) * 100).toFixed(1) + '%' : '0%'
      return [key, profileLabels[key], count, pct]
    }),
    [''],
    ['TOTAL', '', total, '100%'],
  ]

  const csv = rows.map(r => r.join(',')).join('\n')
  const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `TT_Chile_2026_Metricas_${Date.now()}.csv`
  a.click()
  URL.revokeObjectURL(url)
}

// ────────────────────────────────────────────────────────────────────────────

const profileDetails = {
  balanced: {
    type:    'Balanced Energy',
    product: 'Muffin Funcional',
    message: 'Te da saciedad y energía sin exceso.',
  },
  light: {
    type:    'Light & Smart',
    product: 'Snack Pequeño Clean Label',
    message: 'Perfecto para comer menos pero mejor.',
  },
  indulgent: {
    type:    'Smart Indulgent',
    product: 'Mini Brownie Protein & Fiber',
    message: 'Mismo placer, más nutrición por bocado.',
  },
};

function App() {
  const [step, setStep] = useState(0) // 0: welcome, 1: quiz, 2: result, 3: share
  const [answers, setAnswers] = useState([])
  const [currentProfile, setCurrentProfile] = useState(null)

  const startQuiz = useCallback(() => {
    setStep(1)
    setAnswers([])
    setCurrentProfile(null)
  }, [])

  const handleQuizComplete = useCallback((finalAnswers) => {
    const profile = resolveProfile(finalAnswers)
    // Record metric
    const m = loadMetrics()
    m[profile] = (m[profile] || 0) + 1
    saveMetrics(m)

    setAnswers(finalAnswers)
    setCurrentProfile(profile)
    setStep(2)
  }, [])

  const handleGoToShare = useCallback(() => {
    setStep(3)
  }, [])

  const restartQuiz = useCallback(() => {
    setStep(0)
    setAnswers([])
    setCurrentProfile(null)
  }, [])

  const handleExport = useCallback(() => {
    exportCSV(loadMetrics())
  }, [])

  const currentDetails = profileDetails[currentProfile] || profileDetails.balanced;

  return (
    <div className="app-container">
      {step === 0 && <WelcomeScreen onStart={startQuiz} />}
      {step === 1 && <QuizScreen onComplete={handleQuizComplete} />}
      {step === 2 && (
        <ResultScreen
          profile={currentProfile}
          onContinue={handleGoToShare}
        />
      )}
      {step === 3 && (
        <ShareScreen
          profileName={currentDetails.type}
          productName={currentDetails.product}
          message={currentDetails.message}
          onFinish={restartQuiz}
        />
      )}

      {/* Floating metrics export — subtle, always accessible */}
      <button className="metrics-fab" onClick={handleExport} title="Exportar métricas">
        <span className="metrics-fab-icon">📊</span>
        Exportar métricas
      </button>
    </div>
  )
}

export default App
