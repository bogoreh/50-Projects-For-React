import { useState } from 'react'
import TweetForm from './components/TweetForm'
import Tweet from './components/Tweet'
import UserProfile from './components/UserProfile'
import { initialTweets, currentUser } from './data/mockData'
import './index.css'

function App() {
  const [tweets, setTweets] = useState(initialTweets)

  const addTweet = (content) => {
    const newTweet = {
      id: tweets.length + 1,
      content,
      user: currentUser,
      timestamp: new Date().toISOString(),
      likes: 0,
      retweets: 0
    }
    setTweets([newTweet, ...tweets])
  }

  const likeTweet = (tweetId) => {
    setTweets(tweets.map(tweet => 
      tweet.id === tweetId 
        ? { ...tweet, likes: tweet.likes + 1 }
        : tweet
    ))
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Twitter Clone</h1>
        <UserProfile user={currentUser} />
      </header>
      
      <main className="main-content">
        <div className="left-sidebar">
          {/* Navigation would go here */}
        </div>
        
        <div className="feed">
          <TweetForm onTweet={addTweet} />
          
          <div className="tweets-container">
            {tweets.map(tweet => (
              <Tweet 
                key={tweet.id} 
                tweet={tweet} 
                onLike={likeTweet}
              />
            ))}
          </div>
        </div>
        
        <div className="right-sidebar">
          {/* Trends would go here */}
        </div>
      </main>
    </div>
  )
}

export default App