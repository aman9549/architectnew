import './services.css'
import MainHeader from '../../components/MultiHeader'
import Image from '../../images/blog/wide/blog-67.jpg'
import { values } from '../../data'
import Card from '../../ui/Card'
import Service from '../../components/Service'
import Subscribe from '../../components/Subscribe'
import FAQs from '../../components/FAQs'


const Services = () => {
  return (
    <>
     <MainHeader title='Services' image={Image} >Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, sapiente cupiditate hic rerum repellat officia quod corporis numquam quis fuga?</MainHeader>

     <div className='container contact_page_cont'>
  <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis.</h5>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, quam! Ullam eum dignissimos voluptatem velit odio aspernatur eaque id neque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, at.</p>

<div className="service_cards">
{
                    values.map(({id, icon, title, desc})=> {
                        return <Card className='values__value'>
                        <span>{icon}</span>
                         <h4>{title}</h4>
                         <small>{desc}</small>
                     </Card> })
                      }
</div>
 
</div>
<Service  />
  <Subscribe />
<FAQs />
    </>
  )
}

export default Services
