import React from 'react';
import Card from './Card';

const GameBoard = ({ 
  blackCard, 
  playedCards, 
  onJudgeSelect, 
  isJudge, 
  roundWinner 
}) => {
  return (
    <div className="game-board">
      <div className="black-card-container">
        <Card text={blackCard} type="black" />
      </div>
      
      {playedCards.length > 0 && (
        <div className="played-cards">
          <h3>Played Cards</h3>
          <div className="played-cards-grid">
            {playedCards.map((card, index) => (
              <Card
                key={index}
                text={card}
                type="white"
                isPlayed={true}
                onClick={() => isJudge && onJudgeSelect(index)}
              />
            ))}
          </div>
        </div>
      )}
      
      {roundWinner && (
        <div className="winner-message">
          🎉 Winning card: "{roundWinner}" 🎉
        </div>
      )}
      
      {isJudge && playedCards.length > 0 && (
        <div className="judge-instruction">
          You're the judge! Select the winning card.
        </div>
      )}
    </div>
  );
};

export default GameBoard;