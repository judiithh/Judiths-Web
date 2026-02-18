//import { useState } from 'react'
//import viteLogo from '/vite.svg'
/*import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <head>
      <title>Judith's Portfolio</title>
    </head>
      <div>
        <img src="/assets/bwme.png" alt="bwme" />
      </div>
      <h1>I AM JUDITH</h1>


    </>
  )
}

export default App; */
import "./App.css";
import { Routes, Route } from "react-router";
import { NavbarExample } from "./Components/Navbar";
import Home from "./Home";
import About from "./About";

export default function App() {
  return (
    <>
      <NavbarExample />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
