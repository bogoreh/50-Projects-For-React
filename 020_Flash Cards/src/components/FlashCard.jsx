import React from 'react'

const FlashCard = ({ card, onCardFlip, onMarkDone }) => {
  const handleClick = () => {
    onCardFlip(card.id)
  }

  const handleMarkDone = (e) => {
    e.stopPropagation()
    onMarkDone(card.id)
  }

  return (
    <div 
      className={`flashcard ${card.isFlipped ? 'flipped' : ''} ${card.isDone ? 'done' : ''}`}
      onClick={handleClick}
    >
      <div className="flashcard-inner">
        <div className="flashcard-front">
          <div className="card-content">
            <span className="category-badge">{card.category}</span>
            <h3 className="question">{card.question}</h3>
            <div className="hint">Click to flip</div>
          </div>
          <button 
            className={`mark-btn ${card.isDone ? 'done' : ''}`}
            onClick={handleMarkDone}
          >
            {card.isDone ? '✓ Done' : 'Mark Done'}
          </button>
        </div>
        <div className="flashcard-back">
          <div className="card-content">
            <span className="category-badge">{card.category}</span>
            <p className="answer">{card.answer}</p>
            <div className="hint">Click to flip back</div>
          </div>
          <button 
            className={`mark-btn ${card.isDone ? 'done' : ''}`}
            onClick={handleMarkDone}
          >
            {card.isDone ? '✓ Done' : 'Mark Done'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default FlashCard