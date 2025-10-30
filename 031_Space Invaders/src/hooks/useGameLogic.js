import { useState, useEffect, useCallback } from 'react'

const GAME_CONFIG = {
  boardWidth: 800,
  boardHeight: 600,
  playerSpeed: 8,
  bulletSpeed: 10,
  enemySpeed: 1,
  enemyRows: 3,
  enemiesPerRow: 8,
  enemySpacing: 60
}

export const useGameLogic = () => {
  const [playerPosition, setPlayerPosition] = useState(GAME_CONFIG.boardWidth / 2 - 25)
  const [enemies, setEnemies] = useState([])
  const [bullets, setBullets] = useState([])
  const [score, setScore] = useState(0)
  const [lives, setLives] = useState(3)
  const [gameOver, setGameOver] = useState(false)
  const [level, setLevel] = useState(1)

  // Initialize enemies
  const initializeEnemies = useCallback(() => {
    const newEnemies = []
    let id = 0
    
    for (let row = 0; row < GAME_CONFIG.enemyRows; row++) {
      for (let col = 0; col < GAME_CONFIG.enemiesPerRow; col++) {
        newEnemies.push({
          id: id++,
          position: {
            x: col * GAME_CONFIG.enemySpacing + 50,
            y: row * GAME_CONFIG.enemySpacing + 50
          },
          type: row % 3,
          isHit: false,
          direction: 1
        })
      }
    }
    setEnemies(newEnemies)
  }, [])

  // Game initialization
  useEffect(() => {
    initializeEnemies()
  }, [initializeEnemies])

  // Enemy movement
  useEffect(() => {
    if (gameOver) return

    const enemyInterval = setInterval(() => {
      setEnemies(prevEnemies => {
        let shouldMoveDown = false
        const movedEnemies = prevEnemies.map(enemy => {
          let newX = enemy.position.x + (GAME_CONFIG.enemySpeed * enemy.direction)
          
          // Check if any enemy hits the wall
          if (newX <= 0 || newX >= GAME_CONFIG.boardWidth - 30) {
            shouldMoveDown = true
          }
          
          return { ...enemy, position: { ...enemy.position, x: newX } }
        })

        if (shouldMoveDown) {
          return movedEnemies.map(enemy => ({
            ...enemy,
            direction: -enemy.direction,
            position: { ...enemy.position, y: enemy.position.y + 20 }
          }))
        }

        return movedEnemies
      })
    }, 100)

    return () => clearInterval(enemyInterval)
  }, [gameOver])

  // Bullet movement and collision detection
  useEffect(() => {
    if (gameOver) return

    const bulletInterval = setInterval(() => {
      setBullets(prevBullets => {
        const updatedBullets = prevBullets
          .map(bullet => ({
            ...bullet,
            position: {
              ...bullet.position,
              y: bullet.position.y + (bullet.type === 'player' ? -GAME_CONFIG.bulletSpeed : GAME_CONFIG.bulletSpeed)
            }
          }))
          .filter(bullet => 
            bullet.position.y > 0 && bullet.position.y < GAME_CONFIG.boardHeight
          )

        // Check collisions
        updatedBullets.forEach(bullet => {
          if (bullet.type === 'player') {
            setEnemies(prevEnemies => {
              const hitEnemyIndex = prevEnemies.findIndex(enemy => 
                !enemy.isHit &&
                bullet.position.x >= enemy.position.x &&
                bullet.position.x <= enemy.position.x + 30 &&
                bullet.position.y >= enemy.position.y &&
                bullet.position.y <= enemy.position.y + 30
              )

              if (hitEnemyIndex !== -1) {
                const newEnemies = [...prevEnemies]
                newEnemies[hitEnemyIndex].isHit = true
                setScore(prev => prev + 100)
                
                // Remove hit enemy after animation
                setTimeout(() => {
                  setEnemies(prev => prev.filter(e => !e.isHit || e.id !== newEnemies[hitEnemyIndex].id))
                }, 200)
                
                return newEnemies
              }
              return prevEnemies
            })
          }
        })

        return updatedBullets
      })
    }, 16)

    return () => clearInterval(bulletInterval)
  }, [gameOver])

  // Enemy shooting
  useEffect(() => {
    if (gameOver || enemies.length === 0) return

    const shootInterval = setInterval(() => {
      const activeEnemies = enemies.filter(enemy => !enemy.isHit)
      if (activeEnemies.length > 0) {
        const randomEnemy = activeEnemies[Math.floor(Math.random() * activeEnemies.length)]
        setBullets(prev => [...prev, {
          id: Date.now() + Math.random(),
          position: { 
            x: randomEnemy.position.x + 15, 
            y: randomEnemy.position.y + 30 
          },
          type: 'enemy'
        }])
      }
    }, 2000)

    return () => clearInterval(shootInterval)
  }, [enemies, gameOver])

  // Check game over conditions
  useEffect(() => {
    // Check if enemies reach bottom
    const enemyReachedBottom = enemies.some(enemy => 
      !enemy.isHit && enemy.position.y >= GAME_CONFIG.boardHeight - 100
    )
    
    // Check if all enemies destroyed
    const allEnemiesDestroyed = enemies.length === 0

    if (enemyReachedBottom) {
      setGameOver(true)
    }

    if (allEnemiesDestroyed) {
      setLevel(prev => prev + 1)
      setTimeout(() => initializeEnemies(), 1000)
    }
  }, [enemies, initializeEnemies])

  // Player controls
  const moveLeft = useCallback(() => {
    if (!gameOver) {
      setPlayerPosition(prev => Math.max(0, prev - GAME_CONFIG.playerSpeed))
    }
  }, [gameOver])

  const moveRight = useCallback(() => {
    if (!gameOver) {
      setPlayerPosition(prev => Math.min(GAME_CONFIG.boardWidth - 50, prev + GAME_CONFIG.playerSpeed))
    }
  }, [gameOver])

  const shoot = useCallback(() => {
    if (!gameOver) {
      setBullets(prev => [...prev, {
        id: Date.now(),
        position: { x: playerPosition + 20, y: GAME_CONFIG.boardHeight - 60 },
        type: 'player'
      }])
    }
  }, [gameOver, playerPosition])

  const resetGame = useCallback(() => {
    setPlayerPosition(GAME_CONFIG.boardWidth / 2 - 25)
    setEnemies([])
    setBullets([])
    setScore(0)
    setLives(3)
    setGameOver(false)
    setLevel(1)
    setTimeout(() => initializeEnemies(), 100)
  }, [initializeEnemies])

  return {
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
  }
}