import { useState } from 'react'
import Map from './components/Map'
import RouteInfo from './components/RouteInfo'
import Controls from './components/Controls'
import { roadTripData } from './data/routeData'
import './styles/index.css'

function App() {
  const [currentStopIndex, setCurrentStopIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="app">
      <header className="app-header">
        <h1>🚗 Coast to Coast Road Trip</h1>
        <p>Follow our journey across the United States</p>
      </header>
      
      <div className="app-content">
        <div className="map-container">
          <Map 
            currentStopIndex={currentStopIndex}
            roadTripData={roadTripData}
          />
        </div>
        
        <div className="sidebar">
          <RouteInfo 
            currentStopIndex={currentStopIndex}
            roadTripData={roadTripData}
          />
          <Controls 
            currentStopIndex={currentStopIndex}
            setCurrentStopIndex={setCurrentStopIndex}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            totalStops={roadTripData.length}
          />
        </div>
      </div>
    </div>
  )
}

export default App