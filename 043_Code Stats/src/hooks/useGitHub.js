import { useState, useEffect } from 'react'

const useGitHub = (username) => {
  const [userData, setUserData] = useState(null)
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!username) return

    const fetchData = async () => {
      setLoading(true)
      setError(null)

      try {
        // Fetch user data
        const userResponse = await fetch(
          `https://api.github.com/users/${username}`
        )
        if (!userResponse.ok) throw new Error('User not found')
        const userData = await userResponse.json()
        setUserData(userData)

        // Fetch repositories
        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos?sort=stars&per_page=100`
        )
        if (!reposResponse.ok) throw new Error('Failed to fetch repositories')
        const reposData = await reposResponse.json()
        
        // Sort by stars and take top repos
        const sortedRepos = reposData
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 10)
        setRepos(sortedRepos)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [username])

  return { userData, repos, loading, error }
}

export default useGitHub