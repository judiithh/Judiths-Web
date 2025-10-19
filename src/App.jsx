import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://rowdyhacks.org/_next/image?url=%2Fimg%2Fteam%2FJibril.webp&w=1080&q=100" target="_blank">
          <img src="https://rowdyhacks.org/_next/image?url=%2Fimg%2Fteam%2FJibril.webp&w=1080&q=100" className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>I AM JUDITH</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
