import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StockChart = ({ 
  data, 
  type = 'line', 
  metric = 'close', 
  title = '',
  height = 300,
  showLabels = true,
  compare = false,
  stocks = []
}) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: !!title,
        text: title,
      },
    },
    scales: {
      x: {
        display: showLabels,
        grid: {
          display: false,
        },
      },
      y: {
        display: showLabels,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
  };

  const getChartData = () => {
    if (compare && stocks.length > 0) {
      const labels = data.slice(0, 30).map(item => item.date).reverse();
      
      return {
        labels,
        datasets: stocks.map((stock, index) => {
          const colors = ['#007bff', '#28a745', '#dc3545', '#ffc107', '#6f42c1'];
          const stockData = data.filter(item => item.symbol === stock)
            .slice(0, 30)
            .map(item => item[Array.isArray(metric) ? metric[0] : metric])
            .reverse();
          
          return {
            label: stock,
            data: stockData,
            borderColor: colors[index % colors.length],
            backgroundColor: colors[index % colors.length] + '20',
            tension: 0.1,
          };
        }),
      };
    }

    const chartData = Array.isArray(data) ? data : [];
    const labels = chartData.map(item => item.date).reverse();
    
    if (Array.isArray(metric)) {
      return {
        labels,
        datasets: metric.map((m, index) => {
          const colors = ['#007bff', '#dc3545', '#28a745'];
          return {
            label: m.toUpperCase(),
            data: chartData.map(item => item[m]).reverse(),
            borderColor: colors[index % colors.length],
            backgroundColor: colors[index % colors.length] + '20',
            tension: 0.1,
          };
        }),
      };
    }

    return {
      labels,
      datasets: [
        {
          label: metric.toUpperCase(),
          data: chartData.map(item => item[metric]).reverse(),
          borderColor: '#007bff',
          backgroundColor: type === 'bar' ? '#007bff' : '#007bff20',
          tension: 0.1,
          fill: type === 'line',
        },
      ],
    };
  };

  const chartData = getChartData();

  return (
    <div className="stock-chart" style={{ height: `${height}px` }}>
      {type === 'line' ? (
        <Line data={chartData} options={options} />
      ) : (
        <Bar data={chartData} options={options} />
      )}
    </div>
  );
};

export default StockChart;