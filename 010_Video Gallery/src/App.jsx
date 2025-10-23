import React from 'react'
import VideoGallery from './components/VideoGallery'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>React Tutorials Gallery</h1>
        <p>Master React with our curated video tutorials</p>
      </header>
      <main>
        <VideoGallery />
      </main>
    </div>
  )
}

export default App