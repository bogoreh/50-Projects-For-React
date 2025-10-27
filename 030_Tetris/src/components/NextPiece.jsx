import React from 'react'
import { useGame } from '../hooks/useGameLogic'

const NextPiece = () => {
  const { nextPiece } = useGame()

  return (
    <div className="next-piece">
      <h3>Next Piece</h3>
      <div className="next-piece-display">
        {nextPiece.shape.map((row, y) => (
          <div key={y} className="next-piece-row">
            {row.map((cell, x) => (
              <div
                key={x}
                className="next-piece-cell"
                style={{ 
                  backgroundColor: cell ? nextPiece.color : 'transparent',
                  opacity: cell ? 1 : 0
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default NextPiece