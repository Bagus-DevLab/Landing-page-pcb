import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import LiveData from './components/LiveData'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-pcb-blue/30 overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <Features />
        {/* <LiveData /> */}
      </main>
      <Footer />
    </div>
  )
}

export default App