import React from "react";
import "./language.css";
import { useTranslation } from "react-i18next";

const Language = () => {
  const { t, i18n } = useTranslation();
 
 con 
  const cambiarIdioma = (e) => {
     i18n.changeLanguage(e.target.value)
  };
  
  return (
    <div>
      {/* <p>{t('welcomeMessage')}</p> */}
      <p onClick={options}>Idioma</p>
      <select id="idioma" onChange={cambiarIdioma}>
        <option value="es">Español</option>
        <option value="en">Inglés</option>
        <option value="fr">Francés</option>
      </select>
    </div>
  );
};

export default Language;
