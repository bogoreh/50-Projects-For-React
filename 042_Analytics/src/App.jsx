import React, { useState } from 'react';
import Layout from './components/Layout';
import { trackEvent } from './utils/analytics';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState('home');

  // Handle browser navigation
  React.useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      setCurrentPage(path === '/' ? 'home' : path.replace('/', ''));
    };

    window.addEventListener('popstate', handlePopState);
    handlePopState(); // Set initial page

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    trackEvent('increment', 'counter', 'button_click', newCount);
  };

  const handleDecrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    trackEvent('decrement', 'counter', 'button_click', newCount);
  };

  const handleReset = () => {
    setCount(0);
    trackEvent('reset', 'counter', 'button_click', 0);
  };

  const handleFeatureClick = (featureName) => {
    trackEvent('feature_used', 'engagement', featureName);
    alert(`Tracked: ${featureName}`);
  };

  const renderPageContent = () => {
    switch (currentPage) {
      case 'about':
        return (
          <div className="page-content">
            <h2>About Page</h2>
            <p>This is the about page with analytics tracking.</p>
            <button 
              className="feature-btn"
              onClick={() => handleFeatureClick('about_page_feature')}
            >
              Learn More
            </button>
          </div>
        );
      case 'contact':
        return (
          <div className="page-content">
            <h2>Contact Page</h2>
            <p>Get in touch with us.</p>
            <button 
              className="feature-btn"
              onClick={() => handleFeatureClick('contact_form')}
            >
              Contact Us
            </button>
          </div>
        );
      default:
        return (
          <div className="page-content">
            <h2>Home Page - Counter Demo</h2>
            <div className="counter-section">
              <p className="count-display">Count: {count}</p>
              <div className="button-group">
                <button className="btn btn-primary" onClick={handleIncrement}>
                  Increment +
                </button>
                <button className="btn btn-secondary" onClick={handleDecrement}>
                  Decrement -
                </button>
                <button className="btn btn-reset" onClick={handleReset}>
                  Reset
                </button>
              </div>
            </div>
            
            <div className="features-section">
              <h3>Test Analytics Events</h3>
              <div className="feature-buttons">
                <button 
                  className="feature-btn"
                  onClick={() => handleFeatureClick('premium_feature')}
                >
                  Try Premium Feature
                </button>
                <button 
                  className="feature-btn"
                  onClick={() => handleFeatureClick('download_ebook')}
                >
                  Download E-book
                </button>
                <button 
                  className="feature-btn"
                  onClick={() => handleFeatureClick('watch_video')}
                >
                  Watch Tutorial
                </button>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <Layout>
      <div className="app">
        {renderPageContent()}
      </div>
    </Layout>
  );
}

export default App;