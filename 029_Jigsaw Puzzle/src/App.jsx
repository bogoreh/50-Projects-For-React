import React from 'react'
import PuzzleBoard from './components/PuzzleBoard'
import GameControls from './components/GameControls'
import { PuzzleProvider } from './context/PuzzleContext'
import './styles/App.css'

function App() {
  return (
    <PuzzleProvider>
      <div className="app">
        <header className="app-header">
          <h1>Jigsaw Puzzle</h1>
          <p>Drag and drop pieces to solve the puzzle!</p>
        </header>
        <main className="app-main">
          <GameControls />
          <PuzzleBoard />
        </main>
      </div>
    </PuzzleProvider>
  )
}

export default App