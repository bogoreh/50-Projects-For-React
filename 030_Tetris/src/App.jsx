import React from 'react'
import GameBoard from './components/GameBoard'
import NextPiece from './components/NextPiece'
import ScoreBoard from './components/ScoreBoard'
import Controls from './components/Controls'
import { GameProvider } from './hooks/useGameLogic'  // No extension needed
import './index.css'

function App() {
  return (
    <GameProvider>
      <div className="app">
        <header className="app-header">
          <h1>Puzzle Blocks</h1>
          <p>Rotate shapes to complete lines!</p>
        </header>
        
        <div className="game-container">
          <div className="game-main">
            <GameBoard />
          </div>
          
          <div className="game-sidebar">
            <ScoreBoard />
            <NextPiece />
            <Controls />
          </div>
        </div>
      </div>
    </GameProvider>
  )
}

export default App