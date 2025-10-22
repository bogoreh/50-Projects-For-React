import React, { useState, useEffect } from 'react';
import Dashboard from '../components/Dashboard';
import StockTable from '../components/StockTable';
import { mockStockData } from '../services/stockApi';
import './DashboardPage.css';

const DashboardPage = () => {
  const [stockData, setStockData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setStockData(mockStockData);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading stock data...</p>
      </div>
    );
  }

  return (
    <div className="dashboard-page">
      <div className="page-header">
        <h1>Tech Stocks Dashboard</h1>
        <p>Real-time performance metrics and analytics</p>
      </div>
      
      <div className="dashboard-grid">
        <div className="dashboard-section">
          <h2>Performance Overview</h2>
          <Dashboard stockData={stockData} />
        </div>
        
        <div className="dashboard-section">
          <h2>Historical Data</h2>
          <StockTable stockData={stockData} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;