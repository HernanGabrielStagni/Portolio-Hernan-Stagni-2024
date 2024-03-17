
import DescargarPDF from "../COMPONENTS/Descargar_PDF/DescargarPDF";
import "../COMPONENTS/inicio_CSS.css";
import { useTranslation } from "react-i18next";

import Whatsapp from "./WHATSAPP/Whatsapp";
import Typewriter from 'typewriter-effect';

const Inicio = () => {
  const { t } = useTranslation();

  return (
    <section id="inicio">
      <div className="presentation">
        <h1 >{t("inicio.name")}</h1>

       

        <h2 className="title__web">
  <Typewriter
    options={{
      autoStart: true,
      loop: true, // Desactivamos la repetición de la animación
      cursor: '', 
      strings: [t("inicio.webDeveloper")],
      delay: 75, // Ajustamos el tiempo de escritura para simular una escritura más lenta
     
      pauseFor:10000000, // Pausa muy grande
      // deleteSpeed: 10000000,// Pausa muy grande
      
    }}
  />
</h2>

 <h3>
  <Typewriter
    options={{
      autoStart: true,
      loop:true, // repetición de la animación
      cursor: '_', // Ocultamos el cursor
      strings:[t("inicio.fullStack"),t("inicio.Frontend"),t("inicio.Backend")], 

      delay: 75, // Ajustamos el tiempo de escritura para simular una escritura más lenta
      deleteSpeed: 90, // Establecemos la velocidad de borrado en 0 para que no haya borrado
    }}
  />
</h3> 


  
       {/* // Hola , soy un desarrollador web full stack con expreriencioa 
       //en HTML, CSS, JavaScript, React, Git y npm. */}
        <p> {t("inicio.presentation")}</p>
      
      </div>

      <div className="descarga__whatsapp">
        <DescargarPDF />
        <Whatsapp />
       </div>


      <div className="fondo__imagen">
        <img src="/img/teorianudos-euler200.png" alt="img programer" />
      </div>
     
    
    </section>
  );
};

export default Inicio;
