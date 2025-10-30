import React, { useState, useEffect } from 'react';
import GameBoard from './components/GameBoard';
import PlayerHand from './components/PlayerHand';
import { blackCards, whiteCards } from './data/cards';
import './styles/globals.css';

function App() {
  const [playerHand, setPlayerHand] = useState([]);
  const [blackCard, setBlackCard] = useState('');
  const [selectedCard, setSelectedCard] = useState(null);
  const [playedCards, setPlayedCards] = useState([]);
  const [isJudge, setIsJudge] = useState(false);
  const [roundWinner, setRoundWinner] = useState('');
  const [score, setScore] = useState(0);

  const initializeGame = () => {
    // Deal player hand
    const newHand = [];
    for (let i = 0; i < 7; i++) {
      const randomIndex = Math.floor(Math.random() * whiteCards.length);
      newHand.push(whiteCards[randomIndex]);
    }
    setPlayerHand(newHand);

    // Set black card
    const randomBlackIndex = Math.floor(Math.random() * blackCards.length);
    setBlackCard(blackCards[randomBlackIndex]);

    // Randomly assign judge (50% chance for demo)
    setIsJudge(Math.random() > 0.5);
    
    setPlayedCards([]);
    setSelectedCard(null);
    setRoundWinner('');
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const handleCardSelect = (index) => {
    setSelectedCard(index);
  };

  const playCard = () => {
    if (selectedCard === null || isJudge) return;

    const playedCard = playerHand[selectedCard];
    
    // Add to played cards
    setPlayedCards([...playedCards, playedCard]);
    
    // Remove from hand and draw new card
    const newHand = [...playerHand];
    newHand.splice(selectedCard, 1);
    const randomIndex = Math.floor(Math.random() * whiteCards.length);
    newHand.push(whiteCards[randomIndex]);
    
    setPlayerHand(newHand);
    setSelectedCard(null);
  };

  const handleJudgeSelect = (cardIndex) => {
    if (!isJudge) return;

    const winningCard = playedCards[cardIndex];
    setRoundWinner(winningCard);
    setScore(score + 1);
    
    // Start new round after delay
    setTimeout(() => {
      initializeGame();
    }, 3000);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🎴 Cards Against Humanity</h1>
        <div className="score">Score: {score}</div>
      </header>

      <main className="app-main">
        <GameBoard
          blackCard={blackCard}
          playedCards={playedCards}
          onJudgeSelect={handleJudgeSelect}
          isJudge={isJudge}
          roundWinner={roundWinner}
        />

        <PlayerHand
          cards={playerHand}
          selectedCard={selectedCard}
          onCardSelect={handleCardSelect}
          canPlay={!isJudge && !roundWinner}
        />

        {!isJudge && selectedCard !== null && !roundWinner && (
          <button className="play-button" onClick={playCard}>
            Play Selected Card
          </button>
        )}

        <button className="new-round-button" onClick={initializeGame}>
          New Round
        </button>
      </main>
    </div>
  );
}

export default App;