export const generatePuzzlePieces = (rows, cols, imageUrl) => {
  const pieces = []
  const pieceWidth = 100
  const pieceHeight = 100
  
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const pieceId = `${row}-${col}`
      const backgroundPosition = `${-col * pieceWidth}px ${-row * pieceHeight}px`
      
      pieces.push({
        id: pieceId,
        row,
        col,
        width: pieceWidth,
        height: pieceHeight,
        backgroundPosition,
        imageUrl,
        isSolved: false
      })
    }
  }
  
  // Shuffle pieces initially
  return pieces.sort(() => Math.random() - 0.5)
}

export const checkPuzzleComplete = (solvedPieces) => {
  if (solvedPieces.length === 0) return false
  
  const totalPieces = 9 // For 3x3 puzzle
  return solvedPieces.length === totalPieces
}