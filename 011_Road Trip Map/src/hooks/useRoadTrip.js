import { useState } from 'react'

export const useRoadTrip = (initialStops) => {
  const [currentStopIndex, setCurrentStopIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const currentStop = initialStops[currentStopIndex]
  const nextStop = initialStops[currentStopIndex + 1]
  const progress = ((currentStopIndex + 1) / initialStops.length) * 100

  return {
    currentStopIndex,
    setCurrentStopIndex,
    isPlaying,
    setIsPlaying,
    currentStop,
    nextStop,
    progress
  }
}