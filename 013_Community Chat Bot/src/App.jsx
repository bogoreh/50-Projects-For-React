import React, { useState, useEffect } from 'react';
import './styles/App.css';

function App() {
  const [botStatus, setBotStatus] = useState('checking...');
  const [serverCount, setServerCount] = useState(0);
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    // Simulate bot status check
    const checkBotStatus = () => {
      setBotStatus('online');
      setServerCount(1);
      setUserCount(150);
    };

    checkBotStatus();
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <h1>🤖 Community Chat Bot</h1>
        <p>Manage and moderate your Discord community</p>
      </header>

      <main className="dashboard">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">🟢</div>
            <div className="stat-info">
              <h3>Bot Status</h3>
              <span className="stat-value">{botStatus}</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🏠</div>
            <div className="stat-info">
              <h3>Servers</h3>
              <span className="stat-value">{serverCount}</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-info">
              <h3>Users</h3>
              <span className="stat-value">{userCount}</span>
            </div>
          </div>
        </div>

        <div className="features">
          <h2>✨ Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>🛡️ Auto Moderation</h3>
              <p>Automatic spam and inappropriate content detection</p>
            </div>
            <div className="feature-card">
              <h3>⚡ Quick Actions</h3>
              <p>Warn users and clear messages with simple commands</p>
            </div>
            <div className="feature-card">
              <h3>📊 User Management</h3>
              <p>Get user information and manage community members</p>
            </div>
            <div className="feature-card">
              <h3>🔧 Easy Setup</h3>
              <p>Simple configuration and deployment process</p>
            </div>
          </div>
        </div>

        <div className="commands">
          <h2>📝 Available Commands</h2>
          <div className="commands-list">
            <div className="command-group">
              <h3>Moderation</h3>
              <ul>
                <li><code>/warn @user [reason]</code> - Warn a user</li>
                <li><code>/clear [amount]</code> - Clear messages</li>
              </ul>
            </div>
            <div className="command-group">
              <h3>Utility</h3>
              <ul>
                <li><code>/help</code> - Show all commands</li>
                <li><code>/userinfo @user</code> - Get user information</li>
                <li><code>!ping</code> - Check bot latency</li>
                <li><code>!serverinfo</code> - Get server information</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer className="app-footer">
        <p>Community Chat Bot &copy; 2024</p>
      </footer>
    </div>
  );
}

export default App;