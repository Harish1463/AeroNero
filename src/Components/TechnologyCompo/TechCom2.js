import React from 'react'

// CSS
import './TechCSS/TechCom2.css'

// AOS
import aos from 'aos'

// Images
import TechS1Img1 from '../../Images/Technology/Air Filtre.png'
import TechS1Img3 from '../../Images/Technology/UV Pure.png'
import TechS1Img5 from '../../Images/Technology/Cool system.png'

// JSON
const TechS2Row =[
    {
        id : 1,
        image : TechS1Img1,
        heading : "Air Filtration",
        paragraph : "Impurities are removed from the air."
    },
    {
        id : 2,
        image : TechS1Img5,
        heading : "Carbon Filtration",
        paragraph : "Unpleasant tastes, odors, and colors are eliminated."
    },
    {
        id : 3,
        image : TechS1Img3,
        heading : "UV Purification",
        paragraph : "Harmful bacteria are eradicated."
    },
    {
        id : 4,
        image : TechS1Img1,
        heading : "Mineralization",
        paragraph : "Essential minerals are added to create alkaline water with a pH of 6.5-8.5."
    },
    {
        id : 5,
        image : TechS1Img5,
        heading : "Cooling System",
        paragraph : "Our innovative cooling system condenses the purified air into clean, drinkable water."
    }
]

const TechCom2 = () => {

    // AOS
    aos.init();

  return (
    <>
        <div className='tech-s2-container'>

            {/* Heading */}
            <h2 className='tech-s2-heading'
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-once="ture" >The Science <span className='tech-s2-highlight'>Behind Pure Water</span></h2>

            {/* Paragraph */}
            <p className='tech-s2-para'>Aeronero's patented AWG technology transforms ambient air into pure, refreshing water, by replicating the natural water cycle, through a multi-stage process:</p>

            <div className='row tech-s2-row'>
                {
                    TechS2Row.map( record =>{
                        return(
                            <div className='col-12 col-md-2 col-lg-2 tech-s2-card' key={record.id}>
                                <div className='tech-s2-img-container'>
                                    <img className='tech-s2-img' src={record.image} alt='Technology Section 2.png'/>
                                </div>

                                <div>
                                    <h4 className='tech-s2-sm-heading'>{record.heading}</h4>
                                    <p className='tech-s2-sm-para'>{record.paragraph}</p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    </>
  )
}

export default TechCom2
