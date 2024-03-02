import React from "react";
import "./skills.css";
const Skills = () => {
  return (
    <section className="container__skills" id='skills'>
      {/* <div className="skills"> */}

        <title className="title_skills">Skills</title>
        
        <article className="skill">
          <i className="bx bxl-html5"></i>
          <p className="html5">HTML5</p>
        </article>

        <article className="skill">
          <i className="bx bxl-css3"></i>
          <p className="css3">CSS3</p>
        </article>

        <article className="skill">
          <i className="bx bxl-javascript"></i>
          <p className="javascript">JavaScript</p>
        </article>

        {/* <article className="skill">
          <i className="bx bxl-typescript"></i>
          <p className="typescript">TypeScript</p>
        </article> */}

        {/* <article className="skill">
          <i className="bx bxl-vuejs"></i>
          <p className="vue">Vue.js</p>
        </article> */}

        <article className="skill">
          <i className="bx bxl-react"></i>
          <p className="react">React.js</p>
        </article>

        <article className="skill">
          <i className="bx bxl-nodejs"></i>
          <p className="node">Node.js</p>
        </article>

        <article className="skill">
          <i className="bx bxl-postgresql"></i>
          <p className="postgres">PostgreSQL</p>
        </article>
      {/* </div> */}
    </section>
  );
};

export default Skills;
