import React from 'react'
import { useCart } from '../../context/CartContext'
import './Header.css'

const Header = ({ onCartClick }) => {
  const { getCartItemsCount } = useCart()

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>GameHub</h1>
          <span>Games & Gear</span>
        </div>
        
        <nav className="nav">
          <button className="cart-btn" onClick={onCartClick}>
            <span>🛒</span>
            <span className="cart-count">{getCartItemsCount()}</span>
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header