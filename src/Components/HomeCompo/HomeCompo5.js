import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { EffectCoverflow, Navigation } from "swiper/modules";
import Nero from "../../Images/Home/3D swippper/Nero-Main.png";
import Bubble from "../../Images/Home/3D swippper/Bubble.png";
import Drizzle from "../../Images/Home/3D swippper/Drizzle.png";
import Thunder from "../../Images/Home/3D swippper/Thunder.png";
import Airwell from "../../Images/Home/3D swippper/Airwell.png";
import { NavLink } from "react-router-dom";

// CSS
import "./HomeCSS/HomeCompo5.css";

// JSON
const HomeS5Product = [
  {
    id: 1,
    image: Nero,
    path: "/nero",
  },
  {
    id: 2,
    image: Bubble,
    path: "/bubble",
  },
  {
    id: 3,
    image: Drizzle,
    path: "/drizzle",
  },
  {
    id: 4,
    image: Thunder,
    path: "/thunder",
  },
  {
    id: 5,
    image: Airwell,
    path: "/airwell",
  },
  {
    id: 6,
    image: Nero,
    path: "/nero",
  },
  {
    id: 7,
    image: Bubble,
    path: "/bubble",
  },
  {
    id: 8,
    image: Drizzle,
    path: "/drizzle",
  },
  {
    id: 9,
    image: Thunder,
    path: "/thunder",
  },
  {
    id: 10,
    image: Airwell,
    path: "/airwell",
  },
];

const HomeCompo5 = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row Home-r5-container">
          <h3 className="Home-r5-heading">
            Explore <span className="Home-r5-heading-color">our products</span>
          </h3>

          <div>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={5}
              loop={true}
              coverflowEffect={{
                rotate: 32,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }}
              navigation={true}
              breakpoints={{
                425: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
                1336: {
                  slidesPerView: 5,
                },
                1440: {
                  slidesPerView: 5,
                },
                2056: {
                  slidesPerView: 5,
                },
              }}
              modules={[EffectCoverflow, Navigation]}
            >
              {/* {
                    slides.map((slide, index) => (

                      <SwiperSlide key={index}>
                          <div className='CarouselImageCont1'>
                            <img src={slide} alt={Slide ${index + 1}} className="slide-image" />
                          </div>
                      </SwiperSlide>
              ))} */}

              {
                HomeS5Product.map((record) => {
                  return (
                    <div key={record.id}>
                      <SwiperSlide>

                        <div className="Home-r5-swipper-container">
                          <img
                            src={record.image}
                            alt="Product img"
                            className="Home-r5-slide-image"
                          />

                          <NavLink to={record.path} className="Home-r5-explore">
                            Explore
                          </NavLink>
                        </div>
                      </SwiperSlide>
                    </div>
                  );
                })
              }
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCompo5;
