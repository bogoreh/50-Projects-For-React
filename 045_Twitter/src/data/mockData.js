export const currentUser = {
  id: 1,
  name: "John Doe",
  username: "johndoe",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
}

export const initialTweets = [
  {
    id: 1,
    content: "Just learned how to build a Twitter clone with React and Vite! 🚀",
    user: {
      id: 2,
      name: "Jane Smith",
      username: "janesmith",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    likes: 15,
    retweets: 3
  },
  {
    id: 2,
    content: "Beautiful day for coding! ☀️ What are you working on today?",
    user: {
      id: 3,
      name: "Mike Johnson",
      username: "mikej",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    timestamp: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
    likes: 8,
    retweets: 1
  },
  {
    id: 3,
    content: "React is amazing for building UI components! 💻",
    user: currentUser,
    timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
    likes: 25,
    retweets: 7
  }
]