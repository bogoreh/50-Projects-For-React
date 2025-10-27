import React from 'react'
import { useGame } from '../hooks/useGameLogic'

const Controls = () => {
  const { movePiece, rotateCurrentPiece, dropPiece, resetGame, setIsPaused, isPaused, gameOver } = useGame()

  return (
    <div className="controls">
      <h3>Controls</h3>
      
      <div className="control-buttons">
        <button 
          onClick={() => movePiece({ x: -1, y: 0 })}
          className="control-btn"
        >
          ← Left
        </button>
        <button 
          onClick={() => movePiece({ x: 1, y: 0 })}
          className="control-btn"
        >
          Right →
        </button>
        <button 
          onClick={() => movePiece({ x: 0, y: 1 })}
          className="control-btn"
        >
          ↓ Down
        </button>
        <button 
          onClick={rotateCurrentPiece}
          className="control-btn rotate"
        >
          ↻ Rotate
        </button>
        <button 
          onClick={dropPiece}
          className="control-btn drop"
        >
          ⬇ Drop
        </button>
      </div>

      <div className="game-buttons">
        <button 
          onClick={() => setIsPaused(!isPaused)}
          className="game-btn pause"
        >
          {isPaused ? 'Resume' : 'Pause'}
        </button>
        <button 
          onClick={resetGame}
          className="game-btn reset"
        >
          New Game
        </button>
      </div>

      <div className="keyboard-hints">
        <p>Keyboard: Arrow keys to move, ↑ to rotate, Space to drop, P to pause</p>
      </div>
    </div>
  )
}

export default Controls