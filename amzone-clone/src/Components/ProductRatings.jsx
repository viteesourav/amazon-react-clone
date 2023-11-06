import React from 'react'
import { StarIcon } from '@heroicons/react/24/outline'

function ProductRatings({ratingProps}) {
    
    const {avgRating, rating} = ratingProps;

    return (
    <div className='flex mt-2'>
        {Array.from({length:avgRating}, (_,index) => <StarIcon key={index} className="stroke-[#F1B61F] fill-[#F1B61F] h-[20px]" />)}
        {Array.from({length:5-avgRating}, (_,index) => <StarIcon key={index} className="stroke-[#F1B61F] h-[20px]" />)}
        <span className='mx-2 text-sm xl:text-base font-semibold text-blue-600'>{rating} Reviews</span>
    </div>
  )
}

export default ProductRatings