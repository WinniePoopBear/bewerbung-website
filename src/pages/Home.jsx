import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Skills from '../components/Skills.jsx'
import Experience from '../components/Experience.jsx'
import Education from '../components/Education.jsx'
import Projects from '../components/Projects.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default Home