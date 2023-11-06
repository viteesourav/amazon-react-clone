import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { Link } from 'react-router-dom'

import 'swiper/css';
import 'swiper/css/navigation';

function CarouselProduct() {
  return (
    <div className='bg-white mx-3 mb-5'>
        <div className='text-2xl font-semibold p-3'>Best Seller</div>
        <Swiper
            loop={true}
            slidesPerView={6}
            spaceBetween={6}
            navigation={true}
            modules={[Navigation]}
        >
            {Array.from({length: 13}, (_, index) =>
                <SwiperSlide className='h-[300px]' key={index}>
                    <Link to={`/product/${index}`}>
                        <img className='h-[100%] p-4 rounded-3xl object-cover' 
                            src={`/images/product_${index}_small.jpg`} 
                            alt={`product_img_${index}`} />
                    </Link>
                </SwiperSlide>
            )}
        </Swiper>
    </div>
  )
}

export default CarouselProduct