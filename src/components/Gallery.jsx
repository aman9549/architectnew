import React, { useState } from 'react'
import { gallery } from '../data'
import Card from '../ui/Card'
import {AiOutlineCloseSquare} from 'react-icons/ai'
import Fade from 'react-reveal/Fade';


const Gallery = () => {

    const [model, setModel] = useState(false);
    const [tempingSrc, setTempImgSrc] = useState('');
    const getImg = (img) =>{
        setTempImgSrc(img);
        setModel(true)
    }
  return (
    <div className='gall'>
    <div className={model ? "model open" : "model"}>
       <img src={tempingSrc} alt="img" />
       <AiOutlineCloseSquare onClick={() => setModel(false)}/>
    </div>
    <div className='container gallery_container'>
      {
        gallery.map(({id, img}) => {
            return <div key={id} onClick={() => getImg(img)}>
             <Card >
             <Fade right><img src={img} alt="" style={{width:'100%'}} /> </Fade>
            </Card>
            
            </div>
        })
      }
    </div>
    </div>
  )
}

export default Gallery
