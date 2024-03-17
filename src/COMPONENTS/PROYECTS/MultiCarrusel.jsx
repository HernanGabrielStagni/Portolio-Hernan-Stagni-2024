import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './multiCarrusel.css'
const MultiCarrusel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
//   <Carousel
//     swipeable={false}
//     draggable={false}
//     showDots={true}
//     responsive={responsive}
//     ssr={true} // means to render carousel on server-side.
//     infinite={true}
//     autoPlay={this.props.deviceType !== "mobile" ? true : false}
//     autoPlaySpeed={1000}
//     keyBoardControl={true}
//     customTransition="all .5"
//     transitionDuration={500}
//     containerClass="carousel-container"
//     removeArrowOnDeviceType={["tablet", "mobile"]}
//     deviceType={this.props.deviceType}
//     dotListClass="custom-dot-list-style"
//     itemClass="carousel-item-padding-40-px"
//   ></Carousel>;

  return (
    <div>
      <Carousel responsive={responsive}>
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
      </Carousel>
      
    </div>
  );
};

export default MultiCarrusel;
