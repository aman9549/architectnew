import './home.css'
import Header from '../../components/Header'
import About from '../../components/About'
import Details from '../../components/Details'
import Service from '../../components/Service'
import Experience from '../../components/Experience'
import Gallerys from '../../components/Gallery'
import Subscribe from '../../components/Subscribe'
import FAQs from '../../components/FAQs'
import OurTeam from '../../components/OurTeam'
import Clients from '../../components/Clients'
import News from '../../components/News'

const Home = () => {
  return (
    <>
     <Header />
     <About />
     <Details />
     <Service />
     <Experience />
     <Gallerys />
     <Subscribe />
     <FAQs />
     <OurTeam />
    <Clients />
    <News />
    </>
  )
}

export default Home
