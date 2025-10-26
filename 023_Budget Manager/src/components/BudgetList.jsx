import React from 'react';
import BudgetCard from './BudgetCard';

const BudgetList = ({ transactions, onDeleteTransaction }) => {
  if (transactions.length === 0) {
    return (
      <div className="empty-state">
        <h3>No transactions yet</h3>
        <p>Add your first transaction to get started!</p>
      </div>
    );
  }

  return (
    <div className="budget-list">
      <h2>Recent Transactions</h2>
      <div className="transactions-container">
        {transactions.map(transaction => (
          <BudgetCard
            key={transaction.id}
            transaction={transaction}
            onDelete={onDeleteTransaction}
          />
        ))}
      </div>
    </div>
  );
};

export default BudgetList;