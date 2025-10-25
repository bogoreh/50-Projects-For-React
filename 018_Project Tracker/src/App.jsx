import React, { useState } from 'react'
import Header from './components/Header'
import TicketForm from './components/TicketForm'
import TicketList from './components/TicketList'
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {
  const [tickets, setTickets] = useLocalStorage('projectTickets', [])
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const addTicket = (ticket) => {
    const newTicket = {
      ...ticket,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      status: 'open'
    }
    setTickets([...tickets, newTicket])
  }

  const updateTicketStatus = (id, status) => {
    setTickets(tickets.map(ticket => 
      ticket.id === id ? { ...ticket, status } : ticket
    ))
  }

  const deleteTicket = (id) => {
    setTickets(tickets.filter(ticket => ticket.id !== id))
  }

  const filteredTickets = tickets.filter(ticket => {
    const matchesFilter = filter === 'all' || ticket.status === filter
    const matchesSearch = ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <div className="container">
          <div className="layout">
            <div className="form-section">
              <TicketForm onAddTicket={addTicket} />
            </div>
            <div className="list-section">
              <div className="filters">
                <input
                  type="text"
                  placeholder="Search tickets..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
                <select 
                  value={filter} 
                  onChange={(e) => setFilter(e.target.value)}
                  className="filter-select"
                >
                  <option value="all">All Tickets</option>
                  <option value="open">Open</option>
                  <option value="in-progress">In Progress</option>
                  <option value="closed">Closed</option>
                </select>
              </div>
              <TicketList 
                tickets={filteredTickets}
                onUpdateStatus={updateTicketStatus}
                onDelete={deleteTicket}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App