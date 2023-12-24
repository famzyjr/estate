import React from 'react'
import './residenses.css';
import "swiper/css"; 
import data from '../../utils/slider.json';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import { sliderSettings } from '../../utils/common';
const Residence = () => {
  return (
    <div>
     <section className='r-wrapper'>
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
        <span className='orangeText' > Best Choices</span> 
        <span className='primaryText' >Popular Residencies</span>
        </div>

       <Swiper {...sliderSettings} >
          <SliderButtons/>
         {   data.map((Data, i ) =>(
           
           <SwiperSlide>
            <div className=" flexColStart r-card" key={i} >
              <img src={Data.image} alt="home"/>
              <span className='secondaryText r-price'>
               <span style={{color: "orange"}} >$</span><span>{Data.price}</span>
              </span>
              <span className='primaryText' >{Data.name}</span>
              <span className='secondaryText' >{Data.detail}</span>
            </div>
           </SwiperSlide>
         )

         )   }
       </Swiper>

      </div>
     </section>
    </div>
  )
}

export default Residence;


const SliderButtons = ()=>{
    const swiper = useSwiper();
    return(
       <div className=' flexCenter r-button' >
     <button onClick={()=> swiper.slidePrev() } >&lt;</button>
     <button  onClick={()=> swiper.slideNext()} >&gt;</button>

    </div>
    )
  
}