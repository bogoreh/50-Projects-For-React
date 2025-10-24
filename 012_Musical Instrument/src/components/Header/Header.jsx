import React from 'react'
import './styles.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">🎹 Interactive Piano</h1>
        <p className="header-subtitle">
          Play with your keyboard (A-S-D-F-G-H-J) or click the keys
        </p>
      </div>
    </header>
  )
}

export default Header