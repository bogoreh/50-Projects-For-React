import React, { useState } from 'react'
import GitHubStats from './components/GitHubStats'
import './styles/App.css'

function App() {
  const [username, setUsername] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username.trim()) {
      setUsername(username.trim())
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>GitHub Stats Viewer</h1>
        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="text"
            placeholder="Enter GitHub username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            Get Stats
          </button>
        </form>
      </header>
      
      <main className="app-main">
        {username && <GitHubStats username={username} />}
      </main>
    </div>
  )
}

export default App