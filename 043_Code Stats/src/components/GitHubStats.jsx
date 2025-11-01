import React from 'react'
import useGitHub from '../hooks/useGitHub'
import ProjectCard from './ProjectCard'
import LoadingSpinner from './LoadingSpinner'

const GitHubStats = ({ username }) => {
  const { userData, repos, loading, error } = useGitHub(username)

  if (loading) return <LoadingSpinner />
  if (error) return <div className="error">Error: {error}</div>
  if (!userData) return null

  return (
    <div className="github-stats">
      <div className="user-profile">
        <img
          src={userData.avatar_url}
          alt={`${username}'s avatar`}
          className="avatar"
        />
        <div className="user-info">
          <h2>{userData.name || username}</h2>
          <p>{userData.bio}</p>
          <div className="stats">
            <div className="stat">
              <strong>{userData.public_repos}</strong>
              <span>Repositories</span>
            </div>
            <div className="stat">
              <strong>{userData.followers}</strong>
              <span>Followers</span>
            </div>
            <div className="stat">
              <strong>{userData.following}</strong>
              <span>Following</span>
            </div>
          </div>
        </div>
      </div>

      <div className="projects-section">
        <h3>Top Projects</h3>
        <div className="projects-grid">
          {repos.slice(0, 6).map((repo) => (
            <ProjectCard key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default GitHubStats