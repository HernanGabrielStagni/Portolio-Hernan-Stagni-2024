import React from "react";
import DescargarPDF from "../COMPONENTS/Descargar_PDF/DescargarPDF";
import "../COMPONENTS/inicio_CSS.css";
import { useTranslation } from "react-i18next";
import ButtonWhatsapp from "./ButtonWhatsapp/ButtonWhatsapp";

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

      <div className="container_descarga">
        <div className="imagen">
          <img src="/img/teorianudos-euler200.png" alt="img programer" />
        </div>
        <DescargarPDF />
      </div>
    </section>
  );
};

export default Inicio;
