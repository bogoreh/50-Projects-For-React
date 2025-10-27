import React from 'react'
import { usePuzzle } from '../hooks/usePuzzleGame'

const PuzzlePiece = ({ piece, isOnBoard = false }) => {
  const { movePieceToBoard, resetPiece } = usePuzzle()

  const handleDragStart = (e) => {
    if (!isOnBoard) {
      e.dataTransfer.setData('text/plain', piece.id)
    }
  }

  const handleClick = () => {
    if (isOnBoard) {
      resetPiece(piece.id)
    } else {
      movePieceToBoard(piece.id)
    }
  }

  const pieceStyle = {
    width: `${piece.width}px`,
    height: `${piece.height}px`,
    backgroundImage: `url(${piece.imageUrl})`,
    backgroundPosition: piece.backgroundPosition,
    backgroundSize: `${piece.width * 3}px ${piece.height * 3}px`,
    cursor: 'grab',
    border: isOnBoard ? '2px solid #4CAF50' : '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: isOnBoard 
      ? '0 4px 8px rgba(76, 175, 80, 0.3)'
      : '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease'
  }

  return (
    <div
      className={`puzzle-piece ${isOnBoard ? 'solved' : 'unsolved'}`}
      style={pieceStyle}
      draggable={!isOnBoard}
      onDragStart={handleDragStart}
      onClick={handleClick}
      title={isOnBoard ? 'Click to return to pieces' : 'Click or drag to puzzle board'}
    />
  )
}

export default PuzzlePiece