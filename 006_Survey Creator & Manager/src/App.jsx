import { useState } from 'react'
import SurveyForm from './components/SurveyForm'
import SurveyList from './components/SurveyList'
import SurveyResults from './components/SurveyResults'
import './styles/index.css'

function App() {
  const [activeTab, setActiveTab] = useState('create')
  const [refresh, setRefresh] = useState(0)

  const handleSurveyCreated = () => {
    setRefresh(prev => prev + 1)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>📊 Tech & Entertainment Survey</h1>
        <p>Share your opinions on favorite technologies and entertainment</p>
      </header>

      <nav className="tab-navigation">
        <button 
          className={`tab-button ${activeTab === 'create' ? 'active' : ''}`}
          onClick={() => setActiveTab('create')}
        >
          🆕 Create Survey
        </button>
        <button 
          className={`tab-button ${activeTab === 'surveys' ? 'active' : ''}`}
          onClick={() => setActiveTab('surveys')}
        >
          📋 View Surveys
        </button>
        <button 
          className={`tab-button ${activeTab === 'results' ? 'active' : ''}`}
          onClick={() => setActiveTab('results')}
        >
          📈 Results
        </button>
      </nav>

      <main className="app-main">
        {activeTab === 'create' && (
          <SurveyForm onSurveyCreated={handleSurveyCreated} />
        )}
        {activeTab === 'surveys' && (
          <SurveyList key={refresh} />
        )}
        {activeTab === 'results' && (
          <SurveyResults />
        )}
      </main>
    </div>
  )
}

export default App