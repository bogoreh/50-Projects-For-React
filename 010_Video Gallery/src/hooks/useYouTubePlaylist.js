import { useState, useEffect } from 'react'

const API_KEY = 'YOUR_YOUTUBE_API_KEY' // Replace with your YouTube API key
const PLAYLIST_ID = 'PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d' // React playlist ID (example)

const useYouTubePlaylist = () => {
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPlaylistVideos = async () => {
      try {
        setLoading(true)
        // For demo purposes, we'll use mock data since API keys are required
        // In production, you would use the YouTube Data API
        const mockVideos = [
          {
            id: '1',
            snippet: {
              title: 'React Tutorial #1 - Introduction & Setup',
              description: 'Get started with React in this comprehensive tutorial series',
              thumbnails: {
                high: {
                  url: 'https://i.ytimg.com/vi/j942wKiXFu8/hqdefault.jpg'
                }
              }
            },
            contentDetails: {
              videoId: 'j942wKiXFu8'
            }
          },
          {
            id: '2',
            snippet: {
              title: 'React Tutorial #2 - Components & JSX',
              description: 'Learn about React components and JSX syntax',
              thumbnails: {
                high: {
                  url: 'https://i.ytimg.com/vi/7fPXI_MnBOY/hqdefault.jpg'
                }
              }
            },
            contentDetails: {
              videoId: '7fPXI_MnBOY'
            }
          },
          {
            id: '3',
            snippet: {
              title: 'React Tutorial #3 - State & Props',
              description: 'Understanding state and props in React components',
              thumbnails: {
                high: {
                  url: 'https://i.ytimg.com/vi/IV7J-Z8cpso/hqdefault.jpg'
                }
              }
            },
            contentDetails: {
              videoId: 'IV7J-Z8cpso'
            }
          },
          {
            id: '4',
            snippet: {
              title: 'React Tutorial #4 - Event Handling',
              description: 'Learn how to handle events in React applications',
              thumbnails: {
                high: {
                  url: 'https://i.ytimg.com/vi/bMknfKXIFA8/hqdefault.jpg'
                }
              }
            },
            contentDetails: {
              videoId: 'bMknfKXIFA8'
            }
          },
          {
            id: '5',
            snippet: {
              title: 'React Tutorial #5 - React Hooks',
              description: 'Master React Hooks for functional components',
              thumbnails: {
                high: {
                  url: 'https://i.ytimg.com/vi/9jULHSe41ls/hqdefault.jpg'
                }
              }
            },
            contentDetails: {
              videoId: '9jULHSe41ls'
            }
          },
          {
            id: '6',
            snippet: {
              title: 'React Tutorial #6 - Custom Hooks',
              description: 'Create and use custom hooks in your React applications',
              thumbnails: {
                high: {
                  url: 'https://i.ytimg.com/vi/6ThXsUwLWvc/hqdefault.jpg'
                }
              }
            },
            contentDetails: {
              videoId: '6ThXsUwLWvc'
            }
          }
        ]

        // Simulate API delay
        setTimeout(() => {
          setVideos(mockVideos)
          setLoading(false)
        }, 1000)

      } catch (err) {
        setError('Failed to fetch videos')
        setLoading(false)
      }
    }

    fetchPlaylistVideos()
  }, [])

  return { videos, loading, error }
}

export default useYouTubePlaylist