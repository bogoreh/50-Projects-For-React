import React, { useState } from 'react'

function TicketForm({ onAddTicket }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium',
    assignee: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.title.trim()) return

    onAddTicket(formData)
    setFormData({
      title: '',
      description: '',
      priority: 'medium',
      assignee: ''
    })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="ticket-form-card">
      <h2>Create New Ticket</h2>
      <form onSubmit={handleSubmit} className="ticket-form">
        <div className="form-group">
          <label htmlFor="title">Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter ticket title"
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
            placeholder="Describe the issue..."
            rows="4"
          />
        </div>

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
          <label htmlFor="assignee">Assignee</label>
          <input
            type="text"
            id="assignee"
            name="assignee"
            value={formData.assignee}
            onChange={handleChange}
            placeholder="Who should handle this?"
          />
        </div>

        <button type="submit" className="submit-btn">
          Create Ticket
        </button>
      </form>
    </div>
  )
}

export default TicketForm