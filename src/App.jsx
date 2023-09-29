import React from 'react'
import Hero from './Components/Hero'
import Goals from './Components/Goals'
import Event from './Components/Event'
import Challenges from './Components/Challenges'
import About from './Components/About'
import Navbar from './Components/Navbar'
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Goals/>
      <Event/>
      <Challenges/>
    </div>
  )
}

export default App