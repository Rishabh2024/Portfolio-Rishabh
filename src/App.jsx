import React from 'react'
import { Navbar, HeroSection, Contact,  Skills} from './components'
import ServicesShowcase from "./components/ServicesShowcase";
import About from './components/About';

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
       <Skills />
     
      <About />
      <ServicesShowcase />
      <Contact />
    </>
  )
}

export default App