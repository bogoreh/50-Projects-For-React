import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/App.css'

// Simple components for testing
const Header = () => (
  <header className="header">
    <div className="container">
      <h1>React Nexus 2025</h1>
      <p className="tagline">Connecting the Future of React Development</p>
    </div>
  </header>
)

const Navbar = () => (
  <nav className="navbar">
    <div className="container">
      <a href="/" className="nav-item">Home</a>
      <a href="#schedule" className="nav-item">Schedule</a>
      <a href="#speakers" className="nav-item">Speakers</a>
    </div>
  </nav>
)

const Home = () => (
  <div className="page">
    <div className="container">
      <h2>Welcome to React Conference 2024</h2>
      <p>Join us for an amazing conference experience!</p>
      <div className="cta-buttons">
        <button className="btn btn-primary">View Schedule</button>
        <button className="btn btn-secondary">See Speakers</button>
      </div>
    </div>
  </div>
)

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App