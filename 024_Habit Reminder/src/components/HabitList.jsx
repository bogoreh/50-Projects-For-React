import React from 'react'

const HabitList = ({ habits, onToggleHabit, onDeleteHabit }) => {
  if (habits.length === 0) {
    return (
      <div className="card">
        <div className="empty-state">
          <h3>No habits yet</h3>
          <p>Add your first habit to get started!</p>
        </div>
      </div>
    )
  }

  const formatReminderTime = (reminder) => {
    const date = new Date(reminder)
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <div className="card">
      <h2 style={{ marginBottom: '20px', color: '#2d3748' }}>Your Habits</h2>
      <div className="habit-list">
        {habits.map(habit => (
          <div 
            key={habit.id} 
            className={`habit-item ${habit.completed ? 'completed' : ''}`}
          >
            <div className="habit-info">
              <div className="habit-name">{habit.name}</div>
              {habit.description && (
                <div className="habit-description">{habit.description}</div>
              )}
              {habit.reminders && habit.reminders.length > 0 && (
                <div className="habit-reminders">
                  Reminder: {formatReminderTime(habit.reminders[0])}
                </div>
              )}
            </div>

            <div className="habit-actions">
              {habit.reminders && habit.reminders.length > 0 && (
                <span className="habit-reminders">⏰</span>
              )}
              
              <div 
                className={`checkbox ${habit.completed ? 'checked' : ''}`}
                onClick={() => onToggleHabit(habit.id)}
              />
              
              <button 
                className="btn btn-danger btn-sm"
                onClick={() => onDeleteHabit(habit.id)}
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HabitList