import React from 'react'
import { useGame } from '../hooks/useGameLogic'

const ScoreBoard = () => {
  const { score, level, lines } = useGame()

  return (
    <div className="score-board">
      <div className="stat">
        <span className="stat-label">Score</span>
        <span className="stat-value">{score}</span>
      </div>
      <div className="stat">
        <span className="stat-label">Level</span>
        <span className="stat-value">{level}</span>
      </div>
      <div className="stat">
        <span className="stat-label">Lines</span>
        <span className="stat-value">{lines}</span>
      </div>
    </div>
  )
}

export default ScoreBoard