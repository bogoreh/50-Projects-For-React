import React from 'react'

const GameStatus = ({ score, lives, level, gameOver, onReset }) => {
  return (
    <div className="game-status">
      <div className="status-item">
        <span className="label">Score:</span>
        <span className="value">{score}</span>
      </div>
      <div className="status-item">
        <span className="label">Lives:</span>
        <span className="value">{'🐔'.repeat(lives)}</span>
      </div>
      <div className="status-item">
        <span className="label">Level:</span>
        <span className="value">{level}</span>
      </div>
      <button className="reset-button" onClick={onReset}>
        Reset Game
      </button>
    </div>
  )
}

export default GameStatus