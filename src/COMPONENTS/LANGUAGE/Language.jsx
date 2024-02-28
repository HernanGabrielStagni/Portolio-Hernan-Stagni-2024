import React from "react";
import "./language.css";
import { useTranslation } from "react-i18next";

const Language = ({currentLanguage,setCurrentLanguage}) => {
  const { t, i18n } = useTranslation();
  i18n.changeLanguage();// actualizo el idioma
  
  //uncion que setea el i18n
  const cambiarIdioma = (e) => {
    i18n.changeLanguage(e.target.value);// actualizo el idioma
    setCurrentLanguage(e.target.value)
  };

  return (
    <div className="container__language">
      {/* <p>{t('welcomeMessage')}</p> */}

      <div className="opciones">
        <p className="Label__idioma">Idioma🚹</p>

        <select value={currentLanguage} id="idioma" onChange={cambiarIdioma}>
          
          
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Francés</option>
        </select>

      </div>
    </div>
  );
};

export default Language;
