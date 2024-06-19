import { NavBar } from "./Components/NavBar"
import { AboutMe } from "./Components/AboutMe/AboutMe"
import { Projects } from "./Components/Projects/Projects"
import { Skills } from "./Components/Skills/Skills"
import { Contact } from "./Components/Contact/Contact"
import { Education } from "./Components/Education/Education"

function App() {
  return (
    <>
      <NavBar />
      <AboutMe />
      <Projects />
      <Education />
      <Skills />
      <Contact />
    </>
  )
}

export default App
