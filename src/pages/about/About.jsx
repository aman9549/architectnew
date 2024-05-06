import './about.css'
import React, { useState } from 'react'
import {AiOutlineCloseSquare} from 'react-icons/ai'
import MultiHeader from '../../components/MultiHeader'
import Head from '../../images/blog/wide/blog-4.jpg'
import { gallery } from '../../data'
import Card from '../../ui/Card'
import OurTeam from '../../components/OurTeam'
import Clients from '../../components/Clients'
import Company from '../../components/Company'

const About = () => {
  const [model, setModel] = useState(false);
  const [tempingSrc, setTempImgSrc] = useState('');
  const getImg = (img) =>{
      setTempImgSrc(img);
      setModel(true)
  }
  return (
  <>
   <MultiHeader title='About Us' image={Head}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident numquam sint necessitatibus repellendus consequuntur maxime quia dolorem.</MultiHeader>

   <div className="container container_help">
    <small>WE'RE HERE TO HELP</small>
    <h1>You need space for better living.</h1>
    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur.</h5>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
<div className='container_help_img_cont'>
<div className={model ? "model open" : "model"}>
       <img src={tempingSrc} alt="img" />
       <AiOutlineCloseSquare onClick={() => setModel(false)}/>
    </div>
    <div className='container_help_img'>
    {
        gallery.map(({id, img}) => {
            return <div key={id}  >
             <Card >
                <img src={img} alt=""  onClick={() => getImg(img)}/>
            </Card>
            
            </div>
        })
      }
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    </div>
    
   </div>
   <OurTeam />
   <Clients />
   <Company />
   <div className='container container_help_para'>
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    </div>
  </>
  )
}

export default About
