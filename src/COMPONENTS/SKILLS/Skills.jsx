import React from "react";
import "./skills.css";
const Skills = () => {
  return (
    <div className="container__skills">

      <div className="skill">
        <i className="bx bxl-html5"></i>
        <p className="html5">HTML5</p>
      </div>

      <div className="skill">
        <i className="bx bxl-css3"></i>
        <p className="css3">CSS3</p>
      </div>

      <div className="skill">
        <i className="bx bxl-javascript"></i>
        <p className="javascript">JavaScript</p>
      </div>

      <div className="skill">
        <i className="bx bxl-typescript"></i>
        <p className="typescript">TypeScript</p>
      </div>

      <div className="skill">
        <i className="bx bxl-vuejs"></i>
        <p className="vue">Vue.js</p>
      </div>

      <div className="skill">
        <i className="bx bxl-react"></i>
        <p className="react">React.js</p>
      </div>
      
      <div className="skill">
        <i className="bx bxl-nodejs"></i>
        <p className="node">Node.js</p>
      </div>
      <div className="skill">
        <i className="bx bxl-postgresql"></i>
        <p className="postgres">PostgreSQL</p>
      </div>
    </div>
  );
};

export default Skills;
