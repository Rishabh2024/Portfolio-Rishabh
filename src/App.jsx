import React from 'react'
import { Navbar, HeroSection, Contact,  Skills} from './components'
import ServicesShowcase from "./components/ServicesShowcase";
import About from './components/About';

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesShowcase />
      <About />
      <Skills />
      <Contact />
    </>
  )
}

export default App