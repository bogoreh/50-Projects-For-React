import React, { useEffect } from 'react'
import { usePuzzle } from '../hooks/usePuzzleGame'
import PuzzlePiece from './PuzzlePiece'

const PuzzleBoard = () => {
  const { pieces, solvedPieces, isComplete, initializePuzzle } = usePuzzle()

  useEffect(() => {
    initializePuzzle(3, 3)
  }, [initializePuzzle])

  return (
    <div className="puzzle-container">
      {isComplete && (
        <div className="completion-message">
          🎉 Puzzle Complete! Well done! 🎉
        </div>
      )}
      
      <div className="game-area">
        <div className="pieces-container">
          <h3>Puzzle Pieces</h3>
          <div className="pieces-grid">
            {pieces.map(piece => (
              <PuzzlePiece key={piece.id} piece={piece} isOnBoard={false} />
            ))}
          </div>
        </div>

        <div className="board-container">
          <h3>Puzzle Board</h3>
          <div 
            className="puzzle-board"
            onDragOver={(e) => e.preventDefault()}
          >
            {solvedPieces.map(piece => (
              <div
                key={piece.id}
                className="solved-piece-slot"
                style={{
                  gridRow: piece.row + 1,
                  gridColumn: piece.col + 1
                }}
              >
                <PuzzlePiece piece={piece} isOnBoard={true} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PuzzleBoard