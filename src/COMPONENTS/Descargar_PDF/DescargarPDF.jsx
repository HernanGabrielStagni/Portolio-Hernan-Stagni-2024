import React from "react";
import "../Descargar_PDF/descargarPDF_CSS.css";
import { useTranslation } from "react-i18next";


const DescargarPDF = () => {
  const urlPDF = "/pdf/CV_Hernan Gabriel Stagni Español 2 .pdf"; // Reemplaza esto con la ruta real de tu archivo PDF
  const { t } = useTranslation();
  return (
    <div className="container_general">
      <a 
      href={urlPDF} target="_blank">
        {/* <button className="button"> */}
        
            {/* <i className="bx bxs-cloud-download bx-flashing"></i> */}
            {/* <i className='bx bxs-cloud-download bx-fade-up' ></i> */}
           
            <div className="circulo__descarga">
              <i className="bx bxs-cloud-download bx-tada"></i>
              <h3>{t("DescargarPDF.descargar")} </h3>
              <h2>{t("DescargarPDF.cv")}</h2>
              <br />
            </div>
        
          
        {/* </button> */}
      </a>
    </div>
  );
};

export default DescargarPDF;

// download="MiCV.pdf"
