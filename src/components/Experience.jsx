import Card from "../ui/Card"
import { exp } from "../data"
import Fade from 'react-reveal/Fade';

const Experience = () => {
  return (
    <div className='container experince__conatiner'>
      {exp.map(({id,num, title,})=> {
                        return   <Fade left><Card className='exp_sub'>
                                <h1>{num}</h1>
                            <p>{title}</p>
                             </Card></Fade>})}
    </div>
  )
}

export default Experience
