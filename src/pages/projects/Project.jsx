import './project.css'
import MainHeader from '../../components/MultiHeader'
import Image from '../../images/blog/wide/blog-22.jpg'
import { projectLi, gallery } from '../../data'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import Card from '../../ui/Card'

const Project = () => {
  const [isNavShowing, setIsNavShowing] = useState(false)
  return (
    <>
    <MainHeader title='Project' image={Image} >Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, sapiente cupiditate hic rerum repellat officia quod corporis numquam quis fuga?</MainHeader>

    <div className='container project_cont'>
      <small>OUR WORK</small>
      <h1>Selected Portfolio</h1>

      <div>
      <ul className='project_lists'>
          {
            projectLi.map(({name,path}, index) => {
              return(
                <li>
                  {name}
                </li>
              )
            })
          }
       </ul>

       <div className='container_help_img'>
    {
        gallery.map(({id, img}) => {
            return <div key={id}  >
             <Card >
                <img src={img} alt="" />
            </Card>
            
            </div>
        })
      }
    </div>
      </div>
    </div>
    </>
  )
}

export default Project
