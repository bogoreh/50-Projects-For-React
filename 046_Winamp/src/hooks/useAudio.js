import { useState, useRef, useEffect } from 'react'

export const useAudio = (url) => {
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef(new Audio(url))

  const toggle = () => setPlaying(!playing)

  useEffect(() => {
    if (playing) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [playing])

  useEffect(() => {
    audioRef.current.addEventListener('ended', () => setPlaying(false))
    return () => {
      audioRef.current.removeEventListener('ended', () => setPlaying(false))
    }
  }, [])

  return [playing, toggle]
}