import React from 'react'
import { Navbar, HeroSection, Contact, Project, Skills} from './components'
import ServicesShowcase from "./components/ServicesShowcase";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesShowcase />
      <Project />
      <Skills />
      <Contact />
    </>
  )
}

export default App