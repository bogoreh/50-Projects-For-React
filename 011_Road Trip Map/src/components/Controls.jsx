import { useEffect } from 'react'

const Controls = ({ 
  currentStopIndex, 
  setCurrentStopIndex, 
  isPlaying, 
  setIsPlaying, 
  totalStops 
}) => {

  useEffect(() => {
    let interval
    if (isPlaying && currentStopIndex < totalStops - 1) {
      interval = setInterval(() => {
        setCurrentStopIndex(prev => {
          if (prev >= totalStops - 1) {
            setIsPlaying(false)
            return prev
          }
          return prev + 1
        })
      }, 2000)
    }

    return () => clearInterval(interval)
  }, [isPlaying, currentStopIndex, totalStops, setCurrentStopIndex, setIsPlaying])

  const handlePrevious = () => {
    if (currentStopIndex > 0) {
      setCurrentStopIndex(currentStopIndex - 1)
    }
  }

  const handleNext = () => {
    if (currentStopIndex < totalStops - 1) {
      setCurrentStopIndex(currentStopIndex + 1)
    }
  }

  const handlePlayPause = () => {
    if (currentStopIndex >= totalStops - 1) {
      setCurrentStopIndex(0)
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="controls">
      <div className="control-buttons">
        <button 
          onClick={handlePrevious}
          disabled={currentStopIndex === 0}
          className="control-btn"
        >
          ⏮ Previous
        </button>
        
        <button 
          onClick={handlePlayPause}
          className="control-btn play-pause"
        >
          {isPlaying ? '⏸ Pause' : '▶ Play'}
        </button>
        
        <button 
          onClick={handleNext}
          disabled={currentStopIndex === totalStops - 1}
          className="control-btn"
        >
          Next ⏭
        </button>
      </div>
      
      <div className="stop-navigation">
        {Array.from({ length: totalStops }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentStopIndex(index)}
            className={`stop-dot ${index === currentStopIndex ? 'active' : ''} ${
              index < currentStopIndex ? 'visited' : ''
            }`}
            title={`Go to ${index + 1}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Controls