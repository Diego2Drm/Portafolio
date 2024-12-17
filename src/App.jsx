import { NavBar } from "./Components/Nav/NavBar";
import { AboutMe } from "./Components/AboutMe/AboutMe";
import { Projects } from "./Components/Projects/Projects";
import { Skills } from "./Components/Skills/Skills";
import { Education } from "./Components/Education/Education";
import { SideBar } from "./Components/Nav/SideBar";
import { DataProvider } from "./Context/Context";


function App() {
  return (
    <>
      <DataProvider>
        <NavBar />
        <SideBar />
        <AboutMe />
        <Projects />
        <Education />
        <Skills />
      </DataProvider>
    </>
  );
}

export default App;
