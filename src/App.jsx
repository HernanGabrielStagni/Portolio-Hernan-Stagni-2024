import "./App.css";
import NavBar from "./COMPONENTS/NavBar";
import Inicio from "./COMPONENTS/Inicio";
import Footer from "./COMPONENTS/FOOTER/Footer";
import Skills from "./COMPONENTS/SKILLS/Skills";
import BannerSkills from "./COMPONENTS/BANNER_SKILLS/BannerSkills";
import AboutMe from "./COMPONENTS/ABOUT_ME/AboutMe";
import Proyects from "./COMPONENTS/PROYECTS/Proyects";
import ContactMe from "./COMPONENTS/CONTACT_ME/ContactMe";
import MyCarouselComponent from "./COMPONENTS/SLIDER/MyCarouselComponent";
import ProStatic from "./COMPONENTS/PROYECTS/ProStatic";



function App() {
  return (
    <main className="app">
      <NavBar className='navBar'/>
      
      <Inicio />
      <Footer />
      <AboutMe/> 
      <Skills/>
      <BannerSkills/>
      {/* <div className="div_myCarrusel">
       <MyCarouselComponent/>
      </div> */}
      <Proyects/>
      {/* <ProStatic/> */}
      <ContactMe/>
         
    </main>
  );
}

export default App;
