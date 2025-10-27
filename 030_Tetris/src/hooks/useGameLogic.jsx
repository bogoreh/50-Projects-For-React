import React, { createContext, useContext, useState, useCallback, useEffect } from 'react'
import { 
  createBoard, 
  checkCollision, 
  rotatePiece, 
  getRandomPiece,
  clearLines,
  BOARD_WIDTH,
  BOARD_HEIGHT 
} from '../utils/gameUtils'

const GameContext = createContext()

export const useGame = () => {
  const context = useContext(GameContext)
  if (!context) {
    throw new Error('useGame must be used within a GameProvider')
  }
  return context
}

export const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(() => createBoard())
  const [currentPiece, setCurrentPiece] = useState(() => getRandomPiece())
  const [nextPiece, setNextPiece] = useState(() => getRandomPiece())
  const [position, setPosition] = useState({ x: Math.floor(BOARD_WIDTH / 2) - 1, y: 0 })
  const [score, setScore] = useState(0)
  const [level, setLevel] = useState(1)
  const [lines, setLines] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  const resetGame = useCallback(() => {
    setBoard(createBoard())
    setCurrentPiece(getRandomPiece())
    setNextPiece(getRandomPiece())
    setPosition({ x: Math.floor(BOARD_WIDTH / 2) - 1, y: 0 })
    setScore(0)
    setLevel(1)
    setLines(0)
    setGameOver(false)
    setIsPaused(false)
  }, [])

  const movePiece = useCallback((direction) => {
    if (gameOver || isPaused) return

    const newPosition = {
      x: position.x + direction.x,
      y: position.y + direction.y
    }

    if (!checkCollision(board, currentPiece, newPosition)) {
      setPosition(newPosition)
      return true
    }
    
    if (direction.y > 0) {
      // Piece has landed
      const newBoard = board.map(row => [...row])
      currentPiece.shape.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value) {
            newBoard[position.y + y][position.x + x] = currentPiece.color
          }
        })
      })

      const { clearedBoard, linesCleared } = clearLines(newBoard)
      setBoard(clearedBoard)
      
      if (linesCleared > 0) {
        const newLines = lines + linesCleared
        const newLevel = Math.floor(newLines / 10) + 1
        const points = [0, 40, 100, 300, 1200][linesCleared] * level
        
        setLines(newLines)
        setLevel(newLevel)
        setScore(prev => prev + points)
      }

      // Spawn next piece
      setCurrentPiece(nextPiece)
      setNextPiece(getRandomPiece())
      setPosition({ x: Math.floor(BOARD_WIDTH / 2) - 1, y: 0 })

      // Check game over
      if (checkCollision(clearedBoard, nextPiece, { x: Math.floor(BOARD_WIDTH / 2) - 1, y: 0 })) {
        setGameOver(true)
      }
    }
    
    return false
  }, [board, currentPiece, position, gameOver, isPaused, nextPiece, level, lines])

  const rotateCurrentPiece = useCallback(() => {
    if (gameOver || isPaused) return

    const rotated = rotatePiece(currentPiece)
    if (!checkCollision(board, rotated, position)) {
      setCurrentPiece(rotated)
    }
  }, [board, currentPiece, position, gameOver, isPaused])

  const dropPiece = useCallback(() => {
    if (gameOver || isPaused) return
    while (movePiece({ x: 0, y: 1 })) {}
  }, [movePiece, gameOver, isPaused])

  // Keyboard controls
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (gameOver) {
        if (e.key === ' ') resetGame()
        return
      }

      switch (e.key) {
        case 'ArrowLeft':
          movePiece({ x: -1, y: 0 })
          break
        case 'ArrowRight':
          movePiece({ x: 1, y: 0 })
          break
        case 'ArrowDown':
          movePiece({ x: 0, y: 1 })
          break
        case 'ArrowUp':
          rotateCurrentPiece()
          break
        case ' ':
          dropPiece()
          break
        case 'p':
          setIsPaused(prev => !prev)
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [movePiece, rotateCurrentPiece, dropPiece, gameOver, resetGame])

  // Game tick
  useEffect(() => {
    if (gameOver || isPaused) return

    const gameSpeed = 1000 - (level - 1) * 100
    const gameTick = setInterval(() => {
      movePiece({ x: 0, y: 1 })
    }, Math.max(gameSpeed, 100))

    return () => clearInterval(gameTick)
  }, [movePiece, level, gameOver, isPaused])

  const value = {
    board,
    currentPiece,
    nextPiece,
    position,
    score,
    level,
    lines,
    gameOver,
    isPaused,
    movePiece,
    rotateCurrentPiece,
    dropPiece,
    resetGame,
    setIsPaused
  }

  return React.createElement(GameContext.Provider, { value }, children)
}