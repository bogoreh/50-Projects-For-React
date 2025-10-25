import { useState } from 'react'
import Header from './components/Header'
import FlashCardList from './components/FlashCardList'
import { initialFlashCards } from './data/flashCards'

function App() {
  const [flashCards, setFlashCards] = useState(initialFlashCards)
  const [sortBy, setSortBy] = useState('default')

  const handleCardFlip = (id) => {
    setFlashCards(cards =>
      cards.map(card =>
        card.id === id ? { ...card, isFlipped: !card.isFlipped } : card
      )
    )
  }

  const handleMarkDone = (id) => {
    setFlashCards(cards =>
      cards.map(card =>
        card.id === id ? { ...card, isDone: !card.isDone } : card
      )
    )
  }

  const handleSort = (criteria) => {
    setSortBy(criteria)
    const sortedCards = [...flashCards]
    
    switch (criteria) {
      case 'alphabetical':
        sortedCards.sort((a, b) => a.question.localeCompare(b.question))
        break
      case 'done':
        sortedCards.sort((a, b) => (a.isDone === b.isDone) ? 0 : a.isDone ? 1 : -1)
        break
      case 'category':
        sortedCards.sort((a, b) => a.category.localeCompare(b.category))
        break
      default:
        sortedCards.sort((a, b) => a.id - b.id)
    }
    
    setFlashCards(sortedCards)
  }

  const stats = {
    total: flashCards.length,
    done: flashCards.filter(card => card.isDone).length,
    remaining: flashCards.filter(card => !card.isDone).length
  }

  return (
    <div className="app">
      <Header 
        stats={stats} 
        sortBy={sortBy} 
        onSort={handleSort}
      />
      <FlashCardList 
        flashCards={flashCards}
        onCardFlip={handleCardFlip}
        onMarkDone={handleMarkDone}
      />
    </div>
  )
}

export default App