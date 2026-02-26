import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <div className="min-h-screen bg-pcb-dark text-pcb-light font-sans selection:bg-pcb-blue/30">
      <Navbar />

      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App