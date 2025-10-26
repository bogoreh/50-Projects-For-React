import React, { useState } from 'react'

const HabitForm = ({ onAddHabit }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    reminderTime: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.name.trim()) return

    const reminders = []
    if (formData.reminderTime) {
      const [hours, minutes] = formData.reminderTime.split(':')
      const reminder = new Date()
      reminder.setHours(parseInt(hours), parseInt(minutes), 0, 0)
      reminders.push(reminder.toISOString())
    }

    onAddHabit({
      name: formData.name,
      description: formData.description,
      reminders
    })

    setFormData({
      name: '',
      description: '',
      reminderTime: ''
    })
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="card">
      <h2 style={{ marginBottom: '20px', color: '#2d3748' }}>Add New Habit</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Habit Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            placeholder="e.g., Drink water, Read book, Exercise..."
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-input"
            placeholder="Brief description of your habit..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="reminderTime">Daily Reminder Time</label>
          <input
            type="time"
            id="reminderTime"
            name="reminderTime"
            value={formData.reminderTime}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          <span>Add Habit</span>
        </button>
      </form>
    </div>
  )
}

export default HabitForm