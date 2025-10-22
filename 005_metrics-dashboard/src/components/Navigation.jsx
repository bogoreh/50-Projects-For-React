import React from 'react';
import './Navigation.css';

const Navigation = ({ currentPage, onPageChange }) => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h2>📊 TechStocks Analytics</h2>
      </div>
      <div className="nav-links">
        <button 
          className={`nav-link ${currentPage === 'dashboard' ? 'active' : ''}`}
          onClick={() => onPageChange('dashboard')}
        >
          Dashboard
        </button>
        <button 
          className={`nav-link ${currentPage === 'charts' ? 'active' : ''}`}
          onClick={() => onPageChange('charts')}
        >
          Charts
        </button>
        <button 
          className={`nav-link ${currentPage === 'rawdata' ? 'active' : ''}`}
          onClick={() => onPageChange('rawdata')}
        >
          Raw Data
        </button>
      </div>
    </nav>
  );
};

export default Navigation;