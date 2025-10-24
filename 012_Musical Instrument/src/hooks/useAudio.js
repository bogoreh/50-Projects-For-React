import { useRef, useCallback } from 'react'

const useAudio = () => {
  const audioContextRef = useRef(null)
  const oscillatorsRef = useRef({})

  const playNote = useCallback((frequency) => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)()
    }

    // Stop existing oscillator for this frequency if it exists
    if (oscillatorsRef.current[frequency]) {
      oscillatorsRef.current[frequency].stop()
      delete oscillatorsRef.current[frequency]
    }

    const oscillator = audioContextRef.current.createOscillator()
    const gainNode = audioContextRef.current.createGain()

    oscillator.type = 'sine'
    oscillator.frequency.value = frequency
    gainNode.gain.value = 0.3

    oscillator.connect(gainNode)
    gainNode.connect(audioContextRef.current.destination)

    // Add fade out
    gainNode.gain.setValueAtTime(0.3, audioContextRef.current.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContextRef.current.currentTime + 1.5)

    oscillator.start()
    oscillatorsRef.current[frequency] = oscillator

    // Stop oscillator after 1.5 seconds
    setTimeout(() => {
      if (oscillatorsRef.current[frequency]) {
        oscillatorsRef.current[frequency].stop()
        delete oscillatorsRef.current[frequency]
      }
    }, 1500)
  }, [])

  const stopNote = useCallback((frequency) => {
    if (oscillatorsRef.current[frequency]) {
      oscillatorsRef.current[frequency].stop()
      delete oscillatorsRef.current[frequency]
    }
  }, [])

  return { playNote, stopNote }
}

export default useAudio