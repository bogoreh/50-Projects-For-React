import React, { useState, useEffect } from 'react';
import { mockStockData } from '../services/stockApi';
import './RawDataPage.css';

const RawDataPage = () => {
  const [stockData, setStockData] = useState({});
  const [selectedStock, setSelectedStock] = useState('AAPL');

  useEffect(() => {
    setStockData(mockStockData);
  }, []);

  const currentData = stockData[selectedStock] || [];

  return (
    <div className="raw-data-page">
      <div className="page-header">
        <h1>Raw Stock Data</h1>
        <p>Complete historical data for detailed analysis</p>
      </div>

      <div className="stock-selector">
        <label>Select Stock: </label>
        <select 
          value={selectedStock} 
          onChange={(e) => setSelectedStock(e.target.value)}
        >
          {Object.keys(stockData).map(stock => (
            <option key={stock} value={stock}>{stock}</option>
          ))}
        </select>
      </div>

      <div className="data-table-container">
        <h3>Historical Data for {selectedStock}</h3>
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Open</th>
                <th>High</th>
                <th>Low</th>
                <th>Close</th>
                <th>Volume</th>
                <th>Change</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((day, index) => {
                const change = index > 0 ? 
                  ((day.close - currentData[index - 1].close) / currentData[index - 1].close * 100).toFixed(2) 
                  : '0.00';
                
                return (
                  <tr key={index}>
                    <td>{day.date}</td>
                    <td>${day.open.toFixed(2)}</td>
                    <td>${day.high.toFixed(2)}</td>
                    <td>${day.low.toFixed(2)}</td>
                    <td>${day.close.toFixed(2)}</td>
                    <td>{day.volume.toLocaleString()}</td>
                    <td className={change >= 0 ? 'positive' : 'negative'}>
                      {change}%
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RawDataPage;