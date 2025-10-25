import React from 'react'
import SubscribeForm from './SubscribeForm'

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <div className="newsletter-content">
        <div className="newsletter-text">
          <div className="badge">NEWSLETTER</div>
          <h1 className="newsletter-title">
            Stay Ahead with Our Updates
          </h1>
          <p className="newsletter-description">
            Get exclusive insights, industry trends, and professional content 
            delivered to your inbox. Join professionals who stay informed.
          </p>
          
          <div className="features-list">
            <div className="feature-item">
              <span className="feature-icon">🔍</span>
              <span>Industry insights</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">💼</span>
              <span>Professional content</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">⚡</span>
              <span>Weekly updates</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🔒</span>
              <span>Privacy first</span>
            </div>
          </div>
        </div>
        
        <div className="newsletter-form-section">
          <SubscribeForm />
        </div>
      </div>
    </div>
  )
}

export default Newsletter