import React from 'react'
import { useGame } from '../hooks/useGameLogic'
import { BOARD_WIDTH, BOARD_HEIGHT } from '../utils/gameUtils'

const GameBoard = () => {
  const { board, currentPiece, position, gameOver, isPaused } = useGame()

  const renderBoard = () => {
    const displayBoard = board.map(row => [...row])

    // Draw current piece
    if (currentPiece) {
      currentPiece.shape.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value && position.y + y >= 0) {
            displayBoard[position.y + y][position.x + x] = currentPiece.color
          }
        })
      })
    }

    return displayBoard
  }

  const gameBoard = renderBoard()

  return (
    <div className="game-board-container">
      {gameOver && (
        <div className="game-overlay">
          <div className="game-over-message">
            <h2>Game Over!</h2>
            <p>Press Space to restart</p>
          </div>
        </div>
      )}
      
      {isPaused && !gameOver && (
        <div className="game-overlay">
          <div className="game-over-message">
            <h2>Paused</h2>
            <p>Press P to resume</p>
          </div>
        </div>
      )}

      <div 
        className="game-board"
        style={{
          gridTemplateColumns: `repeat(${BOARD_WIDTH}, 1fr)`,
          gridTemplateRows: `repeat(${BOARD_HEIGHT}, 1fr)`
        }}
      >
        {gameBoard.map((row, y) =>
          row.map((cell, x) => (
            <div
              key={`${y}-${x}`}
              className={`cell ${cell ? 'filled' : 'empty'}`}
              style={{ backgroundColor: cell || undefined }}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default GameBoard