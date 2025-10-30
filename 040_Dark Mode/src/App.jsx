import { useState, useEffect } from 'react';
import ThemeToggle from './components/ThemeToggle';
import './styles/light.css';
import './styles/dark.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1>Dark Mode Demo</h1>
        <ThemeToggle />
      </div>
      
      <div className="card">
        <h2>Welcome to the Theme Demo</h2>
        <p>This is a simple demonstration of light and dark mode themes.</p>
        <p>Current theme is stored in localStorage and persists between sessions.</p>
      </div>

      <div className="card">
        <h3>Counter Example</h3>
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
      </div>

      <div className="card">
        <h3>Features</h3>
        <ul>
          <li>✅ Light mode styles</li>
          <li>✅ Dark mode styles</li>
          <li>✅ Toggle button</li>
          <li>✅ localStorage persistence</li>
          <li>✅ System preference detection</li>
          <li>✅ Smooth transitions</li>
        </ul>
      </div>
    </div>
  );
}

export default App;