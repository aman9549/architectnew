import React from 'react'
import Button from '../ui/Button'
import Carousel from 'react-elastic-carousel'
import pic from '../images/avatars/avatar-3.jpg'
import { ourTeam } from '../data'
import Fade from 'react-reveal/Fade';

const OurTeam = () => {

    
  return (
    <Fade left> 
    <div className='container our_Team'>
      <div className='our_Team-left'>
      <Carousel itemsToShow={2}>
      {
                    ourTeam.map(({id, img, sub, title, desc})=> {
                        return <div class="containert">
      <div class="cardt">
    <div class="img"><img src={img} alt="" /></div>
    <div class="content">
      <h3>{title}</h3>
      <h5>{sub}</h5>
      <p>
       {desc}
      </p>
      
    </div>
  </div> 
</div>})
                      }
</Carousel>
      </div>
      <div className='our_Team-right'>
        <small>THE BEST PROFESSIONALS</small>
        <h1>Meet Our Team</h1>
        <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita incidunt quaerat aspernatur.</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consectetur molestiae, nihil provident, sed amet perferendis eius impedit iste hic temporibus. Dolorem minus optio ad vitae maxime id repudiandae saepe.</p>
        <div className='but'>
        <button className="app">Contact us</button>
        </div>
      </div>
    </div>  </Fade>
  )
}

export default OurTeam
