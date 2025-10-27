import React from 'react'
import { usePuzzle } from '../hooks/usePuzzleGame'

const GameControls = () => {
  const { shufflePieces, initializePuzzle, isComplete } = usePuzzle()

  return (
    <div className="game-controls">
      <button 
        onClick={() => initializePuzzle(3, 3)}
        className="control-btn new-game"
      >
        🆕 New Game
      </button>
      <button 
        onClick={shufflePieces}
        className="control-btn shuffle"
      >
        🔀 Shuffle Pieces
      </button>
      {isComplete && (
        <div className="success-badge">
          ✅ Completed!
        </div>
      )}
    </div>
  )
}

export default GameControls