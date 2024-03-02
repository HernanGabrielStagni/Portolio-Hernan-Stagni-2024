


// Proyects.js
import React from 'react';
import './proyects.css'

function Proyect({ nombre, imagen, githubUrl, netlifyUrl }) {
  return (
    <div className="proyect">
      <img src={imagen} alt={nombre} />
      <div className="descripcion">
        <h3>{nombre}</h3>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">Link to ... GitHub</a>
        <a href={netlifyUrl} target="_blank" rel="noopener noreferrer">Link to ...Netlify</a>
      </div>
    </div>
  );
}

function Proyects() {
  const proyects = [

    
    {
      nombre: 'Great Phrases',
      imagen: '/img/01_Great Phrases_1.png',
      githubUrl: 'https://github.com/HernanGabrielStagni/Entregable1_React',
      netlifyUrl: 'https://galletas-de-la-infortuna.netlify.app/',
    },
    {
      nombre: 'Weather',
      imagen: '/img/02.Weather.png',
      githubUrl: 'https://github.com/HernanGabrielStagni/entregable2.hernan.9.8.23t',
      netlifyUrl: 'https://entregable2-stagni-9-8-23.netlify.app/',
    },
    {
      nombre: 'Pokedex 22222',
      imagen: '/img/0_Pokedex.png',
      githubUrl: 'https://github.com/HernanGabrielStagni/PORTFOLIO_HERNAN.git',
      netlifyUrl: 'https://entregable-5-pokedex-hernan-stagni.netlify.app/ ',
    }, {
      nombre: 'Pokedex 22222',
      imagen: '/img/0_Pokedex.png',
      githubUrl: 'https://github.com/HernanGabrielStagni/PORTFOLIO_HERNAN.git',
      netlifyUrl: 'https://entregable-5-pokedex-hernan-stagni.netlify.app/ ',
    }, {
      nombre: 'Pokedex 22222',
      imagen: '/img/0_Pokedex.png',
      githubUrl: 'https://github.com/HernanGabrielStagni/PORTFOLIO_HERNAN.git',
      netlifyUrl: 'https://entregable-5-pokedex-hernan-stagni.netlify.app/ ',
    }, {
      nombre: 'Pokedex 22222',
      imagen: '/img/0_Pokedex.png',
      githubUrl: 'https://github.com/HernanGabrielStagni/PORTFOLIO_HERNAN.git',
      netlifyUrl: 'https://entregable-5-pokedex-hernan-stagni.netlify.app/ ',
    },
    
    // Agrega más proyects aquí
  ];

  return (
    <section id='proyects'>
      <h2>My Proyects</h2>
      <div className="proyects-container">
        {proyects.map((proyect, index) => (
          <Proyect key={index} {...proyect} />
        ))}
      </div>
    </section>
  );
}

export default Proyects;