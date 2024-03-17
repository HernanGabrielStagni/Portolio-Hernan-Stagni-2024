
import "../COMPONENTS/navBar_CSS.css";
import { useTranslation } from "react-i18next";

import Language from "./LANGUAGE/Language";

const NavBar = () => {
  const { t } = useTranslation();
  // const [currentLanguage, setCurrentLanguage] = useState("en");
  // const [showSettings, setShowSettings] = useState(false);

  const handleShowSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <nav className="navBar__container">
      <ul className="neon-menu">

        
        <li>
          {/* <a href="#inicio">{t("Navbar.home")}</a> */}
          <a href="#inicio"><i className='bx bx-home' ></i></a>
          
        </li>
        <li>
          <a href="#skills">{t("Navbar.about")}</a>
        </li>
        <li>
          <a href="#proyects">{t("Navbar.proyects")}</a>
        </li>
        <li>
          <a href="#contactMe">{t("Navbar.contact")}</a>
        </li>

        {/* <li onClick={handleShowSettings}>
          <i className="bx bx-cog bx-flip-vertical"></i>
        </li>

        {showSettings 
        ? (<div className="leng">
            <Language 
            currentLanguage={currentLanguage} 
            setCurrentLanguage={setCurrentLanguage}/>
          </div>)
        : ("")
        } */}

      </ul>
    </nav>
  );
};

export default NavBar;
