import React from 'react'
import DescargarPDF from './DescargarPDF';
import '../COMPONENTS/inicio_CSS.css'

const Inicio = () => {
    return (
        <section id="inicio">

          <div className="presentation">
            <h1>Full Stack Developer</h1>
            {/* <p>¡Hola! Soy un desarrollador web full stack con experiencia en "HTML", CSS, JavaScript, React, Git y npm.</p> */}
            <p> Hello! I am a full stack web developer with experience in "HTML", CSS, JavaScript, React, Git, and npm.</p>
          </div>

          
         <div className="imagen">
            <img src="/img/teorianudos-euler200.png" alt="img programer"  />
          </div> 
          <DescargarPDF/>
       </section>
      );
}

export default Inicio