import { useEffect, useRef } from 'react'

const Map = ({ currentStopIndex, roadTripData }) => {
  const mapRef = useRef(null)

  useEffect(() => {
    // Initialize map (using Leaflet-like coordinates)
    const initMap = () => {
      const canvas = mapRef.current
      const ctx = canvas.getContext('2d')
      
      // Set canvas size
      canvas.width = 800
      canvas.height = 500
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw USA outline (simplified)
      drawUSAOutline(ctx)
      
      // Draw route
      drawRoute(ctx, roadTripData)
      
      // Draw current stop
      drawCurrentStop(ctx, roadTripData[currentStopIndex])
      
      // Draw all stops
      roadTripData.forEach((stop, index) => {
        drawStop(ctx, stop, index === currentStopIndex)
      })
    }

    const drawUSAOutline = (ctx) => {
      ctx.strokeStyle = '#e2e8f0'
      ctx.lineWidth = 1
      ctx.strokeRect(50, 50, 700, 400)
      
      // Add some simple geographic features
      ctx.fillStyle = '#f8fafc'
      ctx.fillRect(50, 50, 700, 400)
    }

    const drawRoute = (ctx, stops) => {
      if (stops.length < 2) return
      
      ctx.strokeStyle = '#3b82f6'
      ctx.lineWidth = 3
      ctx.setLineDash([])
      ctx.beginPath()
      
      stops.forEach((stop, index) => {
        const x = 50 + (stop.coordinates.lng + 125) * 5
        const y = 450 - (stop.coordinates.lat - 25) * 8
        
        if (index === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      })
      
      ctx.stroke()
    }

    const drawStop = (ctx, stop, isCurrent) => {
      const x = 50 + (stop.coordinates.lng + 125) * 5
      const y = 450 - (stop.coordinates.lat - 25) * 8
      
      // Draw stop point
      ctx.fillStyle = isCurrent ? '#ef4444' : '#3b82f6'
      ctx.beginPath()
      ctx.arc(x, y, isCurrent ? 8 : 6, 0, 2 * Math.PI)
      ctx.fill()
      
      // Add glow for current stop
      if (isCurrent) {
        ctx.shadowColor = '#ef4444'
        ctx.shadowBlur = 15
        ctx.beginPath()
        ctx.arc(x, y, 12, 0, 2 * Math.PI)
        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    const drawCurrentStop = (ctx, stop) => {
      const x = 50 + (stop.coordinates.lng + 125) * 5
      const y = 450 - (stop.coordinates.lat - 25) * 8
      
      // Draw pulsing animation for current stop
      ctx.strokeStyle = '#ef4444'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(x, y, 15, 0, 2 * Math.PI)
      ctx.stroke()
    }

    initMap()
  }, [currentStopIndex, roadTripData])

  return (
    <div className="map">
      <canvas 
        ref={mapRef} 
        className="map-canvas"
      />
    </div>
  )
}

export default Map