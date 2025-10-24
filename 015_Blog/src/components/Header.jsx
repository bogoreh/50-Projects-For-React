import React from 'react'

const Header = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'blog', label: 'Blog' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' }
  ]

  return (
    <header className="header">
      <div className="container">
        <div className="nav-brand">
          <h1>My Career Journey</h1>
        </div>
        <nav className="nav">
          {navItems.map(item => (
            <button
              key={item.id}
              className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
              onClick={() => setCurrentPage(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header