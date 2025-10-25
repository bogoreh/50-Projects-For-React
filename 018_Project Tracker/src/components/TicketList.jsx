import React from 'react'
import TicketCard from './TicketCard'

function TicketList({ tickets, onUpdateStatus, onDelete }) {
  if (tickets.length === 0) {
    return (
      <div className="empty-state">
        <h3>No tickets found</h3>
        <p>Create your first ticket to get started!</p>
      </div>
    )
  }

  return (
    <div className="ticket-list">
      <div className="ticket-stats">
        <span>{tickets.length} ticket(s)</span>
      </div>
      <div className="tickets-grid">
        {tickets.map(ticket => (
          <TicketCard
            key={ticket.id}
            ticket={ticket}
            onUpdateStatus={onUpdateStatus}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  )
}

export default TicketList