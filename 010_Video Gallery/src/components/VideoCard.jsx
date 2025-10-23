import React, { useState } from 'react'

const VideoCard = ({ video }) => {
  const [showVideo, setShowVideo] = useState(false)

  const handleThumbnailClick = () => {
    setShowVideo(true)
  }

  return (
    <div className="video-card">
      <div className="video-thumbnail" onClick={handleThumbnailClick}>
        {showVideo ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.contentDetails.videoId}`}
            title={video.snippet.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <>
            <img
              src={video.snippet.thumbnails.high.url}
              alt={video.snippet.title}
              className="thumbnail-image"
            />
            <div className="play-overlay">
              <div className="play-button">▶</div>
            </div>
          </>
        )}
      </div>
      <div className="video-info">
        <h3 className="video-title">{video.snippet.title}</h3>
        <p className="video-description">
          {video.snippet.description.substring(0, 100)}...
        </p>
      </div>
    </div>
  )
}

export default VideoCard