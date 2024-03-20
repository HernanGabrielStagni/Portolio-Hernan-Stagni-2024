{/* <i className="bx bxs-cloud-download bx-flashing"></i> */}
{/* <i className='bx bxs-cloud-download bx-fade-up' ></i> */}

import React from "react";
import "../Descargar_PDF/descargarPDF_CSS.css";
import { useTranslation } from "react-i18next";

const DescargarPDF = () => {
  const urlPDF = "/pdf/CV_Hernan Gabriel Stagni Español 2 .pdf"; // Reemplaza esto con la ruta real de tu archivo PDF
  const { t } = useTranslation();
  return (
    <a href={urlPDF} target="_blank">
      <div className="circulo__descarga">
        <i className="bx bxs-cloud-download bx-tada"></i>
        <h3>{t("DescargarPDF.descargar")} </h3>
        <h2>{t("DescargarPDF.cv")}</h2>
        <br />
      </div>
    </a>
  );
};

export default DescargarPDF;

// download="MiCV.pdf"
