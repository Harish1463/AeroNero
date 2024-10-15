import React from 'react'
import Slider from 'react-slick'

// CSS
import './HomeCSS/HomeCompo10.css'

// AOS
import Aos from 'aos'

// Images
import Slide1 from '../../Images/Home/Slides/1ISO-27001.jpg'
import Slide2 from '../../Images/Home/Slides/ISO-Certified.jpg'
import Slide3 from '../../Images/Home/Slides/Water-Quality.jpg'
import Slide4 from '../../Images/Home/Slides/WHO.jpg'
import Slide5 from '../../Images/Home/Slides/fssai.jpg'

const certifications =[
    {
        id : 1,
        image : Slide1
    },
    {
        id : 2,
        image : Slide2
    },
    {
        id : 3,
        image : Slide3
    },
    {
        id : 4,
        image : Slide4
    },
    {
        id : 5,
        image : Slide5
    }
]

const HomeCompo10 = () => {

  // AOS
  Aos.init();
  

    // Settings
    const settings = {
        dots: false,          // Hide dots
        infinite: true,       // Infinite scrolling
        speed: 3000,           // Scrolling speed
        slidesToShow: 6,      // Show 5 cards at a time
        slidesToScroll: 1,    // Scroll 1 card at a time
        autoplay: true,       // Auto-scroll
        autoplaySpeed: 0,  // Stop for 0 seconds
        pauseOnHover: false,   // Pause when hovering
        draggable: true,      // Enable dragging
        swipeToSlide: true,   // Allow swipe to slide functionality
        arrows: false,        //Removes the next and previous buttons
        cssEase: 'linear',    // Continuous scrolling effect
        centerMode: true,          // Adds space between slides
        // centerPadding: '70px',      // Adjust the space as needed
        responsive: 
        [
          {
            breakpoint: 992,
            settings: 
            {
              slidesToShow: 4
            }
          },
          {
            breakpoint: 767,
            settings: 
            {
              slidesToShow: 2
            }
          }
        ]
    }

  return (
    <>
      <div className='container-fluid home-s10-container'>
        {/* Heading */}
        <div>
            <h2 className='home-s10-heading'
            data-aos="fade-down"
            data-aos-duration="800"
            data-aos-once="true"
            >Certifications</h2>
        </div>

        {/* Slides */}
        <Slider {...settings}>
            {
                certifications.map( pic =>{
                    return(
                        <div key={pic.id}>
                            <div className='home-s10-img-container'>
                                <img className='home-s10-img' src={pic.image} alt='certifications.png' />
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

export default HomeCompo10
