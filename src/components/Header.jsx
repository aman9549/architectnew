

import pic from '../images/demos/architecture-2/slides/slide-1-2.jpg'
// import pic1 from '../images/demos/architecture-2/'
import {values} from '../data'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import Card from '../ui/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';





const Header = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
<header className='main__header'>
<div className="head_container main__header-container">
<Fade right><Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src={pic} alt="" /></SwiperSlide>
      <SwiperSlide><img src={pic} alt="" /></SwiperSlide>
    </Swiper>  </Fade>
</div>
<div className=" values__wrapper">
<Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={true}
        pagination={false}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
         {
                    values.map(({id, icon, title, desc})=> {
                        return <SwiperSlide>   <Rotate bottom left><Card className="values__value">
                        <span>{icon}</span>
                         <h4>{title}</h4>
                         <small>{desc}</small>
                     </Card></Rotate></SwiperSlide>  })
                      }
        
      </Swiper>
  
              
                  
            </div>
</header>
  )
}

export default Header
