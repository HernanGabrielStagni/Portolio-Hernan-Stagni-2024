import "./App.css";
import NavBar from "./COMPONENTS/NavBar";
import Inicio from "./COMPONENTS/Inicio";
import Footer from "./COMPONENTS/FOOTER/Footer";
import Skills from "./COMPONENTS/SKILLS/Skills";



function App() {
  return (
    <main className="app">
      <NavBar className='navBar'/>
      
      <Inicio />
      <Footer />
      <Skills/>
    
    </main>
  );
}

export default App;
