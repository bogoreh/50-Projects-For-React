import React from 'react'
import Header from './components/Header/Header'
import Piano from './components/Piano/Piano'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Piano />
      </main>
    </div>
  )
}

export default App