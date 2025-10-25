import React, { useState } from 'react'
import GoalCard from './GoalCard'

const GoalList = ({ goals, onEditGoal, onDeleteGoal, onToggleComplete }) => {
  const [filter, setFilter] = useState('all')

  const filteredGoals = goals.filter(goal => {
    switch (filter) {
      case 'completed':
        return goal.completed
      case 'pending':
        return !goal.completed
      case 'high':
        return goal.priority === 'high'
      case 'medium':
        return goal.priority === 'medium'
      case 'low':
        return goal.priority === 'low'
      default:
        return true
    }
  })

  const stats = {
    total: goals.length,
    completed: goals.filter(g => g.completed).length,
    pending: goals.filter(g => !g.completed).length
  }

  return (
    <div className="goal-list-container">
      <div className="list-header">
        <div className="stats">
          <div className="stat-item">
            <span className="stat-number">{stats.total}</span>
            <span className="stat-label">Total</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{stats.completed}</span>
            <span className="stat-label">Completed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{stats.pending}</span>
            <span className="stat-label">Pending</span>
          </div>
        </div>

        <div className="filter-controls">
          <select 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Goals</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="high">High Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="low">Low Priority</option>
          </select>
        </div>
      </div>

      <div className="goals-grid">
        {filteredGoals.length === 0 ? (
          <div className="empty-state">
            <h3>No goals found</h3>
            <p>
              {filter === 'all' 
                ? "Start by adding your first goal!" 
                : `No ${filter} goals found. Try changing the filter.`
              }
            </p>
          </div>
        ) : (
          filteredGoals.map(goal => (
            <GoalCard
              key={goal.id}
              goal={goal}
              onEdit={onEditGoal}
              onDelete={onDeleteGoal}
              onToggleComplete={onToggleComplete}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default GoalList