import { useState, useEffect } from 'react'

const CLIENT_ID = 'your_spotify_client_id' // Replace with your Spotify Client ID
const REDIRECT_URI = 'http://localhost:5173' // Your Vite dev server URL
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
const RESPONSE_TYPE = 'token'
const SCOPES = 'streaming user-read-email user-read-private'

export const useSpotify = () => {
  const [token, setToken] = useState('')
  const [tracks, setTracks] = useState([])
  const [currentTrack, setCurrentTrack] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem('spotify_token')

    if (!token && hash) {
      token = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1]
      window.location.hash = ''
      window.localStorage.setItem('spotify_token', token)
    }

    setToken(token)
  }, [])

  const login = () => {
    window.location = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPES}`
  }

  const logout = () => {
    setToken('')
    window.localStorage.removeItem('spotify_token')
  }

  const searchTracks = async (query) => {
    try {
      const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=20`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      const data = await response.json()
      setTracks(data.tracks?.items || [])
    } catch (error) {
      console.error('Error searching tracks:', error)
    }
  }

  const playTrack = (track) => {
    setCurrentTrack(track)
    setIsPlaying(true)
    // In a real implementation, you would use the Spotify Web Playback SDK here
    console.log('Playing:', track.name)
  }

  const pauseTrack = () => {
    setIsPlaying(false)
    // In a real implementation, you would use the Spotify Web Playback SDK here
    console.log('Paused')
  }

  return {
    isAuthenticated: !!token,
    login,
    logout,
    searchTracks,
    tracks,
    currentTrack,
    playTrack,
    pauseTrack,
    isPlaying
  }
}