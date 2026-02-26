import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import LiveData from './components/LiveData'  

function App() {
  return (
    <div className="min-h-screen bg-pcb-dark text-pcb-light font-sans selection:bg-pcb-blue/30">
      <Navbar />

      <main>
        <Hero />
        <Features />
        <LiveData />
      </main>
    </div>
  )
}

export default App