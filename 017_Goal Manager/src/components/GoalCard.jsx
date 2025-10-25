import React from 'react'

const GoalCard = ({ goal, onEdit, onDelete, onToggleComplete }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return '#dc2626'
      case 'medium': return '#d97706'
      case 'low': return '#16a34a'
      default: return '#64748b'
    }
  }

  return (
    <div 
      className="goal-card"
      data-priority={goal.priority}
    >
      <div className="goal-header">
        <h3 className={`goal-title ${goal.completed ? 'completed' : ''}`}>
          {goal.title}
        </h3>
        <div className="goal-actions">
          <button
            onClick={() => onToggleComplete(goal.id)}
            className={`status-btn ${goal.completed ? 'completed' : 'pending'}`}
          >
            {goal.completed ? 'Completed' : 'Pending'}
          </button>
          <button
            onClick={() => onEdit(goal)}
            className="edit-btn"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(goal.id)}
            className="delete-btn"
          >
            Delete
          </button>
        </div>
      </div>
      
      <p className="goal-description">{goal.description}</p>
      
      <div className="goal-meta">
        <span 
          className="priority-badge"
          style={{ color: getPriorityColor(goal.priority) }}
        >
          {goal.priority} priority
        </span>
        <span className="goal-date">
          Due: {new Date(goal.dueDate).toLocaleDateString()}
        </span>
      </div>
      
      {goal.completed && (
        <div className="completion-date">
          Completed on: {new Date(goal.completedAt).toLocaleDateString()}
        </div>
      )}
    </div>
  )
}

export default GoalCard