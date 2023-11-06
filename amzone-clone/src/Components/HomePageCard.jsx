import React from 'react'

function HomePageCard({cardTitle, cardImg, cardLink}) {
  return (
    <div className='h-[420px] bg-white m-2 z-20 rounded-md'>
        <div className='text-lg xl:text-xl font-semibold text-center mt-4'>
            {cardTitle}
        </div>
        <div className='h-[300px] m-4'>
            <img src={cardImg} alt="CardImg" className="h-[100%] w-[100%] rounded-md object-cover" />
        </div>
        <div className='text-s xl:text-lg text-center text-blue-400'>
            <a href="/">{cardLink}</a>
        </div>
    </div>
  )
}

export default HomePageCard