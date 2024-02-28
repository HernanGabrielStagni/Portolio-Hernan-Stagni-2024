import React from "react";
import "./dark_Mode.css";
import { useTranslation } from "react-i18next";

const Dark_Mode = ({currentDark_Mode,setCurrentDark_Mode}) => {
  const { t, i18n } = useTranslation();
//   i18n.changeLanguage();// actualizo el idioma
  
  //uncion que setea el i18n
  const cambiarModo = (e) => {
  
    setCurrentDark_Mode(e.target.value)
  };

  return (
    <div className="container__darkMode">
      {/* <p>{t('welcomeMessage')}</p> */}

      <div className="opciones_darkMode">
        <p className="Label__darkMode">Modo 🌓</p>

        <select value={currentDark_Mode} id="modo" onChange={cambiarModo}>
          
          
          <option value="O">🌛 Oscuro</option>
          <option value="C">🌞 Claro</option>
        
        </select>

      </div>
    </div>
  );
};

export default Dark_Mode;
