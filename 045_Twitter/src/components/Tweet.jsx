function Tweet({ tweet, onLike }) {
  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    })
  }

  return (
    <div className="tweet">
      <div className="tweet-avatar">
        <img src={tweet.user.avatar} alt={tweet.user.name} />
      </div>
      
      <div className="tweet-content">
        <div className="tweet-header">
          <span className="tweet-author">{tweet.user.name}</span>
          <span className="tweet-username">@{tweet.user.username}</span>
          <span className="tweet-time">{formatTime(tweet.timestamp)}</span>
        </div>
        
        <div className="tweet-text">
          {tweet.content}
        </div>
        
        <div className="tweet-actions">
          <button 
            className="like-btn"
            onClick={() => onLike(tweet.id)}
          >
            ❤️ {tweet.likes}
          </button>
          <button className="retweet-btn">
            🔄 {tweet.retweets}
          </button>
          <button className="reply-btn">
            💬
          </button>
        </div>
      </div>
    </div>
  )
}

export default Tweet