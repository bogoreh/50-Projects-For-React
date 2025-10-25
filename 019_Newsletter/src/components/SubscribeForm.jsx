import React, { useState } from 'react'

const SubscribeForm = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!email) {
      alert('Please enter your email address')
      return
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email address')
      return
    }

    setIsLoading(true)
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      console.log('Subscribed email:', email)
      setIsSubscribed(true)
      setEmail('')
    } catch (error) {
      alert('Subscription failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubscribed) {
    return (
      <div className="success-message">
        <div className="success-icon">✅</div>
        <h3>Welcome to Our Community!</h3>
        <p>You've been successfully added to our professional newsletter.</p>
        <button 
          className="back-button"
          onClick={() => setIsSubscribed(false)}
        >
          Subscribe Another Email
        </button>
      </div>
    )
  }

  return (
    <div className="subscribe-form-container">
      <h2 className="form-title">Join Professionals</h2>
      <p className="form-description">
        Enter your work email to stay updated
      </p>
      
      <form onSubmit={handleSubmit} className="subscribe-form">
        <div className="input-group">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your work email"
            className="email-input"
            disabled={isLoading}
          />
        </div>
        
        <button 
          type="submit" 
          className={`subscribe-button ${isLoading ? 'loading' : ''}`}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span className="spinner"></span>
              Processing...
            </>
          ) : (
            'Get Professional Updates'
          )}
        </button>
      </form>
      
      <p className="privacy-note">
        🔒 We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  )
}

export default SubscribeForm