import React from 'react'

function TicketCard({ ticket, onUpdateStatus, onDelete }) {
  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'high': return 'priority-high'
      case 'medium': return 'priority-medium'
      case 'low': return 'priority-low'
      default: return 'priority-medium'
    }
  }

  const getStatusClass = (status) => {
    switch (status) {
      case 'open': return 'status-open'
      case 'in-progress': return 'status-in-progress'
      case 'closed': return 'status-closed'
      default: return 'status-open'
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <h3 className="ticket-title">{ticket.title}</h3>
        <span className={`priority-badge ${getPriorityClass(ticket.priority)}`}>
          {ticket.priority}
        </span>
      </div>

      {ticket.description && (
        <p className="ticket-description">{ticket.description}</p>
      )}

      <div className="ticket-meta">
        {ticket.assignee && (
          <div className="meta-item">
            <span className="meta-label">Assignee:</span>
            <span>{ticket.assignee}</span>
          </div>
        )}
        <div className="meta-item">
          <span className="meta-label">Created:</span>
          <span>{formatDate(ticket.createdAt)}</span>
        </div>
      </div>

      <div className="ticket-actions">
        <select
          value={ticket.status}
          onChange={(e) => onUpdateStatus(ticket.id, e.target.value)}
          className={`status-select ${getStatusClass(ticket.status)}`}
        >
          <option value="open">Open</option>
          <option value="in-progress">In Progress</option>
          <option value="closed">Closed</option>
        </select>

        <button
          onClick={() => onDelete(ticket.id)}
          className="delete-btn"
          aria-label="Delete ticket"
        >
          🗑️
        </button>
      </div>
    </div>
  )
}

export default TicketCard