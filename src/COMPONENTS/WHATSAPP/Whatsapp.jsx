import React from "react";
import "../WHATSAPP/whatsapp.css";
import ButtonWhatsapp from "../ButtonWhatsapp/ButtonWhatsapp";

const DescargarPDF = () => {
  const urlPDF = "/pdf/CV_Hernan Gabriel Stagni Español 2 .pdf"; // Reemplaza esto con la ruta real de tu archivo PDF

  return (
    <div className="container_general">
      <a
        href="https://wa.me/543584313590?text=Hola%20Hernan,%20vi%20tu%20trabajo%20y%20me%20gustar%C3%ADa%20saber%20mas%20sobre%20ti."
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="container__whatsapp">
          <div className="circulo__general">
            {/* <i className='bx bxl-whatsapp' ></i> */}
            <i className="bx bxl-whatsapp bx-tada bx-flip-horizontal"></i>
            <h3 className="titulo__whatsapp">Whatsapp</h3>
          </div>
        </div>
      </a>
    </div>
  );
};

export default DescargarPDF;

// download="MiCV.pdf"
