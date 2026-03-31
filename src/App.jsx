import React from 'react'
import { Navbar, HeroSection, About, Skills, Contact } from './components'

const App = () => {
  return (
    <main className="bg-[#0a0a0c] selection:bg-violet-500/30 selection:text-violet-200">
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      <Contact />
      
      {/* Footer / Copyright */}
      <footer className="py-8 bg-[#0a0a0c] border-t border-white/5 text-center">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Rishabh Pal. All rights reserved.
        </p>
      </footer>
    </main>
  )
}

export default App