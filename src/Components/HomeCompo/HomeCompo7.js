import React from 'react'

// CSS
import './HomeCSS/HomeCompo7.css'

// Images
import ImgProcess1 from '../../Images/Home/ImgProcess1.png'
import ImgProcess2 from '../../Images/Home/ImgProcess2.png'
import ImgProcess4 from '../../Images/Home/ImgProcess4.png'

// Json 
const HomeProcess = [
    {
        id: 1,
        image:ImgProcess1 ,
        heading:"PATENTED COOLING SURFACE",
        caption: "that condenses water vapour"
    },
    {
        id: 2,
        image:ImgProcess2,
        heading:"FILTRATION",
        caption: "to remove impurities"
    },
    {
        id: 3,
        image:ImgProcess1,
        heading:"CARBON FILTRATION",
        caption: "to remove colour, odour, and taste"
    },
    {
        id: 4,
        image:ImgProcess4,
        heading:"UV FILTRATION",
        caption: "to eliminate Bacteria"
    },
    {
        id: 5,
        image:ImgProcess2,
        heading:"MINERALISATION",
        caption: "to ensure alkaline water pH 6.5 – 8.5"
    }
]

const HomeCompo7 = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='row Home-r7-container'>

                    {/* content  */}
                    <div className='Home-r7-content-div'>

                        <h3 className='Home-r7-heading' 
                        data-aos="fade-down"
                        data-aos-duration="800"
                        data-aos-once="true"
                        ><span className='Home-r7-heading-color'>Just How Water</span> Is Supposed To Be.</h3>

                        <p className='Home-r7-para'>Aeronero's proprietary 5-Step advanced filtration system cleans your water in a
                            way where other existing technologies fail.</p>
                    </div>

                    {/* card */}
                    <div className='row Home-r7-card-container'>
                        {
                            HomeProcess.map(record => (
                                <div key={record.id} className='col-12 col-md-2 p-0'>

                                    {/* image */}
                                    <div className='Home-r7-img-div'>
                                        <img src={record.image} alt='process' className='Home-r7-img' />
                                    </div>
                                    
                                    {/* content  */}
                                    <h3 className='Home-r7-card-heading'>{record.heading}</h3>
                                    <p className='Home-r7-card-para'>{record.caption}</p>
                                </div>
                            ))

                        }
                    </div>

                </div>
            </div>

        </>
    )
}

export default HomeCompo7