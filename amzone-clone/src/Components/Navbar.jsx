import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { Search } from './'
import { useSelector, useDispatch } from 'react-redux'
import Tooltip from '@mui/material/Tooltip'

function Navbar() {
    const cartCount = useSelector(state => state.cart.itemCount);
  return (
    <header className='min-w-[1000px]'>
        <div className='flex items-center bg-amazonclone text-white h-[60px]'>
            {/* left side Navbar */}
            <div className='flex m-4'>
                <Link to={'/'}>
                    <img className='h-[35px] w-[100px] m-3' src="/images/amazon.png" alt="Amaxon_logo" />
                </Link>
                <div className='px-2'>
                    <div className='text-xs md:text-sm xl:text-lg'>Deliver to</div>
                    <div className='text-base xl:text-lg font-bold'>India</div>
                </div>
            </div>
            {/* Middle part Navbar */}
            <div className='flex grow relative'>
                <Search />
            </div>
            {/* Right Side Navbar */}
           <div className='flex m-4'>
                <div className='px-3'>
                    <div className='text-xs md:text-sm xl:text-lg'>Hello, Sign In</div>
                    <div className='text-base xl:text-lg font-bold'>Accounts & Lists</div>
                </div>
                <div className='px-3'>
                    <div className='text-xs md:text-sm xl:text-lg'>Returns</div>
                    <div className='text-base xl:text-lg font-bold'>& Orders</div>
                </div>
                
                <Link to={'/checkout'}>
                    <div className='flex flex-col px-3'>
                            <div className='flex flex-row relative'>
                                <ShoppingBagIcon className='h-[28px]'/>
                                {cartCount < 10 && cartCount !== 0 && 
                                    <div className='absolute text-sm right-0 top-0 font-bold text-white bg-orange-400 px-[5px] rounded-full'>
                                        {cartCount}
                                    </div> 
                                }
                            </div>
                        {(cartCount >= 10 && cartCount !== 0) ? 
                          <Tooltip title="Cart Items" arrow className='cursor-pointer'>
                            <div className='text-xs xl:text-sm font-bold text-white bg-orange-400 mt-1 px-[8px] rounded-full'>
                                {cartCount}
                            </div>
                          </Tooltip> :
                          <div className='text-base xl:text-lg font-bold'>Cart</div>
                        }
                    </div>
                </Link>
            </div>
        </div>
        <div className='flex bg-amazonclone font-semibold text-white space-x-6 text-sm xl:text-base p-2 pl-6'>
            <div>Today's Deal</div>
            <div>Customer Service</div>
            <div>Registry</div>
            <div>Gift Cards</div>
            <div>Sell</div>
        </div>
    </header>
  )
}

export default Navbar