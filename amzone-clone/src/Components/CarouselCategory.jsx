import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { useNavigate, createSearchParams } from 'react-router-dom'

import 'swiper/css';
import 'swiper/css/navigation';

function CarouselCategory() {
  
  const navigate = useNavigate();

  const handleNavigation = (categoryType) => {
    navigate({
        pathname: 'search',
        search: `${createSearchParams({
            category: `${categoryType}`
            })
        }`
      });
  } 

  return (
    <div className='bg-white m-3'>
        <div className='text-2xl font-semibold p-3'>Shop by Category</div>
        <Swiper
            loop={true}
            slidesPerView={5}
            spaceBetween={10}
            navigation
            modules={[Navigation]}
        >
            <SwiperSlide className='cursor-pointer' onClick={()=>handleNavigation("Deals")}>
                <img src="/images/category_0.jpg" alt="category_img_0" />
            </SwiperSlide>
            <SwiperSlide className='cursor-pointer' onClick={()=>handleNavigation("Amazon")}>
                <img src="/images/category_1.jpg" alt="category_img_0" />
            </SwiperSlide>
            <SwiperSlide className='cursor-pointer' onClick={()=>handleNavigation("Fashion")}>
                <img src="/images/category_2.jpg" alt="category_img_0" />
            </SwiperSlide>
            <SwiperSlide className='cursor-pointer' onClick={()=>handleNavigation("Computers")}>
                <img src="/images/category_3.jpg" alt="category_img_0" />
            </SwiperSlide>
            <SwiperSlide className='cursor-pointer' onClick={()=>handleNavigation("Home")}>
                <img src="/images/category_4.jpg" alt="category_img_0" />
            </SwiperSlide>
            <SwiperSlide className='cursor-pointer' onClick={()=>handleNavigation("Mobile")}>
                <img src="/images/category_5.jpg" alt="category_img_0" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default CarouselCategory