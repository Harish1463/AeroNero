import React from "react";
import Slider from "react-slick";
import Aos from "aos";
import { useRef } from "react";

// To Make the Arrows Visible
import "slick-carousel/slick/slick-theme.css";

// CSS
import "./AbtCss/AbtCom10.css";

// Images
import AbtS10Award1 from "../../Images/About/Award-1.png";
import AbtS10Award2 from "../../Images/About/Award-2.png";
import AbtS10Award3 from "../../Images/About/Award-3.png";

// JSON
const AbtS10Award = [
  {
    id: 1,
    image: AbtS10Award1,
  },
  {
    id: 2,
    image: AbtS10Award2,
  },
  {
    id: 3,
    image: AbtS10Award3,
  },
];

const AbtCom10 = () => {

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  // AOS
  Aos.init();

  // Settings
  const settings = {
    dots: false, // Hide dots
    infinite: true, // Infinite scrolling
    speed: 1000, // Scrolling speed
    slidesToShow: 3, // Show 5 cards at a time
    slidesToScroll: 1, // Scroll 1 card at a time
    autoplay: false, // Auto-scroll
    autoplaySpeed: 0, // Stop for 0 seconds
    pauseOnHover: false, // Pause when hovering
    draggable: true, // Enable dragging
    swipeToSlide: true, // Allow swipe to slide functionality
    arrows: false, //Removes the next and previous buttons
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          arrows: true,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="container-fluid abt-s10-container">
        {/* Heading */}
        <h2
          data-aos="fade-down"
          data-aos-duration="800"
          data-aos-once="true"
          className="abt-s10-heading"
        >
          Awards
        </h2>

        <div className="row abt-s10-slider-container">
          <Slider ref={slider => {
          sliderRef = slider;
        }} {...settings}>
            {AbtS10Award.map((award) => {
              return (
                <div key={award.id}>
                  <div className="abt-s10-img-container">
                    <img
                      className="abt-s10-img"
                      src={award.image}
                      alt="Award.png"
                    />
                  </div>
                </div>
              );
            })}
          </Slider>
          <div style={{ textAlign: "center" }}>
            <button className="button abt-s10-arrow-container" onClick={previous}>
              <i className="fa-solid fa-arrow-left abt-s10-arrow"></i>
            </button>
            <button className="button abt-s10-arrow-container" onClick={next}>
              <i className="fa-solid fa-arrow-right abt-s10-arrow"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AbtCom10;
