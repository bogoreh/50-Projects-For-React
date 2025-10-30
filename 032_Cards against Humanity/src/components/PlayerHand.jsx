import React from 'react';
import Card from './Card';

const PlayerHand = ({ cards, selectedCard, onCardSelect, canPlay }) => {
  return (
    <div className="player-hand">
      <h3>Your Cards</h3>
      <div className="cards-container">
        {cards.map((card, index) => (
          <Card
            key={index}
            text={card}
            type="white"
            isSelected={selectedCard === index}
            onClick={() => canPlay && onCardSelect(index)}
          />
        ))}
      </div>
      {canPlay && (
        <div className="play-instruction">
          Select a card to play
        </div>
      )}
    </div>
  );
};

export default PlayerHand;