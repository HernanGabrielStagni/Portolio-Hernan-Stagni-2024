


// Proyects.js

import './proStatic.css'
import proyects from "../../C_UTILS/arrayProyects";
import Proyect_card from './Proyect_card';


// Genere un js con el arreglo de los proyectos y la importe en este componente
//esto me permite disponer de las variables nombre, imagen, githubUrl, netlifyUrl

const ProStatic = () => {
  return (
    <section id='proyects__static'>
                     
      <h2 className='title__proyects__static'>My Proyects</h2>
      <div className="proyects-container__static">
      {/* llamo a proyect y le paso uno a uno los elementos completos */}
        {proyects.map((proyect, index) => (
          <Proyect_card key={index} proyect={proyect} />
        ))}
      </div> 
    </section>
  )
}

export default ProStatic








