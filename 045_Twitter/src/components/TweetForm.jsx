import { useState } from 'react'

function TweetForm({ onTweet }) {
  const [tweetContent, setTweetContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (tweetContent.trim()) {
      onTweet(tweetContent)
      setTweetContent('')
    }
  }

  return (
    <div className="tweet-form">
      <form onSubmit={handleSubmit}>
        <textarea
          value={tweetContent}
          onChange={(e) => setTweetContent(e.target.value)}
          placeholder="What's happening?"
          maxLength={280}
          rows={3}
        />
        <div className="tweet-form-actions">
          <span className="char-count">{tweetContent.length}/280</span>
          <button type="submit" disabled={!tweetContent.trim()}>
            Tweet
          </button>
        </div>
      </form>
    </div>
  )
}

export default TweetForm