import "./App.css";
import NavBar from "./COMPONENTS/NavBar";
import Inicio from "./COMPONENTS/Inicio";
import Footer from "./COMPONENTS/FOOTER/Footer";

function App() {
  return (
    <main className="app">
      <NavBar className='navBar'/>
      <Inicio />
      <Footer />
    </main>
  );
}

export default App;
