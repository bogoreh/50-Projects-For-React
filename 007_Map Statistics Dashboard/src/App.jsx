import React, { useState } from 'react'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import StatsCards from './components/Statistics/StatsCards'
import CovidMap from './components/Map/CovidMap'
import './App.css'

function App() {
  const [selectedCountry, setSelectedCountry] = useState('Global')

  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar 
          selectedCountry={selectedCountry}
          onCountrySelect={setSelectedCountry}
        />
        <div className="app__main">
          <StatsCards selectedCountry={selectedCountry} />
          <CovidMap 
            selectedCountry={selectedCountry}
            onCountrySelect={setSelectedCountry}
          />
        </div>
      </div>
    </div>
  )
}

export default App