import React from 'react';

const BudgetSummary = ({ transactions }) => {
  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.amount;
      } else {
        acc.expenses += transaction.amount;
      }
      return acc;
    },
    { income: 0, expenses: 0 }
  );

  const balance = summary.income - summary.expenses;

  return (
    <div className="budget-summary">
      <h2>Financial Summary</h2>
      <div className="summary-cards">
        <div className="summary-card income">
          <h3>Income</h3>
          <p className="amount">+${summary.income.toFixed(2)}</p>
        </div>
        
        <div className="summary-card expense">
          <h3>Expenses</h3>
          <p className="amount">-${summary.expenses.toFixed(2)}</p>
        </div>
        
        <div className={`summary-card balance ${balance >= 0 ? 'positive' : 'negative'}`}>
          <h3>Balance</h3>
          <p className="amount">${balance.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default BudgetSummary;