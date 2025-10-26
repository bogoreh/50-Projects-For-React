import React, { useState, useEffect } from 'react'
import HabitForm from './components/HabitForm'
import HabitList from './components/HabitList'
import Notification from './components/Notification'
import { useLocalStorage } from './hooks/useLocalStorage'
import './styles/App.css'

function App() {
  const [habits, setHabits] = useLocalStorage('habits', [])
  const [showNotification, setShowNotification] = useState(false)
  const [currentHabit, setCurrentHabit] = useState(null)

  useEffect(() => {
    const checkReminders = () => {
      const now = new Date()
      habits.forEach(habit => {
        if (habit.reminders) {
          habit.reminders.forEach(reminder => {
            const reminderTime = new Date(reminder)
            if (now >= reminderTime && now < new Date(reminderTime.getTime() + 60000)) {
              setCurrentHabit(habit)
              setShowNotification(true)
            }
          })
        }
      })
    }

    const interval = setInterval(checkReminders, 30000) // Check every 30 seconds
    return () => clearInterval(interval)
  }, [habits])

  const addHabit = (habit) => {
    const newHabit = {
      id: Date.now().toString(),
      ...habit,
      completed: false,
      createdAt: new Date().toISOString()
    }
    setHabits(prev => [...prev, newHabit])
  }

  const toggleHabit = (id) => {
    setHabits(prev => prev.map(habit =>
      habit.id === id ? { ...habit, completed: !habit.completed } : habit
    ))
  }

  const deleteHabit = (id) => {
    setHabits(prev => prev.filter(habit => habit.id !== id))
  }

  const closeNotification = () => {
    setShowNotification(false)
    setCurrentHabit(null)
  }

  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <h1>Habit Reminder</h1>
          <p>Build better habits, one reminder at a time</p>
        </header>

        <main className="app-main">
          <HabitForm onAddHabit={addHabit} />
          <HabitList 
            habits={habits}
            onToggleHabit={toggleHabit}
            onDeleteHabit={deleteHabit}
          />
        </main>
      </div>

      {showNotification && currentHabit && (
        <Notification 
          habit={currentHabit}
          onClose={closeNotification}
        />
      )}
    </div>
  )
}

export default App