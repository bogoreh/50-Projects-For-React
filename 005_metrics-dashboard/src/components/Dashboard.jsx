import React from 'react';
import StockChart from './StockChart';
import './Dashboard.css';

const Dashboard = ({ stockData }) => {
  const stocks = Object.keys(stockData);

  return (
    <div className="dashboard">
      <div className="metrics-grid">
        {stocks.map(stock => (
          <div key={stock} className="metric-card">
            <h3>{stock}</h3>
            {stockData[stock] && stockData[stock].length > 0 && (
              <>
                <div className="metric-value">
                  ${stockData[stock][stockData[stock].length - 1].close.toFixed(2)}
                </div>
                <div className="metric-chart">
                  <StockChart 
                    data={stockData[stock]} 
                    type="line" 
                    metric="close"
                    height={80}
                    showLabels={false}
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="main-chart">
        <h3>Tech Stocks Performance Comparison</h3>
        <StockChart 
          data={Object.values(stockData).flat()} 
          type="line" 
          metric="close"
          compare={true}
          stocks={stocks}
        />
      </div>
    </div>
  );
};

export default Dashboard;