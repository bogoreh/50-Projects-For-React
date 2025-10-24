const RouteInfo = ({ currentStopIndex, roadTripData }) => {
  const currentStop = roadTripData[currentStopIndex]
  const nextStop = roadTripData[currentStopIndex + 1]
  const progress = ((currentStopIndex + 1) / roadTripData.length) * 100

  return (
    <div className="route-info">
      <div className="progress-bar">
        <div 
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <div className="current-stop">
        <h2>📍 Current Stop: {currentStop.city}</h2>
        <div className="stop-details">
          <p><strong>State:</strong> {currentStop.state}</p>
          <p><strong>Date:</strong> {currentStop.date}</p>
          <p><strong>Highlights:</strong> {currentStop.highlights}</p>
        </div>
      </div>

      {nextStop && (
        <div className="next-stop">
          <h3>🚦 Next Stop: {nextStop.city}</h3>
          <p><strong>Distance:</strong> {nextStop.distanceFromPrevious} miles</p>
          <p><strong>Estimated Drive:</strong> {nextStop.driveTime}</p>
        </div>
      )}

      <div className="trip-stats">
        <div className="stat">
          <span className="stat-label">Stops Completed</span>
          <span className="stat-value">{currentStopIndex + 1}/{roadTripData.length}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Total Distance</span>
          <span className="stat-value">
            {roadTripData.slice(0, currentStopIndex + 1).reduce((acc, stop) => 
              acc + (stop.distanceFromPrevious || 0), 0
            )} miles
          </span>
        </div>
      </div>
    </div>
  )
}

export default RouteInfo