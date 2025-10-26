import React from 'react';

const BudgetCard = ({ transaction, onDelete }) => {
  const isIncome = transaction.type === 'income';
  
  return (
    <div className={`budget-card ${isIncome ? 'income' : 'expense'}`}>
      <div className="transaction-info">
        <h3 className="transaction-title">{transaction.description}</h3>
        <p className="transaction-category">{transaction.category}</p>
        <p className="transaction-date">{transaction.date}</p>
      </div>
      <div className="transaction-amount">
        <span className={`amount ${isIncome ? 'income' : 'expense'}`}>
          {isIncome ? '+' : '-'}${transaction.amount}
        </span>
        <button 
          className="delete-btn"
          onClick={() => onDelete(transaction.id)}
          aria-label="Delete transaction"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default BudgetCard;