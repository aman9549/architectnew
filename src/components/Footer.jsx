import { Link } from "react-router-dom"
import logo from '../images/logos/logo.png'
import {FaFacebookF,FaLinkedinIn} from 'react-icons/fa'
import {BsInstagram,BsTwitter} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
        <div className="container footer_container">
            <article>
            <Link to='/' className="logo">
                <img src={logo} alt="" />
            </Link>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat dolores debitis sapiente id modi nisi saepe fugit reprehenderit cupiditate quae nobis voluptates labore, assumenda dolor quasi odit eum iste commodi?</p>
            <div className="footer_socials">
            <a href=""><FaFacebookF  className='fb'/></a>
            <a href=""><FaLinkedinIn className='linkedin' /></a>
            <a href=""><BsInstagram className='insta'/></a>
            <a href=""><BsTwitter className='twitter' /></a>
            </div>
            </article>

            <article>
                <h4>Address</h4>
                <ul>
                    <li>69 Ganpati Apartments</li>
                    <li>Vaishali Nagar</li>
                    <li>Jaipur</li>
                </ul>
                <article style={{marginTop:"20px"}}>
                <h4>Contact</h4>
                <ul>
             <li>+91 9549718564</li>
                    </ul>
            </article>
            </article>
           
            <article>
                <h4>Links</h4>
                <Link to='/about'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/about'>Contact</Link>
                <Link to='/about'>Blog</Link>
                <Link to='/about'>Projects</Link>
                <Link to='/about'>Services</Link>
            </article>  
            <article>
                <h4>Services</h4>
                <Link to='/about'>Design & Painting</Link>
                <Link to='/about'>Exterior & Design</Link>
                <Link to='/about'>Interior &Design</Link>
                
            </article>  
        </div>
            <div className="footer_copyright">
                <h1>Architecture</h1>
                <small>2023 Architecture &copy; AL Rights Reserved</small>
            </div>
    </footer>
  )
}

export default Footer
