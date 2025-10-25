import React, { useState, useEffect } from 'react'

const GoalForm = ({ onAddGoal, editingGoal, onUpdateGoal, onCancelEdit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium',
    dueDate: ''
  })

  useEffect(() => {
    if (editingGoal) {
      setFormData({
        title: editingGoal.title,
        description: editingGoal.description,
        priority: editingGoal.priority,
        dueDate: editingGoal.dueDate
      })
    }
  }, [editingGoal])

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.title.trim() || !formData.dueDate) return

    const goalData = {
      ...formData,
      id: editingGoal ? editingGoal.id : Date.now().toString(),
      completed: editingGoal ? editingGoal.completed : false,
      createdAt: editingGoal ? editingGoal.createdAt : new Date().toISOString(),
      completedAt: editingGoal ? editingGoal.completedAt : null
    }

    if (editingGoal) {
      onUpdateGoal(goalData)
    } else {
      onAddGoal(goalData)
    }

    setFormData({
      title: '',
      description: '',
      priority: 'medium',
      dueDate: ''
    })
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="goal-form-container">
      <h2>{editingGoal ? 'Edit Goal' : 'Add New Goal'}</h2>
      <form onSubmit={handleSubmit} className="goal-form">
        <div className="form-group">
          <label htmlFor="title">Goal Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="What do you want to achieve?"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Add more details about your goal..."
            rows="3"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="priority">Priority</label>
            <select
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="dueDate">Due Date *</label>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-actions">
          {editingGoal && (
            <button
              type="button"
              onClick={onCancelEdit}
              className="cancel-btn"
            >
              Cancel
            </button>
          )}
          <button type="submit" className="submit-btn">
            {editingGoal ? 'Update Goal' : 'Add Goal'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default GoalForm