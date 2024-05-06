import  Card from '../ui/Card'
import { clients } from '../data'
import {MdArrowBackIosNew ,MdArrowForwardIos} from 'react-icons/md'
import { useState } from 'react'
import Fade from 'react-reveal/Fade';

const Clients = () => {

    const [index, setIndex] = useState(0);
  const { names, logo, desc} = clients[index];
  
  const prevTestimonialHandler = () => {
    setIndex(prev => prev - 1)

    if(index <= 0){
       setIndex(clients.length - 1);
    }
}


    const nextTestimonialHandler = () => {

        setIndex(prev => prev + 1);
        if(index >= clients.length -1){
           setIndex(0)
        }
    }
  return (
    <Fade right> 
    <div className='container clients-container'>
      <Card className="pop">
        <small>Happy Clients</small>
        <h1>See What Happy Client Saying</h1>
 <div className='clients-sub'>
            <p>{desc}</p>
            <article>{logo}</article>
            <h4>{names}</h4>
        </div>
        <button className="clients__btn-left" onClick={prevTestimonialHandler}>  <MdArrowBackIosNew /></button>
                <button className="clients__btn-right" onClick={nextTestimonialHandler}>  <MdArrowForwardIos /></button>
      </Card>
    </div></Fade>
  )
}

export default Clients
