import img from '../images/demos/architecture-2/generic/generic-1.jpg'
import img1 from '../images/demos/architecture-2/generic/generic-2.jpg'
import Fade from 'react-reveal/Fade';

import Button from '../ui/Button'
import Company from './Company'
const About = () => {
  return (
    <div>
     <Fade left>
       <div className="about_container archi__container">
      <div className="archi__container-left">
        <img src={img} alt="" />
        <img src={img1} alt="" />
       </div>
       <div className="archi__container-right">
        <small>WE'RE HERE TO HELP</small>
        <h1>You need space for better living.</h1>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur.</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse enim consequatur laborum asperiores, numquam id placeat. Quibusdam consequatur nam, similique eos deserunt laboriosam est eius ratione fugiat vel! Odit, ea?</p>
        <Button>Contact us</Button>
       </div>
      </div></Fade> 
<Company />
      
      </div>
  )
}

export default About
