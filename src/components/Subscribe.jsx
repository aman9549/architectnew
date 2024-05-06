import React from 'react'
import Button from '../ui/Button'
import Fade from 'react-reveal/Fade';

const Subscribe = () => {
  return (
    <Fade left> <div className='container subscribe_container'>
      <div className='subscribe_container-sub-1'>
        <small>WE'RE HERE TO HELP</small>
        <h1>Let's Talk About Your New Project, We can Do It!</h1>
      </div>
      <div className='subscribe_container-sub-2'>
        <button >Contact Us</button>
      </div>
    </div></Fade>
  )
}

export default Subscribe
