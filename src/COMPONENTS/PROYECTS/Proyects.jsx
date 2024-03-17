// Proyects.js

import { useState } from "react";
import "./proyects.css";
import proyects from "../../C_UTILS/arrayProyects";

function Proyect({
  nombre,
  imagen,
  githubUrl,
  netlifyUrl,
  setCurrentImg,
  currentImg,
}) {
  const handlePrevius = () => {
    currentImg > 0
      ? (setCurrentImg(currentImg - 1), console.log(currentImg))
      : (setCurrentImg(2), console.log(currentImg));
  };
  const handleNext = () => {
    currentImg < 2
      ? (setCurrentImg(currentImg + 1), console.log(currentImg))
      : (setCurrentImg(0), console.log(currentImg));
  };

  return (
    <div className="proyect">
      <div className="container__slider">
        <button className="previus" onClick={handlePrevius}>
          ⟪
        </button>

        <div className={"style__img active__img"}>
          <img src={imagen} alt={nombre} />
        </div>

        <button className="next" onClick={handleNext}>
          {" "}
          ⟫{" "}
        </button>
      </div>

      <div className="descripcion">
        <h3>{nombre}</h3>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          Link to ... GitHub
        </a>
        <a href={netlifyUrl} target="_blank" rel="noopener noreferrer">
          Link to ..Netlify
        </a>
      </div>
    </div>
  );
}

/***************************************************************************/
/***************************************************************************/
/***************************************************************************/
/***************************************************************************/
/***************************************************************************/

function Proyects() {
  //
  const [currentImg, setCurrentImg] = useState(0);

  return (
    <section id="proyects">
      <h2 className="title__proyects">My Proyects</h2>
      <div className="proyects-container">
        {/* llamo a proyect y le paso uno a uno los elementos completos */}
        {proyects.map(
          (proyect, index) =>
            currentImg === index && (
              <Proyect
                key={index}
                {...proyect}
                setCurrentImg={setCurrentImg}
                currentImg={currentImg}
              />
            )
        )}
      </div>
    </section>
  );
}

export default Proyects;
