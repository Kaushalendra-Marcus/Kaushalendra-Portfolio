import './App.css'
import Footer from './components/Footer'
import About from './sections/About'
import Contact from './sections/Contact'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import TechStack from './sections/TechStack'
import { Analytics } from "@vercel/analytics/react"
function App() {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
      <Analytics />
    </>
  )
}

export default App
