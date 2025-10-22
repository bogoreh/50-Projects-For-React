import React, { useState, useEffect } from 'react';
import StockChart from '../components/StockChart';
import { mockStockData } from '../services/stockApi';
import './ChartsPage.css';

const ChartsPage = () => {
  const [stockData, setStockData] = useState({});
  const [selectedStock, setSelectedStock] = useState('AAPL');

  useEffect(() => {
    setStockData(mockStockData);
  }, []);

  const stocks = Object.keys(stockData);

  return (
    <div className="charts-page">
      <div className="page-header">
        <h1>Detailed Stock Charts</h1>
        <p>Interactive charts for in-depth analysis</p>
      </div>

      <div className="stock-selector">
        <label>Select Stock: </label>
        <select 
          value={selectedStock} 
          onChange={(e) => setSelectedStock(e.target.value)}
        >
          {stocks.map(stock => (
            <option key={stock} value={stock}>{stock}</option>
          ))}
        </select>
      </div>

      <div className="charts-grid">
        <div className="chart-container">
          <h3>Price Movement - {selectedStock}</h3>
          <StockChart 
            data={stockData[selectedStock]} 
            type="line" 
            metric="close"
            title={`${selectedStock} Closing Prices`}
          />
        </div>

        <div className="chart-container">
          <h3>Daily High/Low - {selectedStock}</h3>
          <StockChart 
            data={stockData[selectedStock]} 
            type="bar" 
            metric={['high', 'low']}
            title={`${selectedStock} High/Low Prices`}
          />
        </div>

        <div className="chart-container">
          <h3>Volume Traded - {selectedStock}</h3>
          <StockChart 
            data={stockData[selectedStock]} 
            type="line" 
            metric="volume"
            title={`${selectedStock} Trading Volume`}
          />
        </div>

        <div className="chart-container">
          <h3>Open vs Close - {selectedStock}</h3>
          <StockChart 
            data={stockData[selectedStock]} 
            type="line" 
            metric={['open', 'close']}
            title={`${selectedStock} Open vs Close Prices`}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartsPage;