export const BOARD_WIDTH = 10
export const BOARD_HEIGHT = 20

export const PIECES = [
  {
    shape: [
      [1, 1],
      [1, 1]
    ],
    color: '#FFD700' // Gold
  },
  {
    shape: [
      [0, 1, 0],
      [1, 1, 1],
      [0, 0, 0]
    ],
    color: '#9370DB' // Purple
  },
  {
    shape: [
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0]
    ],
    color: '#FF69B4' // Pink
  },
  {
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0]
    ],
    color: '#87CEEB' // Sky Blue
  },
  {
    shape: [
      [1, 0, 0],
      [1, 1, 1],
      [0, 0, 0]
    ],
    color: '#98FB98' // Pale Green
  },
  {
    shape: [
      [0, 0, 1],
      [1, 1, 1],
      [0, 0, 0]
    ],
    color: '#FFA07A' // Light Salmon
  },
  {
    shape: [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    color: '#FF6347' // Tomato
  }
]

export const createBoard = () => 
  Array.from({ length: BOARD_HEIGHT }, () => 
    Array.from({ length: BOARD_WIDTH }, () => null)
  )

export const getRandomPiece = () => {
  const piece = PIECES[Math.floor(Math.random() * PIECES.length)]
  return {
    shape: piece.shape.map(row => [...row]),
    color: piece.color
  }
}

export const rotatePiece = (piece) => {
  const rotated = piece.shape[0].map((_, index) =>
    piece.shape.map(row => row[index]).reverse()
  )
  return { ...piece, shape: rotated }
}

export const checkCollision = (board, piece, position) => {
  for (let y = 0; y < piece.shape.length; y++) {
    for (let x = 0; x < piece.shape[y].length; x++) {
      if (piece.shape[y][x]) {
        const boardX = position.x + x
        const boardY = position.y + y

        if (
          boardX < 0 ||
          boardX >= BOARD_WIDTH ||
          boardY >= BOARD_HEIGHT ||
          (boardY >= 0 && board[boardY][boardX])
        ) {
          return true
        }
      }
    }
  }
  return false
}

export const clearLines = (board) => {
  const newBoard = [...board]
  let linesCleared = 0

  for (let y = BOARD_HEIGHT - 1; y >= 0; y--) {
    if (newBoard[y].every(cell => cell !== null)) {
      newBoard.splice(y, 1)
      newBoard.unshift(Array(BOARD_WIDTH).fill(null))
      linesCleared++
      y++ // Recheck this position
    }
  }

  return { clearedBoard: newBoard, linesCleared }
}