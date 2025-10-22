import React from 'react';
import './StockTable.css';

const StockTable = ({ stockData }) => {
  const stocks = Object.keys(stockData);

  const getLatestData = (stock) => {
    const data = stockData[stock];
    return data && data.length > 0 ? data[data.length - 1] : null;
  };

  const calculateChange = (stock) => {
    const data = stockData[stock];
    if (!data || data.length < 2) return 0;
    
    const current = data[data.length - 1].close;
    const previous = data[data.length - 2].close;
    return ((current - previous) / previous * 100).toFixed(2);
  };

  return (
    <div className="stock-table">
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Price</th>
            <th>Change</th>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map(stock => {
            const latest = getLatestData(stock);
            if (!latest) return null;

            const change = calculateChange(stock);
            
            return (
              <tr key={stock}>
                <td className="symbol">{stock}</td>
                <td>${latest.close.toFixed(2)}</td>
                <td className={change >= 0 ? 'positive' : 'negative'}>
                  {change}%
                </td>
                <td>${latest.open.toFixed(2)}</td>
                <td>${latest.high.toFixed(2)}</td>
                <td>${latest.low.toFixed(2)}</td>
                <td>{latest.volume.toLocaleString()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;