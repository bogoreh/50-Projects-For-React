import React, { useState, useEffect } from 'react'
import { useSpotify } from './hooks/useSpotify'
import Player from './components/Player/Player'
import Playlist from './components/Playlist/Playlist'
import Equalizer from './components/Equalizer/Equalizer'
import Window from './components/Window/Window'
import './App.css'

function App() {
  const {
    isAuthenticated,
    login,
    searchTracks,
    tracks,
    currentTrack,
    playTrack,
    pauseTrack,
    isPlaying
  } = useSpotify()

  const [activeWindow, setActiveWindow] = useState('player')

  if (!isAuthenticated) {
    return (
      <div className="app">
        <div className="login-screen">
          <h1>Winamp Spotify Clone</h1>
          <button onClick={login} className="login-btn">
            Login with Spotify
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <Window
        title="Winamp"
        isActive={activeWindow === 'player'}
        onActivate={() => setActiveWindow('player')}
      >
        <Player
          currentTrack={currentTrack}
          isPlaying={isPlaying}
          onPlay={playTrack}
          onPause={pauseTrack}
        />
      </Window>

      <Window
        title="Playlist"
        isActive={activeWindow === 'playlist'}
        onActivate={() => setActiveWindow('playlist')}
      >
        <Playlist
          tracks={tracks}
          onSearch={searchTracks}
          onTrackSelect={playTrack}
          currentTrack={currentTrack}
        />
      </Window>

      <Window
        title="Equalizer"
        isActive={activeWindow === 'equalizer'}
        onActivate={() => setActiveWindow('equalizer')}
      >
        <Equalizer />
      </Window>
    </div>
  )
}

export default App