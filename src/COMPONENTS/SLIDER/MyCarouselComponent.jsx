import "./MyCarouselComponent.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MyCarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

// const Carrusel = () => {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

  return (
    <div className="carrusel__container"> 
     <Slider  {...settings} >
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
       </Slider>
    </div>
  );
};

export default MyCarouselComponent

