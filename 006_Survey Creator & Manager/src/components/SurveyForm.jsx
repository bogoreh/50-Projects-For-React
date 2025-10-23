import { useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import Button from './UI/Button'

const SurveyForm = ({ onSurveyCreated }) => {
  const [surveys, setSurveys] = useLocalStorage('surveys', [])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    technology: '',
    techRating: 5,
    entertainment: '',
    entRating: 5,
    comments: ''
  })

  const technologies = [
    'JavaScript',
    'Python',
    'React',
    'Vue.js',
    'Node.js',
    'TypeScript',
    'Go',
    'Rust'
  ]

  const entertainmentOptions = [
    'Netflix',
    'YouTube',
    'Spotify',
    'Video Games',
    'Reading',
    'Social Media',
    'Podcasts',
    'Movies'
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    const newSurvey = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      ...formData
    }
    
    setSurveys([...surveys, newSurvey])
    setFormData({
      name: '',
      email: '',
      technology: '',
      techRating: 5,
      entertainment: '',
      entRating: 5,
      comments: ''
    })
    onSurveyCreated()
    alert('Survey submitted successfully! 🎉')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="survey-form-container">
      <div className="form-card">
        <h2>Create New Survey</h2>
        <form onSubmit={handleSubmit} className="survey-form">
          <div className="form-group">
            <label>Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Favorite Technology *</label>
              <select
                name="technology"
                value={formData.technology}
                onChange={handleChange}
                required
              >
                <option value="">Select a technology</option>
                {technologies.map(tech => (
                  <option key={tech} value={tech}>{tech}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Rating: {formData.techRating} ⭐</label>
              <input
                type="range"
                name="techRating"
                min="1"
                max="10"
                value={formData.techRating}
                onChange={handleChange}
                className="rating-slider"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Favorite Entertainment *</label>
              <select
                name="entertainment"
                value={formData.entertainment}
                onChange={handleChange}
                required
              >
                <option value="">Select entertainment</option>
                {entertainmentOptions.map(ent => (
                  <option key={ent} value={ent}>{ent}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Rating: {formData.entRating} ⭐</label>
              <input
                type="range"
                name="entRating"
                min="1"
                max="10"
                value={formData.entRating}
                onChange={handleChange}
                className="rating-slider"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Additional Comments</label>
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              placeholder="Share your thoughts..."
              rows="4"
            />
          </div>

          <Button type="submit" variant="primary">
            Submit Survey 📤
          </Button>
        </form>
      </div>
    </div>
  )
}

export default SurveyForm