import React from "react";
import "../Descargar_PDF/descargarPDF_CSS.css";
import ButtonWhatsapp from "../ButtonWhatsapp/ButtonWhatsapp";

const DescargarPDF = () => {
  const urlPDF = "/pdf/CV_Hernan Gabriel Stagni Español 2 .pdf"; // Reemplaza esto con la ruta real de tu archivo PDF

  return (
    <div className="container_general">
      {/* <h3>Mi CV</h3> */}

      <a href={urlPDF} target="_blank">
        <button className="button">
          <div div__img>
            <img
              src="/svg/097-download.svg"
              alt="download cv"
              className="download__img"
            />
          </div>
          Descargar CV
        </button>
      </a>

      {/* <a href={urlPDF} download="CV_Stagni_Hernan.pdf">
        <button>
        Descargar CV</button> 
      </a>*/}
    </div>
  );
};

export default DescargarPDF;

// download="MiCV.pdf"
