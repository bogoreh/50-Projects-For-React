import React from 'react'
import Player from './Player'
import Vehicle from './Vehicle'
import GameStatus from './GameStatus'
import { useGameLogic } from '../hooks/useGameLogic'

const GameBoard = () => {
  const {
    playerPosition,
    vehicles,
    score,
    lives,
    gameOver,
    level,
    movePlayer,
    resetGame
  } = useGameLogic()

  const boardSize = 600
  const cellSize = boardSize / 15

  const renderBoard = () => {
    const cells = []
    for (let row = 0; row < 15; row++) {
      for (let col = 0; col < 15; col++) {
        let cellClass = 'cell'
        if (row < 3) cellClass += ' water'
        else if (row < 12) cellClass += ' road'
        else cellClass += ' grass'
        
        cells.push(
          <div
            key={`${row}-${col}`}
            className={cellClass}
            style={{
              width: cellSize,
              height: cellSize,
              left: col * cellSize,
              top: row * cellSize
            }}
          />
        )
      }
    }
    return cells
  }

  return (
    <div className="game-container">
      <GameStatus 
        score={score} 
        lives={lives} 
        level={level} 
        gameOver={gameOver}
        onReset={resetGame}
      />
      
      <div 
        className="game-board"
        style={{ width: boardSize, height: boardSize }}
        tabIndex={0}
        onKeyDown={movePlayer}
      >
        {renderBoard()}
        
        {/* Goal area */}
        <div 
          className="goal-area"
          style={{
            width: boardSize,
            height: 3 * cellSize,
            top: 0
          }}
        />
        
        {/* Vehicles */}
        {vehicles.map(vehicle => (
          <Vehicle
            key={vehicle.id}
            type={vehicle.type}
            position={vehicle.position}
            size={cellSize}
          />
        ))}
        
        {/* Player */}
        <Player
          position={playerPosition}
          size={cellSize}
          gameOver={gameOver}
        />
        
        {gameOver && (
          <div className="game-over-overlay">
            <div className="game-over-message">
              <h2>Game Over!</h2>
              <p>Final Score: {score}</p>
              <button onClick={resetGame}>Play Again</button>
            </div>
          </div>
        )}
      </div>
      
      <div className="controls">
        <p>Use <strong>Arrow Keys</strong> to move the chicken</p>
        <p>Avoid cars and reach the water!</p>
      </div>
    </div>
  )
}

export default GameBoard