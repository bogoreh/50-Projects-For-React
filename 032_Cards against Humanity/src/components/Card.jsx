import React from 'react';
import '../styles/globals.css';

const Card = ({ text, type, isSelected, onClick, isPlayed = false }) => {
  const getCardClass = () => {
    let baseClass = 'card';
    if (type === 'black') baseClass += ' black-card';
    if (type === 'white') baseClass += ' white-card';
    if (isSelected) baseClass += ' selected';
    if (isPlayed) baseClass += ' played';
    return baseClass;
  };

  return (
    <div className={getCardClass()} onClick={onClick}>
      <div className="card-content">
        {text}
      </div>
    </div>
  );
};

export default Card;