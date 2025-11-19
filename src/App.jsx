import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={"/assets/react.svg"} className="logo" alt="Vite logo" /> 
        </a>
        <a href="/bwme.png" target="_blank">
          <img src="/assets/bwme.png" className="logo react" alt="bwme" />
        </a>
      </div>
      <h1>I AM JUDITH</h1>


    </>
  )
}

export default App
