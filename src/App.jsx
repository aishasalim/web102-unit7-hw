import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main-block'>
        <h1 className="main-heading">Welcome to the Crewmate Creator!</h1>
        <h2 className="main-heading">Here is where you can create your very own set of crewmates before sending them off into space!</h2>

        <div class="image-container">
          <img src="https://shimmering-stardust-c75334.netlify.app/assets/crewmates.43d07b24.png" alt="" />
          <img src="https://shimmering-stardust-c75334.netlify.app/assets/spaceship.3d8f767c.png" alt="" />
        </div>
      </div>
    </>
  )
}

export default App
