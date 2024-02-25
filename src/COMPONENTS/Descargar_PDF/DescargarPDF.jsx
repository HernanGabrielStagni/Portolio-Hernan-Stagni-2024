import React from "react";
import "../Descargar_PDF/descargarPDF_CSS.css";
import ButtonWhatsapp from "../ButtonWhatsapp/ButtonWhatsapp";

const DescargarPDF = () => {
  const urlPDF = "/pdf/CV_Hernan Gabriel Stagni Español 2 .pdf"; // Reemplaza esto con la ruta real de tu archivo PDF

  return (
    <div className="container_general">
          <a href={urlPDF} target="_blank">
                <button className="button">
                
                      <div div__img>
                      
                        <img
                      
                          src="/svg/097-download.svg"
                          alt="download cv"
                          className="download__img"
                        
                        />
                        <h3>CV</h3>
                       
                      </div>
                      <h3>Descargar </h3>
                </button>
          </a>
      
    </div>
  );
};

export default DescargarPDF;

// download="MiCV.pdf"
