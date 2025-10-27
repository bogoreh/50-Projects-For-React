import React, { createContext, useState, useCallback } from 'react'
import { generatePuzzlePieces, checkPuzzleComplete } from '../utils/puzzleHelpers'

const PuzzleContext = createContext()

export const PuzzleProvider = ({ children }) => {
  const [pieces, setPieces] = useState([])
  const [solvedPieces, setSolvedPieces] = useState([])
  const [isComplete, setIsComplete] = useState(false)
  const [imageUrl, setImageUrl] = useState('/puzzle-image.jpg')

  const initializePuzzle = useCallback((rows = 3, cols = 3) => {
    const newPieces = generatePuzzlePieces(rows, cols, imageUrl)
    setPieces(newPieces)
    setSolvedPieces([])
    setIsComplete(false)
  }, [imageUrl])

  const movePieceToBoard = useCallback((pieceId) => {
    setPieces(prev => {
      const pieceIndex = prev.findIndex(p => p.id === pieceId)
      if (pieceIndex === -1) return prev
      
      const piece = prev[pieceIndex]
      const newPieces = [...prev]
      newPieces.splice(pieceIndex, 1)
      
      setSolvedPieces(prevSolved => {
        const newSolved = [...prevSolved, { ...piece, isSolved: true }]
        const complete = checkPuzzleComplete(newSolved)
        setIsComplete(complete)
        return newSolved
      })
      
      return newPieces
    })
  }, [])

  const resetPiece = useCallback((pieceId) => {
    setSolvedPieces(prev => {
      const pieceIndex = prev.findIndex(p => p.id === pieceId)
      if (pieceIndex === -1) return prev
      
      const piece = prev[pieceIndex]
      const newSolved = [...prev]
      newSolved.splice(pieceIndex, 1)
      
      setPieces(prevPieces => [...prevPieces, { ...piece, isSolved: false }])
      setIsComplete(false)
      return newSolved
    })
  }, [])

  const shufflePieces = useCallback(() => {
    setPieces(prev => {
      const shuffled = [...prev]
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
      }
      return shuffled
    })
  }, [])

  const value = {
    pieces,
    solvedPieces,
    isComplete,
    imageUrl,
    initializePuzzle,
    movePieceToBoard,
    resetPiece,
    shufflePieces
  }

  return (
    <PuzzleContext.Provider value={value}>
      {children}
    </PuzzleContext.Provider>
  )
}

export default PuzzleContext