import React from 'react'

const UI = ({ score, lives, level }) => {
  return (
    <div className="game-ui">
      <div className="ui-section">
        <span className="ui-label">Score:</span>
        <span className="ui-value">{score}</span>
      </div>
      <div className="ui-section">
        <span className="ui-label">Lives:</span>
        <span className="ui-value">{'❤️'.repeat(lives)}</span>
      </div>
      <div className="ui-section">
        <span className="ui-label">Level:</span>
        <span className="ui-value">{level}</span>
      </div>
    </div>
  )
}

export default UI