import React, { useState } from 'react';
import Navigation from './components/Navigation';
import DashboardPage from './pages/DashboardPage';
import ChartsPage from './pages/ChartsPage';
import RawDataPage from './pages/RawDataPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardPage />;
      case 'charts':
        return <ChartsPage />;
      case 'rawdata':
        return <RawDataPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="app">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;