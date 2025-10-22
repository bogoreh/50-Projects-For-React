import axios from 'axios';

const API_KEY = 'your_marketstack_api_key'; // Get from https://marketstack.com/
const BASE_URL = 'http://api.marketstack.com/v1';

const api = axios.create({
  baseURL: BASE_URL,
});

export const stockApi = {
  getHistoricalData: async (symbols = ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'TSLA']) => {
    try {
      const requests = symbols.map(symbol =>
        api.get('/eod', {
          params: {
            access_key: API_KEY,
            symbols: symbol,
            limit: 30, // Last 30 days
          }
        })
      );

      const responses = await Promise.all(requests);
      return responses.map((response, index) => ({
        symbol: symbols[index],
        data: response.data.data || []
      }));
    } catch (error) {
      console.error('Error fetching stock data:', error);
      return [];
    }
  }
};

// Mock data for development
export const mockStockData = {
  AAPL: Array.from({ length: 30 }, (_, i) => ({
    date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    open: 150 + Math.random() * 10,
    high: 155 + Math.random() * 10,
    low: 148 + Math.random() * 10,
    close: 152 + Math.random() * 10,
    volume: 1000000 + Math.random() * 5000000
  })),
  MSFT: Array.from({ length: 30 }, (_, i) => ({
    date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    open: 300 + Math.random() * 20,
    high: 310 + Math.random() * 20,
    low: 295 + Math.random() * 20,
    close: 305 + Math.random() * 20,
    volume: 2000000 + Math.random() * 4000000
  })),
  GOOGL: Array.from({ length: 30 }, (_, i) => ({
    date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    open: 120 + Math.random() * 15,
    high: 125 + Math.random() * 15,
    low: 118 + Math.random() * 15,
    close: 122 + Math.random() * 15,
    volume: 1500000 + Math.random() * 3000000
  }))
};