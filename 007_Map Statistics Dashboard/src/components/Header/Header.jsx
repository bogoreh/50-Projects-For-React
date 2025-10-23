import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo">
          <div className="logo__icon">🦠</div>
          <h1>COVID-19 Dashboard</h1>
        </div>
        <div className="header__stats">
          <span>Last Updated: {new Date().toLocaleDateString()}</span>
        </div>
      </div>
    </header>
  )
}

export default Header