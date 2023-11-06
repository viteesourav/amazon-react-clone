import React from 'react'

function ProductBadge({badge}) {
  
    if(badge == "choice") {
        return <span className='text-sm xl:text-base font-medium bg-slate-800 text-white py-1 px-2 rounded'>Amazon's 
        <span className='text-orange-500 px-[1.8px] mx-[1.8px]'>Choice</span></span>
    } else if(badge == "seller") {
        return <span className='text-sm xl:text-base font-medium bg-orange-500 text-white py-1 px-2 rounded'>#1 Best Seller</span>
    } else if(badge == "limited") {
        return <span className='text-sm xl:text-base bg-red-500 text-white py-1 px-2 rounded'>Limited Time Deal</span>
    }

    return (
    <>
        <div></div>
    </>
  )
}

export default ProductBadge