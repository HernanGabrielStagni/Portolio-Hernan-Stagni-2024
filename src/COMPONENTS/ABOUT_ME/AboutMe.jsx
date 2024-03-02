import React from "react";
import BannerSkills from "../BANNER_SKILLS/BannerSkills";
import "./aboutMe.css";

const AboutMe = () => {
  return (
    <section className="container__aboutMe" id="skills">
      {/* <article className="div__title"> */}
        <title className="title__aboutMe">About Me</title>
      {/* </article> */}

      <article className="div__presentation">
        <div className="pres__aboutMe">
          <h2> ¡Hola, Bienvenido...! </h2>

          <h4>¡Gracias por visitar mi portafolio! </h4>
          <br />
          <p>
            Soy{" "}
            <span>
              <b>Hernan Gabriel Stagni</b>
            </span>
            , un apasionado desarrollador Full Stack, dedicado a la creación de
            soluciones web innovadoras y funcionales. 
            <br /> 
            <br /> 
            Me enfoco en el desarrollo
            de aplicaciones completas y dinámicas, implementando diversas
            tecnologias teles como:  <br /><b> "HTML5", "CSS3",
            "JavaScript", "ReactJS", "Node.js", "Express.js" y "PostgrSQL".</b>
            <br />
            <br /> 
            
            Creo en la <b>"mejora continua"</b>, la <b>"comunicación efectiva" </b> y el
            <b> "trabajo en equipo",</b> para lograr resultados que ofrezcan una
            experiencia excepcional al usuario.
          </p>
          <br />
          <br />
          <h3>
            Si tienes alguna inquietud, ¡ No dudes en contactarme...!
          </h3>
        </div>
      </article>
      
    </section>
  );
};

export default AboutMe;
