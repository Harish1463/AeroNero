import React from 'react'
import Aos from 'aos'

// CSS
import './AbtCss/AbtCom7.css'

//import images for team
import Durga from '../../Images/About/Durga-CEO2.png'
import maj from '../../Images/About/Maj.-Gen.-Indrabalan-Advisor.png'
import abi from '../../Images/About/Abbishek-V-Bharadwaj-Head-of-Sales-.png'
import rohit from '../../Images/About/I-K-Rohit-Head-of-Marketing.png'

const AboutTeam = [
    {
        id: 1,
        image:Durga ,
        name:"Durga Das",
        caption: "Founder and CEO",
        para:"Tech pioneer with 30+ experience, solving global water issues with AERONERO’s desert-inspired solution. Multifaceted leader, blending entrepreneurship, sportsmanship, & mentorship for impactful change."
    },
    {
        id: 2,
        image:maj,
        name:"Maj. Gen. Indrabalan",
        caption: "CTO and Co-Founder",
        para:"Former Chief of Staff at HQ Dakshin Bharat Area,  has a distinguished career spanning 37 years in the Indian army. He represented India as a military observer in United Nations Mission mandated to contain civil war in Sierra Leone, Africa. He holds BSc,  B.Tech,  M.Sc, MBA, and an M.Phil degree, He is an alumnus of the National Defence Academy Kadakvasala and IIT Kharagpur."
    },
    {
        id: 3,
        image:abi,
        name:"Abbishek V Bharadwaj",
        caption: "Head of Sales",
        para:"With an MBA from Symbiosis – Pune, he comes with a depth of experience in the corporate and entrepreneurial space. He has worked in  Citibank, Godrej & Boyce, Thermax, post which he successfully starter and exited a Saas startup (Swaas)."
    },
    {
        id: 4,
        image:rohit,
        name:"I K Rohit",
        caption: "Head of Marketing",
        para:"With a Masters in Economics and an MBA in Marketing, He is a first generation entrepreneur who has co-founded 2 other companies in the sustainable mobility space. Prior to his entrepreneurial journey, he was a professional cricketer who represented Tamil Nadu."
    }
]

const AbtCom7 = () => {

    // AOS
    Aos.init();

  return (
    <>
        <div className='container-fluid About-r7-container'>

            {/* Heading  */}
            <h3 
            data-aos="fade-down"
            data-aos-delay="800"
            data-aos-duration="800" 
            data-aos-once="true" className='About-r7-heading'>Meet <span className='About-r7-heading-color'>the team</span></h3>

            {/* Card  */}
            <div className='row About-r7-small-container'>

                {
                    AboutTeam.map(record => {
                        return (
                            <div key={record.id} className='col-12 col-md-6 col-lg-3'>
                                <div>

                                    {/* image  */}
                                    <div className='About-r7-image-container'>

                                        {/* image  */}
                                        <img src={record.image} alt='Team member' className='About-r7-image' />

                                        {/* para  */}
                                        <div className='About-r7-image-para-div'>
                                            <p className='About-r7-image-para'>{record.para}</p>
                                        </div>

                                    </div>

                                    {/* Content  */}
                                    <h3 className='About-r7-card-heading'>{record.name}</h3>
                                    <p className='About-r7-card-para'>{record.caption}</p>

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

export default AbtCom7
