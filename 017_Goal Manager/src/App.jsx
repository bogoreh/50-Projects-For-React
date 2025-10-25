import React, { useState } from 'react'
import GoalForm from './components/GoalForm'
import GoalList from './components/GoalList'
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {
  const [goals, setGoals] = useLocalStorage('goals', [])
  const [editingGoal, setEditingGoal] = useState(null)

  const addGoal = (goal) => {
    setGoals(prev => [...prev, goal])
  }

  const updateGoal = (updatedGoal) => {
    setGoals(prev => prev.map(goal => 
      goal.id === updatedGoal.id ? updatedGoal : goal
    ))
    setEditingGoal(null)
  }

  const deleteGoal = (goalId) => {
    setGoals(prev => prev.filter(goal => goal.id !== goalId))
  }

  const toggleComplete = (goalId) => {
    setGoals(prev => prev.map(goal => 
      goal.id === goalId 
        ? { 
            ...goal, 
            completed: !goal.completed,
            completedAt: !goal.completed ? new Date().toISOString() : null
          }
        : goal
    ))
  }

  const startEdit = (goal) => {
    setEditingGoal(goal)
  }

  const cancelEdit = () => {
    setEditingGoal(null)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>🎯 Goal Manager</h1>
        <p>Track and achieve your goals effectively</p>
      </header>

      <div className="app-content">
        <div className="sidebar">
          <GoalForm
            onAddGoal={addGoal}
            editingGoal={editingGoal}
            onUpdateGoal={updateGoal}
            onCancelEdit={cancelEdit}
          />
        </div>

        <div className="main-content">
          <GoalList
            goals={goals}
            onEditGoal={startEdit}
            onDeleteGoal={deleteGoal}
            onToggleComplete={toggleComplete}
          />
        </div>
      </div>
    </div>
  )
}

export default App