import './navbar.css'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../images/logos/logo.png'
import {links} from '../../data'
import {FaFacebookF,FaLinkedinIn,FaBars} from 'react-icons/fa'
import {BsInstagram,BsTwitter} from 'react-icons/bs'
import{MdClose} from 'react-icons/md'
import { useState } from 'react'
import Fade from 'react-reveal/Fade';

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false)
  return (
    <nav>
      <Fade left><div className="container nav__container">
        <Link to='/' className='logo'>
          <img src={logo} alt="Nav Logo" />
        </Link>
        <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
          {
            links.map(({name,path}, index) => {
              return(
                <li>
                  <NavLink to={path} className={({isActive}) => isActive ? 'active' : ''}>{name}</NavLink>
                </li>
              )
            })
          }
       </ul>
       <ul className='social__links'>
        <li><Link><FaFacebookF className='fb' /></Link> </li>
        <li><Link><FaLinkedinIn className='linkedin' /></Link> </li>
        <li><Link> <BsInstagram  className='insta' /></Link> </li>
        <li><Link><BsTwitter className='twitter' /></Link> </li>
       </ul>
        <button className='nav__toggle-btn' onClick={() => setIsNavShowing(!isNavShowing)}>
          {
            isNavShowing ?  <MdClose /> : <FaBars />
          }
         
        </button>
      </div></Fade>
    </nav>
  )
}

export default Navbar
