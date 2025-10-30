import React from 'react'
import { useGameLogic } from '../hooks/useGameLogic'
import Player from './Player'
import Enemy from './Enemy'
import Bullet from './Bullet'
import UI from './UI'

const GameBoard = () => {
  const {
    playerPosition,
    enemies,
    bullets,
    score,
    lives,
    gameOver,
    level,
    moveLeft,
    moveRight,
    shoot,
    resetGame
  } = useGameLogic()

  return (
    <div className="game-container">
      <UI score={score} lives={lives} level={level} />
      
      <div 
        className="game-board"
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') moveLeft()
          if (e.key === 'ArrowRight') moveRight()
          if (e.key === ' ') shoot()
        }}
        tabIndex={0}
      >
        <Player position={playerPosition} />
        
        {enemies.map(enemy => (
          <Enemy 
            key={enemy.id}
            position={enemy.position}
            type={enemy.type}
            isHit={enemy.isHit}
          />
        ))}
        
        {bullets.map(bullet => (
          <Bullet 
            key={bullet.id}
            position={bullet.position}
            type={bullet.type}
          />
        ))}
        
        {gameOver && (
          <div className="game-over">
            <h2>Game Over</h2>
            <p>Final Score: {score}</p>
            <button onClick={resetGame} className="restart-btn">
              Play Again
            </button>
          </div>
        )}
      </div>
      
      <div className="controls">
        <p>Controls: ← → to move, Space to shoot</p>
      </div>
    </div>
  )
}

export default GameBoard