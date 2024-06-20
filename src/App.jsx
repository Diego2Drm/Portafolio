import { NavBar } from "./Components/Nav/NavBar"
import { AboutMe } from "./Components/AboutMe/AboutMe"
import { Projects } from "./Components/Projects/Projects"
import { Skills } from "./Components/Skills/Skills"
import { Contact } from "./Components/Contact/Contact"
import { Education } from "./Components/Education/Education"
import { SideBar } from "./Components/Nav/SideBar"

function App() {
  return (
    <>
      <NavBar />
      <SideBar />
      <AboutMe />
      <Projects />
      <Education />
      <Skills />
      <Contact />
    </>
  )
}

export default App
