

const Proyect_card = ({proyect}) => {
    // {nombre, imagen, githubUrl,netlifyUrl}
    const { nombre, imagen, githubUrl, netlifyUrl } = proyect;
  return (
    <div className="proyect">
      <img src={imagen} alt={nombre} />
      <div className="descripcion">
        <h3>{nombre}</h3>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          Link to ... GitHub
        </a>
        <a href={netlifyUrl} target="_blank" rel="noopener noreferrer">
          Link to ...Netlify
        </a>
      </div>
    </div>
  );
};

export default Proyect_card;
