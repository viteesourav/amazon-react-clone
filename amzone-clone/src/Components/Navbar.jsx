import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { Search } from './'

function Navbar() {
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
                <div className='flex px-3'>
                    <Link to={'/checkout'}>
                        <ShoppingBagIcon className='h-[48px]'/>
                    </Link>
                    <div className='flex flex-col-reverse text-base xl:text-lg font-bold'>
                        Cart
                    </div>
                </div>
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