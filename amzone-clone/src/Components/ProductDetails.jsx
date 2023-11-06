import React from 'react'
import {ProductBadge, ProductRatings} from './'

function ProductDetails({product, ratings}) {
  return (
    <div className='mb-1'>
        <div className='text-xl xl:text-4xl font-bold mb-1'>{product.title}</div>
        <div className='text-base xl:text-lg'> by <span className='text-blue-500 font-medium'>{product.brand}</span></div>
        {ratings && <div className='mb-1'>
            <ProductRatings ratingProps={{avgRating: product.avgRating, rating: product.ratings}}/>
        </div>
        }
        <div className='text-xl xl:text-base font-bold mb-2'>{product.attribute}</div>
        <div className='mt-2'>
            <ProductBadge badge={product.badge}/>
        </div>
    </div>
  )
}

export default ProductDetails