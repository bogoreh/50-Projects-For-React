import { useLocalStorage } from '../hooks/useLocalStorage'
import Card from './UI/Card'

const SurveyResults = () => {
  const [surveys] = useLocalStorage('surveys', [])

  const techStats = surveys.reduce((acc, survey) => {
    if (!acc[survey.technology]) {
      acc[survey.technology] = { count: 0, totalRating: 0 }
    }
    acc[survey.technology].count++
    acc[survey.technology].totalRating += parseInt(survey.techRating)
    return acc
  }, {})

  const entStats = surveys.reduce((acc, survey) => {
    if (!acc[survey.entertainment]) {
      acc[survey.entertainment] = { count: 0, totalRating: 0 }
    }
    acc[survey.entertainment].count++
    acc[survey.entertainment].totalRating += parseInt(survey.entRating)
    return acc
  }, {})

  const getTopItems = (stats) => {
    return Object.entries(stats)
      .map(([name, data]) => ({
        name,
        count: data.count,
        avgRating: (data.totalRating / data.count).toFixed(1)
      }))
      .sort((a, b) => b.count - a.count)
  }

  const topTech = getTopItems(techStats)
  const topEnt = getTopItems(entStats)

  if (surveys.length === 0) {
    return (
      <div className="empty-state">
        <h3>No data to display 📊</h3>
        <p>Create some surveys to see results!</p>
      </div>
    )
  }

  return (
    <div className="results-container">
      <div className="results-header">
        <h2>Survey Results</h2>
        <p>Based on {surveys.length} survey(s)</p>
      </div>

      <div className="results-grid">
        <Card className="result-card">
          <h3>🏆 Top Technologies</h3>
          <div className="results-list">
            {topTech.map((tech, index) => (
              <div key={tech.name} className="result-item">
                <div className="rank">#{index + 1}</div>
                <div className="item-info">
                  <span className="item-name">{tech.name}</span>
                  <span className="item-stats">
                    {tech.count} votes • ⭐{tech.avgRating}
                  </span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ width: `${(tech.count / surveys.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="result-card">
          <h3>🎬 Top Entertainment</h3>
          <div className="results-list">
            {topEnt.map((ent, index) => (
              <div key={ent.name} className="result-item">
                <div className="rank">#{index + 1}</div>
                <div className="item-info">
                  <span className="item-name">{ent.name}</span>
                  <span className="item-stats">
                    {ent.count} votes • ⭐{ent.avgRating}
                  </span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ width: `${(ent.count / surveys.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="summary-card">
        <h3>📈 Overall Statistics</h3>
        <div className="stats-grid">
          <div className="stat">
            <span className="stat-value">{surveys.length}</span>
            <span className="stat-label">Total Surveys</span>
          </div>
          <div className="stat">
            <span className="stat-value">{topTech[0]?.name || '-'}</span>
            <span className="stat-label">Top Technology</span>
          </div>
          <div className="stat">
            <span className="stat-value">{topEnt[0]?.name || '-'}</span>
            <span className="stat-label">Top Entertainment</span>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default SurveyResults