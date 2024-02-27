import React from "react";
import "./language.css";
import { useTranslation } from "react-i18next";

const Language = () => {
  const { t, i18n } = useTranslation();

  const cambiarIdioma = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="container__language">
      {/* <p>{t('welcomeMessage')}</p> */}

      <div className="opciones">
        <p className="Label__idioma">Idioma🚹</p>

        <select id="idioma" onChange={cambiarIdioma}>
          <option value="es">Español</option>
          <option value="en">Inglés</option>
          <option value="fr">Francés</option>
        </select>

      </div>
    </div>
  );
};

export default Language;
