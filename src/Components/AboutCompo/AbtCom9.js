import React from 'react'

// CSS
import './AbtCss/AbtCom9.css'

// Images
import ImageImpact1 from '../../Images/Home/Frame-171.png'
import ImageImpact2 from '../../Images/Home/Frame-170.png'
import ImageImpact3 from '../../Images/Home/Frame-168.png'
import ImageImpact4 from '../../Images/Home/Frame-169.png'

// JSON
const AboutImpact = [
    {
        id: 1,
        image:ImageImpact1 ,
        heading:"200+",
        caption: "SOLUTIONS DELIVERED"
    },
    {
        id: 2,
        image:ImageImpact3,
        heading:"12 MILLION",
        caption: "LITRES OF WATER GENERATED TILL DATE"
    },
    {
        id: 3,
        image:ImageImpact2,
        heading:"4 MILLION",
        caption: "LIVES BENEFITED TILL DATE"
    },
    {
        id: 4,
        image:ImageImpact4,
        heading:"50 MILLION",
        caption: "LITRES OF WATER SAVED TILL DATE"
    }
]

const AbtCom9 = () => {
  return (
    <>
        <div className='container-fluid'>
                <div className='row About-r9-container'>
                    <h3 className='About-r9-heading' data-aos="fade-down"
                        data-aos-duration="800" data-aos-once="true">Our <span className='About-r9-heading-color'>Impact Story</span></h3>

                    {/* left side  */}
                    <div className='row col-12 About-r9-card-container'>
                        {
                            AboutImpact.map(record => {
                                return (
                                    <div key={record.id} className='About-r9-card-div col-md-12 col-lg-6' data-aos="fade"
                                        data-aos-duration="800" data-aos-once="true">

                                        <div className='About-r9-card-inside-container'>
                                            {/* image  */}
                                            <img src={record.image} className='About-r9-card-img' alt='mission img' />

                                            {/* content */}
                                            <div className='d-flex flex-column justify-content-center'>
                                                <h3 className='About-card-heading'>{record.heading}</h3>
                                                <p className='About-card-para'>{record.caption}</p>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })
                        }

                    </div>

                </div>

        </div>

    </>
  )
}

export default AbtCom9
