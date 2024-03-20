import DescargarPDF from "../COMPONENTS/Descargar_PDF/DescargarPDF";
import "../COMPONENTS/inicio_CSS.css";
import { useTranslation } from "react-i18next";

import Whatsapp from "./WHATSAPP/Whatsapp";
import Typewriter from "typewriter-effect";
import Counter from "../COUNTER/Counter";

// con esto en cada componente accedemos a las variables en cada lengueje
//import { useTranslation } from "react-i18next"; (importa el Hook )
//const { t } = useTranslation();  (baja en t el json)
//<h1 >{t("inicio.name")}</h1>     (accede a la variable deseada)

const Inicio = () => {
  const { t } = useTranslation();

  return (
    <section id="inicio">
      <div className="presentation">
        <div className="title__name">
          <h1>{t("inicio.name")}</h1>
        </div>
      
        <h2 className="title__web">
          <Typewriter
            options={{
              autoStart: true,
              loop: true, // Desactivamos la repetición de la animación
              cursor: "",
              strings: [t("inicio.webDeveloper")],
              delay: 75, // Ajustamos el tiempo de escritura para simular una escritura más lenta

              pauseFor: 10000000, // Pausa muy grande
              // deleteSpeed: 10000000,// Pausa muy grande
            }}
          />
        </h2>

        <h3>
          <Typewriter
            options={{
              autoStart: true,
              loop: true, // repetición de la animación
              cursor: "_", // Ocultamos el cursor
              strings: [
                t("inicio.fullStack"),
                t("inicio.Frontend"),
                t("inicio.Backend"),
              ],
              delay: 75, // Ajustamos el tiempo de escritura para simular una escritura más lenta
              deleteSpeed: 90, // Establecemos la velocidad de borrado en 0 para que no haya borrado
            }}
          />
        </h3>

        {/* // Hola , soy un desarrollador web full stack con expreriencioa 
       //en HTML, CSS, JavaScript, React, Git y npm. */}
        <div className="presentation__invitacion">
          <p> {t("inicio.presentation")}</p>
          <h1> {t("inicio.invitacion")}</h1>
          {/*Estoy listo para que trabajemos juntos**/}
        </div>
      </div>
      <Counter/>
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
