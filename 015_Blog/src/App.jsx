import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Projects from './pages/Projects'
import About from './pages/About'
import './styles/globals.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />
      case 'blog':
        return <Blog />
      case 'projects':
        return <Projects />
      case 'about':
        return <About />
      default:
        return <Home />
    }
  }

  return (
    <div className="app">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}

export default App