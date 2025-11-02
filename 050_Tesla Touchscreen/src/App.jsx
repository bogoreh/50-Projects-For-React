import React, { useState } from 'react'
import './App.css'
import StatusBar from './components/StatusBar/StatusBar'
import Dashboard from './components/Dashboard/Dashboard'
import Climate from './components/Climate/Climate'
import Media from './components/Media/Media'
import Navigation from './components/Navigation/Navigation'

function App() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [carState, setCarState] = useState({
    speed: 0,
    battery: 75,
    temperature: 72,
    ac: true,
    mediaPlaying: false,
    currentSong: 'Tesla Radio'
  })

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard carState={carState} />
      case 'climate':
        return <Climate carState={carState} setCarState={setCarState} />
      case 'media':
        return <Media carState={carState} setCarState={setCarState} />
      case 'navigation':
        return <Navigation />
      default:
        return <Dashboard carState={carState} />
    }
  }

  return (
    <div className="tesla-app">
      <StatusBar carState={carState} />
      <div className="main-content">
        {renderActiveTab()}
      </div>
      <div className="bottom-nav">
        <button 
          className={`nav-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          🏠
        </button>
        <button 
          className={`nav-btn ${activeTab === 'climate' ? 'active' : ''}`}
          onClick={() => setActiveTab('climate')}
        >
          ❄️
        </button>
        <button 
          className={`nav-btn ${activeTab === 'media' ? 'active' : ''}`}
          onClick={() => setActiveTab('media')}
        >
          🎵
        </button>
        <button 
          className={`nav-btn ${activeTab === 'navigation' ? 'active' : ''}`}
          onClick={() => setActiveTab('navigation')}
        >
          🗺️
        </button>
      </div>
    </div>
  )
}

export default App