import { useState, useEffect, useCallback } from 'react'

export const useGameLogic = () => {
  const [playerPosition, setPlayerPosition] = useState({ x: 7, y: 14 })
  const [vehicles, setVehicles] = useState([])
  const [score, setScore] = useState(0)
  const [lives, setLives] = useState(3)
  const [gameOver, setGameOver] = useState(false)
  const [level, setLevel] = useState(1)

  const boardWidth = 15
  const boardHeight = 15

  // Generate random vehicles
  const generateVehicles = useCallback(() => {
    const newVehicles = []
    const vehicleTypes = ['car1', 'car2', 'truck']
    
    // Different rows for different vehicle types
    const vehicleRows = [
      { row: 4, type: 'car1', speed: 2 + level, direction: 1 },
      { row: 5, type: 'car2', speed: 3 + level, direction: -1 },
      { row: 6, type: 'truck', speed: 1 + level, direction: 1 },
      { row: 7, type: 'car1', speed: 2 + level, direction: -1 },
      { row: 8, type: 'car2', speed: 3 + level, direction: 1 },
      { row: 9, type: 'truck', speed: 1 + level, direction: -1 },
      { row: 10, type: 'car1', speed: 2 + level, direction: 1 },
      { row: 11, type: 'car2', speed: 3 + level, direction: -1 }
    ]

    vehicleRows.forEach((vehicleRow, index) => {
      newVehicles.push({
        id: index,
        type: vehicleRow.type,
        position: { 
          x: vehicleRow.direction > 0 ? -2 : boardWidth, 
          y: vehicleRow.row 
        },
        speed: vehicleRow.speed,
        direction: vehicleRow.direction
      })
    })

    return newVehicles
  }, [level])

  // Initialize vehicles
  useEffect(() => {
    setVehicles(generateVehicles())
  }, [generateVehicles])

  // Move vehicles
  useEffect(() => {
    if (gameOver) return

    const moveInterval = setInterval(() => {
      setVehicles(prevVehicles => 
        prevVehicles.map(vehicle => {
          let newX = vehicle.position.x + vehicle.direction * 0.1
          
          // Reset vehicle position when it goes off screen
          if (vehicle.direction > 0 && newX > boardWidth) {
            newX = -2
          } else if (vehicle.direction < 0 && newX < -2) {
            newX = boardWidth
          }

          return {
            ...vehicle,
            position: { ...vehicle.position, x: newX }
          }
        })
      )
    }, 50)

    return () => clearInterval(moveInterval)
  }, [gameOver])

  // Check collisions
  useEffect(() => {
    if (gameOver) return

    const checkCollision = () => {
      vehicles.forEach(vehicle => {
        const vehicleWidth = vehicle.type === 'truck' ? 3 : 2
        const playerInVehicleX = playerPosition.x >= vehicle.position.x && 
                               playerPosition.x < vehicle.position.x + vehicleWidth
        const playerInVehicleY = playerPosition.y === vehicle.position.y

        if (playerInVehicleX && playerInVehicleY) {
          handleCollision()
        }
      })
    }

    const checkInterval = setInterval(checkCollision, 100)
    return () => clearInterval(checkInterval)
  }, [playerPosition, vehicles, gameOver])

  const handleCollision = () => {
    const newLives = lives - 1
    setLives(newLives)
    
    if (newLives <= 0) {
      setGameOver(true)
    } else {
      // Reset player position
      setPlayerPosition({ x: 7, y: 14 })
    }
  }

  const checkWin = useCallback((newPosition) => {
    if (newPosition.y < 3) {
      // Player reached the water
      setScore(prev => prev + 100 + (level * 50))
      setLevel(prev => prev + 1)
      setPlayerPosition({ x: 7, y: 14 })
      setVehicles(generateVehicles())
    }
  }, [level, generateVehicles])

  const movePlayer = useCallback((e) => {
    if (gameOver) return

    const key = e.key
    let newPosition = { ...playerPosition }

    switch(key) {
      case 'ArrowUp':
        newPosition.y = Math.max(0, playerPosition.y - 1)
        break
      case 'ArrowDown':
        newPosition.y = Math.min(boardHeight - 1, playerPosition.y + 1)
        break
      case 'ArrowLeft':
        newPosition.x = Math.max(0, playerPosition.x - 1)
        break
      case 'ArrowRight':
        newPosition.x = Math.min(boardWidth - 1, playerPosition.x + 1)
        break
      default:
        return
    }

    setPlayerPosition(newPosition)
    checkWin(newPosition)
  }, [playerPosition, gameOver, checkWin])

  const resetGame = () => {
    setPlayerPosition({ x: 7, y: 14 })
    setScore(0)
    setLives(3)
    setGameOver(false)
    setLevel(1)
    setVehicles(generateVehicles())
  }

  return {
    playerPosition,
    vehicles,
    score,
    lives,
    gameOver,
    level,
    movePlayer,
    resetGame
  }
}