import React from 'react'
import Slider from 'react-slick'

// CSS
import './HomeCSS/HomeCompo15.css'

// AOS
import Aos from 'aos'

// Images
import HomeS15img1 from '../../Images/Home/Slides/HomeS15-1.png'
import HomeS15img2 from '../../Images/Home/Slides/HomeS15-2.png'
import HomeS15img3 from '../../Images/Home/Slides/HomeS15-3.png'
import HomeS15img4 from '../../Images/Home/Slides/HomeS15-4.jpeg'
import HomeS15img5 from '../../Images/Home/Slides/HomeS15-5.png'
import HomeS15img6 from '../../Images/Home/Slides/HomeS15-6.jpeg'

const HomeS15Data =[
    {
        id : 1,
        link : "https://youtu.be/3ZZCIbj00-M",
        image : HomeS15img1
    },
    {
        id : 2,
        link : "https://youtu.be/ELzd_7eqmTA",
        image : HomeS15img2
    },
    {
        id : 3,
        link : "https://youtu.be/fX7dynlyeJ0",
        image : HomeS15img3
    },
    {
        id : 4,
        link : "https://youtu.be/sWdJ21_NhPw",
        image : HomeS15img4
    },
    {
        id : 5,
        link : "https://youtu.be/3wmhx64w18o",
        image : HomeS15img5
    },
    {
        id : 6,
        link : "https://youtu.be/_0IChm2oBao",
        image : HomeS15img6
    }
]

const HomeCompo15 = () => {

  // AOS
  Aos.init();

    // Settings
    const settings = {
        dots: true,          // Hide dots
        infinite: true,       // Infinite scrolling
        speed: 2000,           // Scrolling speed
        slidesToShow: 3,      // Show 3 cards at a time
        slidesToScroll: 1,    // Scroll 1 card at a time
        autoplay: true,       // Auto-scroll
        autoplaySpeed: 4000,  // Stop for 3 seconds
        pauseOnHover: false,   // Pause when hovering
        draggable: true,      // Enable dragging
        swipeToSlide: true,   // Allow swipe to slide functionality
        arrows: false,        //Removes the next and previous buttons
        responsive: 
        [
          {
            breakpoint: 992,
            settings: 
            {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 767,
            settings: 
            {
              slidesToShow: 1
            }
          }
        ]
    }

  return (
    <>
      <div className='container-fluid home-s15-container'>
        <h2 className='home-s15-heading'
        data-aos="fade-down"
        data-aos-delay='1000'
        data-aos-duration="1000"
        data-aos-once="true">Real Water Warriors<span className='home-s15-highlight'>, Real Results</span></h2>

        <Slider {...settings}>
            {
                HomeS15Data.map( slide =>{
                    return(
                        <div className='col-md-1 col-lg-4 home-s15-container' key={slide.id}>
                            <div className='home-s15-img-container'>

                                {/* Image */}
                                <div className='home-s15-img-container-inside'>
                                    <a className='home-s15-img-link' href={slide.link} ><img className='home-s15-img' src={slide.image} alt='HomeS15.png'/></a>
                                </div>

                                {/* Icon */}
                                <div className='home-s15-icon-container'>
                                    <i className="fa-regular fa-circle-play home-s15-icon"></i>
                                </div>
                            </div>
                            
                        </div>
                    )
                })
            }

        </Slider>

      </div>
    </>
  )
}

export default HomeCompo15
