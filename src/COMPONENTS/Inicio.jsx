import React from "react";
import DescargarPDF from "../COMPONENTS/Descargar_PDF/DescargarPDF";
import "../COMPONENTS/inicio_CSS.css";
import { useTranslation } from "react-i18next";
import ButtonWhatsapp from "./ButtonWhatsapp/ButtonWhatsapp";
import Whatsapp from "./WHATSAPP/Whatsapp";

const Inicio = () => {
  const { t } = useTranslation();

  return (
    <section id="inicio">
      <div className="presentation">
        <h1>{t("inicio.name")}</h1>
        <h2>{t("inicio.webDeveloper")}</h2>
        <h3>{t("inicio.fullStack")}</h3>
        <p> {t("inicio.presentation")}</p>
      </div>

      <div className="descarga__whatsapp">
        
            <DescargarPDF />
          
            <Whatsapp/>
          {/* </div> */}
          
        </div>

    

      <div className="container_nudo">
        <div className="fondo__imagen">
          <img src="/img/teorianudos-euler200.png" alt="img programer" />
        </div>
        
       
        
       </div>
    </section>
  );
};

export default Inicio;