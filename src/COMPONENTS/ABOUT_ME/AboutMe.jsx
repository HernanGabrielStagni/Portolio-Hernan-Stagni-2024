import React from "react";
import BannerSkills from "../BANNER_SKILLS/BannerSkills";
import "./aboutMe.css";
import { useTranslation } from "react-i18next";

// con esto en cada componente accedemos a las variables en cada lengueje
//import { useTranslation } from "react-i18next"; (importa el Hook )
//const { t } = useTranslation();  (baja en t el json)
//<h1 >{t("inicio.name")}</h1>     (accede a la variable deseada)

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <section className="container__aboutMe" id="skills">
      {/* <article className="div__title"> */}
        <title className="title__aboutMe">{t("AboutMe.sobreMi")}</title>
      {/* </article> */}

      <article className="div__presentation">
        <div className="pres__aboutMe">
          <h2> {t("AboutMe.encabezado.0")}</h2>

          <h4>{t("AboutMe.encabezado.1")} </h4>
          <br />
          <p>
          {t("AboutMe.encabezado.2")}
        
          
            <span>
              <b>{t("AboutMe.encabezado.3")}</b>
            </span>
            {t("AboutMe.cuerpo.0")}
            <br /> 
            <br /> 
            {t("AboutMe.cuerpo.1")}<br /><b>  {t("AboutMe.cuerpo.2")}</b>
            <br />
            <br /> 
            
            {t("AboutMe.filosofia.0")}
            
             {/* <b> {t("AboutMe.filosofia.1")}</b>...<b> {t("AboutMe.filosofia.2")} </b> y el
            <b>  {t("AboutMe.filosofia.3")}</b>  {t("AboutMe.filosofia.4")}
           */}
          </p>
          <br />
          <br />
          <h3>
          {t("AboutMe.despedida.0")}
          </h3>
        </div>
      </article>
      
    </section>
  );
};

export default AboutMe;
