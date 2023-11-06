import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';


function Carousel() {
  return (
    <div className='h-[800px] bg-white'>
        <Swiper 
            loop
            spaceBetween={0}
            className='h-[50%]'
            navigation
            modules={[Navigation, Autoplay]}
            autoplay= {{
                delay: 3000
            }}
            slidesPerView={1}
        >
            <SwiperSlide>
                <img src={"/images/carousel_1.jpg"} alt="" className="src" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={"/images/carousel_2.jpg"} alt="" className="src" />
            </SwiperSlide>
            <SwiperSlide className='bg-black'>
                <video controls muted>
                    <source src={"/images/carousel_vid.mp4"} type="video/mp4" />
                </video>
            </SwiperSlide>
            <SwiperSlide>
                <img src={"/images/carousel_4.jpg"} alt="" className="src" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={"/images/carousel_5.jpg"} alt="" className="src" />
            </SwiperSlide>
        </Swiper>
        <div className="h-[50%] w-[100%] bg-gradient-to-b from-stone-900" />
    </div>
  )
}

export default Carousel