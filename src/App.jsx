import { NavBar } from "./Components/NavBar"
import { AboutMe } from "./Components/AboutMe/AboutMe"
import { Projects } from "./Components/Projects/Projects"
import { Skills } from "./Components/Skills/Skills"
import { Contact } from "./Components/Contact/Contact"

function App() {
  return (
    <>
      <NavBar />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}

export default App
