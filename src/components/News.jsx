import React from 'react'
import img from '../images/demos/architecture-2/blog/blog-thumb-1.jpg'
import img1 from '../images/demos/architecture-2/blog/blog-thumb-2.jpg'
import img2 from '../images/demos/architecture-2/blog/blog-thumb-3.jpg'
import Fade from 'react-reveal/Fade';
import { news } from '../data';


const News = () => {
  return (
    <Fade left>
      <div className='container news_container'>
        <div className="news_sub">
        <small>our blog</small>
      <h1>Recent News</h1>
        </div>
    

      <div class="containere">
 { news.slice(0, 3).map(({id, name,date, desc, title, comments,img}) =>{

  return <div class="cards">
    <div class="imgt"><img src={img} alt="" />
    <article ><span>{date}</span> <span>{comments}</span> <span>{name}</span></article>
    </div>

    <div class="contentt">
      <h3>{title}</h3>
      <p>
        {desc}
      </p>
      <h5>Read more+</h5>
    </div>
  </div>
 }) 
 }
 
</div>
    </div>
    </Fade>
  )
}

export default News
