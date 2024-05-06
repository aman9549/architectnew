import React from 'react'
import { companys } from '../data'
import Fade from 'react-reveal/Fade';

const Company = () => {
  return (
    <Fade right><div className='about_container company__names'>
            {companys.map(({id, icon}) => {
                return <img src={icon} />
            })  }
      </div> </Fade>
  )
}

export default Company
