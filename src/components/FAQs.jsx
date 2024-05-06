import FAQ from '../ui/FAQ'
import { faqs } from '../data'
import Button from '../ui/Button'
import Fade from 'react-reveal/Fade';


const FAQs = () => {
  return (
    
    <Fade right> <section className="container faqs__container ">

      <div className='faq_left'>
      <small>COMMON QUESTIONS</small>
      <h1>Frequent Questions</h1>
      <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quaerat possimus repudiandae, accusamus sint eaque aspernatur ..</h4>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic odit dolor sit commodi placeat autem temporibus assumenda culpa ratione sapiente distinctio corporis aliquid dolore ullam adipisci minima, atque iste quod.</p>
      <Button>Contact us</Button>
      </div>

     <div className="">
        <div className="faqs__wrappers">
        {
            faqs.map(({id, question , answer}) => {
              return <FAQ key={id} question={question} answer={answer} />
            })
          }
        </div>
    </div>

     
     </section>  </Fade>
    
   
  )
}

export default FAQs
