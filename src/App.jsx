import "./App.css";
import NavBar from "./COMPONENTS/NavBar";
import Inicio from "./COMPONENTS/Inicio";
import Footer from "./COMPONENTS/FOOTER/Footer";
import Skills from "./COMPONENTS/SKILLS/Skills";
import Language from "./COMPONENTS/LANGUAGE/Language";


function App() {
  return (
    <main className="app">
      <NavBar className='navBar'/>
      
      <Inicio />
      <Language/>
      <Skills/>
      <Footer />
    </main>
  );
}

export default App;
