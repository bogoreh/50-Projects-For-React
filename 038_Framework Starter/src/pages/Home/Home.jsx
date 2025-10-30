import { useState } from 'react'
import styles from './Home.module.css'

const Home = () => {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.home}>
      <h1>Welcome to Home Page</h1>
      <p>This is a simple counter example using React hooks</p>
      
      <div className={styles.counter}>
        <h2>Counter: {count}</h2>
        <div className={styles.buttons}>
          <button 
            className={styles.btn}
            onClick={() => setCount(count - 1)}
          >
            Decrement
          </button>
          <button 
            className={styles.btn}
            onClick={() => setCount(0)}
          >
            Reset
          </button>
          <button 
            className={styles.btn}
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home