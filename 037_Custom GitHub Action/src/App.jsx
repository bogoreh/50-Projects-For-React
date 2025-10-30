import { useState } from 'react'
import HelloWorld from './components/HelloWorld'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HelloWorld />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
}

export default App