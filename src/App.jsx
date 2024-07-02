import { NavBar } from "./Components/Nav/NavBar"
import { AboutMe } from "./Components/AboutMe/AboutMe"
import { Projects } from "./Components/Projects/Projects"
import { Skills } from "./Components/Skills/Skills"
import { Education } from "./Components/Education/Education"
import { SideBar } from "./Components/Nav/SideBar"
import { CertificatesProvider } from "./Components/Education/Context"

function App() {
  return (
    <>
      <NavBar />
      <SideBar />
      <AboutMe />
      <Projects />
      <CertificatesProvider >
        <Education />
      </CertificatesProvider>
      <Skills />
    </>
  )
}

export default App
