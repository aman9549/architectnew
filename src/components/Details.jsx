import React from 'react'
import Card from '../ui/Card'
import { design } from '../data'
import {IoIosArrowDropleftCircle,IoIosArrowDroprightCircle} from 'react-icons/io'
import { useState } from 'react'
import Fade from 'react-reveal/Fade';



const Details = () => {
  const [index, setIndex] = useState(0);
  const {name, quote, job} = design[index];
  
  const prevTestimonialHandler = () => {
    setIndex(prev => prev - 1)

    if(index <= 0){
       setIndex(design.length - 1);
    }
}


    const nextTestimonialHandler = () => {

        setIndex(prev => prev + 1);
        if(index >= design.length -1){
           setIndex(0)
        }
    }
  return (
    <div>
     <Fade left>
        <section className="testimonials">
        <div className="container testimonial__container">
            <Card className="testimonial">
                <p className="testimonial__quote">{`${quote}`}</p>
                <h1>{name}</h1>
                <p className="testimonial__title">{job}</p>
                <div className="testimonail__btn-container">
                <button className="testimonail__btn" onClick={prevTestimonialHandler}>  <IoIosArrowDropleftCircle /></button>
                <button className="testimonail__btn" onClick={nextTestimonialHandler}>  <IoIosArrowDroprightCircle /></button>
              </div>
            </Card>
            
        </div>
      </section>
      </Fade>
    </div>
  )
}

export default Details
