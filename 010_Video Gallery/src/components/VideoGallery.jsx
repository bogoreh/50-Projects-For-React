import React from 'react'
import useYouTubePlaylist from '../hooks/useYouTubePlaylist'
import VideoCard from './VideoCard'

const VideoGallery = () => {
  const { videos, loading, error } = useYouTubePlaylist()

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading amazing tutorials...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="error-container">
        <p>Error: {error}</p>
      </div>
    )
  }

  return (
    <div className="video-gallery">
      <div className="gallery-header">
        <h2>Featured Tutorials</h2>
        <p>{videos.length} premium videos available</p>
      </div>
      <div className="videos-grid">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  )
}

export default VideoGallery