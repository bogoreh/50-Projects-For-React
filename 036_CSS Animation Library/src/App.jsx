import React, { useState } from 'react'
import SpinnerDemo from './components/SpinnerDemo'
import AnimationDemo from './components/AnimationDemo'

function App() {
  const [activeTab, setActiveTab] = useState('spinners')

  return (
    <div className="app">
      <header className="app-header">
        <h1>✨ CSS Animation Library</h1>
        <p>A collection of beautiful loading spinners and animations</p>
      </header>

      <nav className="tab-nav">
        <button 
          className={`tab-btn ${activeTab === 'spinners' ? 'active' : ''}`}
          onClick={() => setActiveTab('spinners')}
        >
          Loading Spinners
        </button>
        <button 
          className={`tab-btn ${activeTab === 'animations' ? 'active' : ''}`}
          onClick={() => setActiveTab('animations')}
        >
          Animations
        </button>
      </nav>

      <main className="main-content">
        {activeTab === 'spinners' ? <SpinnerDemo /> : <AnimationDemo />}
      </main>

      <footer className="app-footer">
        <p>Made with ❤️ using React & Vite</p>
      </footer>
    </div>
  )
}

export default App