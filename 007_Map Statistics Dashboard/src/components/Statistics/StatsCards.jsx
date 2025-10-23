import React from 'react'
import { getCountryStats } from '../../data/mockData'
import './StatsCards.css'

const StatsCards = ({ selectedCountry }) => {
  const stats = getCountryStats(selectedCountry)

  const StatCard = ({ title, value, change, color, icon }) => (
    <div className="stat-card">
      <div className="stat-icon" style={{ backgroundColor: color }}>
        {icon}
      </div>
      <div className="stat-content">
        <h3>{title}</h3>
        <div className="stat-value">{value.toLocaleString()}</div>
        <div className="stat-change" style={{ color }}>
          {change > 0 ? '+' : ''}{change}%
        </div>
      </div>
    </div>
  )

  return (
    <div className="stats-cards">
      <StatCard
        title="Total Cases"
        value={stats.totalCases}
        change={2.1}
        color="#f59e0b"
        icon="🦠"
      />
      <StatCard
        title="Active Cases"
        value={stats.activeCases}
        change={-1.2}
        color="#3b82f6"
        icon="🏥"
      />
      <StatCard
        title="Recovered"
        value={stats.recovered}
        change={3.4}
        color="#10b981"
        icon="✅"
      />
      <StatCard
        title="Deaths"
        value={stats.deaths}
        change={0.8}
        color="#ef4444"
        icon="💀"
      />
    </div>
  )
}

export default StatsCards