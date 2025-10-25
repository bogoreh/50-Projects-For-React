import React from 'react'
import FlashCard from './FlashCard'

const FlashCardList = ({ flashCards, onCardFlip, onMarkDone }) => {
  return (
    <main className="main">
      <div className="container">
        <div className="flashcards-grid">
          {flashCards.map(card => (
            <FlashCard 
              key={card.id}
              card={card}
              onCardFlip={onCardFlip}
              onMarkDone={onMarkDone}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export default FlashCardList