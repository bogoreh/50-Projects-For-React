import { useLocalStorage } from '../hooks/useLocalStorage'
import Card from './UI/Card'

const SurveyList = () => {
  const [surveys] = useLocalStorage('surveys', [])

  if (surveys.length === 0) {
    return (
      <div className="empty-state">
        <h3>No surveys yet 📝</h3>
        <p>Be the first to create a survey!</p>
      </div>
    )
  }

  return (
    <div className="survey-list">
      <div className="survey-header">
        <h2>All Surveys ({surveys.length})</h2>
      </div>
      
      <div className="surveys-grid">
        {surveys.map(survey => (
          <Card key={survey.id} className="survey-card">
            <div className="survey-card-header">
              <h3>{survey.name}</h3>
              <span className="email">{survey.email}</span>
            </div>
            
            <div className="survey-details">
              <div className="detail-item">
                <span className="label">Technology:</span>
                <span className="value">{survey.technology}</span>
                <div className="rating">
                  {'⭐'.repeat(survey.techRating)}
                </div>
              </div>
              
              <div className="detail-item">
                <span className="label">Entertainment:</span>
                <span className="value">{survey.entertainment}</span>
                <div className="rating">
                  {'⭐'.repeat(survey.entRating)}
                </div>
              </div>
              
              {survey.comments && (
                <div className="detail-item">
                  <span className="label">Comments:</span>
                  <p className="comments">{survey.comments}</p>
                </div>
              )}
            </div>
            
            <div className="survey-footer">
              <small>{new Date(survey.timestamp).toLocaleDateString()}</small>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default SurveyList