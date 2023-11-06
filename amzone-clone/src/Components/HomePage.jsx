import React from 'react'
import { Carousel, CarouselCategory, CarouselProduct, HomePageCard } from './'

function HomePage() {
  return (
    <div className='bg-amazonclone-background'>
        <div className="min-w-[1000px] max-w-[1500px] m-auto">
            <Carousel />
            <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-10 -mt-[500px]'>
                <HomePageCard cardTitle="FirstCard" cardImg={'/images/home_grid_5.jpg'} cardLink="someLink"/>
                <HomePageCard cardTitle="FirstCard" cardImg={'/images/home_grid_5.jpg'} cardLink="someLink"/>
                <HomePageCard cardTitle="FirstCard" cardImg={'/images/home_grid_5.jpg'} cardLink="someLink"/>
                <HomePageCard cardTitle="FirstCard" cardImg={'/images/home_grid_5.jpg'} cardLink="someLink"/>
                <HomePageCard cardTitle="FirstCard" cardImg={'/images/home_grid_5.jpg'} cardLink="someLink"/>
                <HomePageCard cardTitle="FirstCard" cardImg={'/images/home_grid_5.jpg'} cardLink="someLink"/>
                <HomePageCard cardTitle="FirstCard" cardImg={'/images/home_grid_5.jpg'} cardLink="someLink"/>
                <HomePageCard cardTitle="FirstCard" cardImg={'/images/home_grid_5.jpg'} cardLink="someLink"/>
                <div className="m-3 pt-10 lg:block">
                    <img className="sm:hidden lg:block xl:hidden" src="/images/banner_image_2.jpg" alt="banner_img2" />
                </div>
            </div>
            <CarouselProduct />
            <CarouselCategory />
            <div className='h-[200px]'>
                <img className='h-[100%] w-[100%] object-cover m-auto' src="/images/banner_image.jpg" alt="Banner_footer" />
            </div>
            <div>
            </div>
        </div>
    </div>
  )
}

export default HomePage