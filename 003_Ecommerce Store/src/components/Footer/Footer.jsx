import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>GameHub</h3>
          <p>Your ultimate destination for games and gaming gear.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#games">Games</a></li>
            <li><a href="#gear">Gear</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: support@gamehub.com</p>
          <p>Phone: (555) 123-GAME</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 GameHub. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer