
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
        <h1>{t("inicio.name")}</h1>

        <h3>
  <Typewriter
    options={{
      autoStart: true,
      loop: true, // Desactivamos la repetición de la animación
      cursor: '', 
      strings: [t("inicio.BienvenidoPortafolio")],
      delay: 75, // Ajustamos el tiempo de escritura para simular una escritura más lenta
     
      pauseFor:10000000, // Pausa muy grande
      // deleteSpeed: 10000000,// Pausa muy grande
      
    }}
  />
</h3>

 <h3>
  <Typewriter
    options={{
      autoStart: true,
      loop:true, // Desactivamos la repetición de la animación
      cursor: '', // Ocultamos el cursor
      strings: ['Desarrollo Web', 'FULL STACK', 'Frontend', 'Backend'],
      delay: 75, // Ajustamos el tiempo de escritura para simular una escritura más lenta
      deleteSpeed: 90, // Establecemos la velocidad de borrado en 0 para que no haya borrado
    }}
  />
</h3> 


    {/* <h3>
            <Typewriter
              options={{
                autoStart: true,
                loop: false,
                typeSpeed: 90,
                backSpeed: 90,
                strings: ['Hola...Bienvenido a mi Portaolio'],
                deleteSpeed: 1000000,
                pauseFor: Infinity,
              }}
            />
          </h3> */}
              {/* <h3>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                typeSpeed: 90,
                backSpeed: 90,
                strings: ['Hola','2222o','l','a'],
              }}
            />
          </h3> */}
        <h2>{t("inicio.webDeveloper")}</h2>
        <h3>{t("inicio.fullStack")}</h3>
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
