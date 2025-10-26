import React from 'react';
import BudgetForm from './components/BudgetForm';
import BudgetList from './components/BudgetList';
import BudgetSummary from './components/BudgetSummary';
import { useLocalStorage } from './hooks/useLocalStorage';
import './styles/App.css';

function App() {
  const [transactions, setTransactions] = useLocalStorage('budget-transactions', []);

  const addTransaction = (transaction) => {
    setTransactions(prev => [transaction, ...prev]);
  };

  const deleteTransaction = (id) => {
    setTransactions(prev => prev.filter(transaction => transaction.id !== id));
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>💰 Budget Manager</h1>
        <p>Track your income and expenses easily</p>
      </header>

      <main className="app-main">
        <div className="container">
          <div className="sidebar">
            <BudgetForm onAddTransaction={addTransaction} />
          </div>
          
          <div className="content">
            <BudgetSummary transactions={transactions} />
            <BudgetList 
              transactions={transactions} 
              onDeleteTransaction={deleteTransaction}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;