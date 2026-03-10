import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer' 

function App() {
  return (
    <div className="min-h-screen bg-pcb-dark text-pcb-light font-sans selection:bg-pcb-blue/30">
      <Navbar />

      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  )
}

export default App