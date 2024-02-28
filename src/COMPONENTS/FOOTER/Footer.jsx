import { useState } from "react";
import "../FOOTER/footer.css";
import Language from "../LANGUAGE/Language";
import { useTranslation } from "react-i18next";
import Dark_Mode from "../DARK_MODE/Dark_Mode";


const Footer = () => {
  const { t } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [showSettings, setShowSettings] = useState(false);
  const [currentDark_Mode, setCurrentDark_Mode] = useState("O");
  const handleShowSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <div className="Container__footer">
     

      <ul>
        <li> <h1>.....  Setting  ..</h1></li>
        <li onClick={handleShowSettings}>
          <i className="bx bx-cog bx-flip-vertical"></i>
        </li>
      </ul>

      {showSettings 
      ? (
        <div className="leng">
          <Language
            currentLanguage={currentLanguage}
            setCurrentLanguage={setCurrentLanguage}
          />
          <Dark_Mode
            currentDark_Mode={currentDark_Mode}
            setCurrentDark_Mode={setCurrentDark_Mode}
          />         

        </div>
        ) 
      : (
        ""
      )}

    </div>
);
};

export default Footer;
