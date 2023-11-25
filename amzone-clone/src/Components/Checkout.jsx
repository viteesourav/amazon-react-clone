import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, updateCartItem } from '../redux/cartSlice'
import { Link } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import { GB_Currency } from '../utils/constants'

function Checkout() {

  const cartInfo = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className='bg-amazonclone-background'>
      <div className = 'min-w-[1000px] max-w-[1500px] m-auto pt-8'>
        <div className='grid grid-cols-8 gap-10 mx-4'>
          {/* For Showing Products */}
          <div className='col-span-6 bg-white mb-10 rounded-md'>
            <div className='text-xl font-bold xl:text-3xl m-4'>Shopping Cart</div>
            {
            cartInfo.length > 0 &&
              cartInfo.map(product => (
                <div key={product.id}>
                  <div className='grid grid-cols-12 my-5 ml-4'>
                    {/* First 10 columns for showing product Info... */}
                    <div className='col-span-10 grid grid-cols-8'>
                      {/* Show Product image + Navigate to product Page */}
                      <div className='col-span-2 bg-gray-200 flex items-center justify-center rounded-l-md'>
                        <Link to={`/product/${product.id}`}>
                          <img className='p-4' src={product.image_small} alt="product_images" />
                        </Link>
                      </div>
                      {/* show Product info */}
                      <div className='col-span-6 ml-2 bg-gray-100 rounded-r-md'>
                        <div className='font-medium text-black py-3 ml-2'>
                          <ProductDetails product={product} ratings={false} />
                        </div>
                        <div className='mb-3 ml-2'>
                          <button className='text-white font-bold text-sm xl:text-base bg-red-700 py-1 px-6 rounded-md'
                                  onClick={() => dispatch(removeFromCart(product.id))}>Delete</button>
                        </div>
                        <div className='flex mb-2 ml-2'>
                          <button className='h-8 text-center text-base xl:text-xl bg-gray-300 px-2 rounded-l' onClick={() => dispatch(updateCartItem({productId: product.id, operation: 'Increment'}))}>+</button>
                          <div className='text-center text-lg xl:text-xl bg-gray-100 px-3 pt-1'>{product.productQty}</div>
                          <button className='h-8 text-center text-base xl:text-xl bg-gray-300 px-3 rounded-r' onClick={() => dispatch(updateCartItem({productId: product.id, operation: 'decrement'}))}>-</button>
                        </div>
                      </div>
                    </div>
                    {/* 2 Columns for For Showing Product Pricing and Total Pricing */}
                    <div className='col-span-2 flex flex-col items-end mr-5'>
                      <div className='text-2xl xl:text-3xl font-semibold mt-3'>{GB_Currency.format(product.price)}</div>
                      <div className='text-base xl:text-lg font-semibold mt-2'>X <span className='text-xl text-gray-600'>{product.productQty}</span></div>
                      <div className='w-[90%] mt-3 py-2 text-base xl:text-lg text-end font-bold border-t-2 border-t-slate-300'>{ GB_Currency.format(product.price * product.productQty)}</div>
                    </div>
                  </div>
                </div>
              )) 
            }
            <div className={`text-right text-2xl xl:text-3xl font-normal text-black mr-5 mb-5 ${cartInfo.length > 0 ? 'visible' : 'hidden'} mx-4`}>
              SubTotal ({cartInfo.length} {cartInfo.length > 1 ? `Items` : `Item`}) : <span className='font-bold text-gray-700'>{ GB_Currency.format(cartInfo.reduce((total, product) => (total += product.price*product.productQty), 0))}</span>
            </div>
          </div>
          {/* For Checkout */}
          <div className={`col-span-2 bg-white h-[250px] ${cartInfo.length > 0 ? 'visible' : 'hidden'} p-7 rounded-md`}>
            <div className='text-xs xl:text-sm text-green-700'>Your Order Qualifies for <span className='font-bold'>FREE DELIVERY</span>. Delivery Details</div>
            <div className={`text-sm xl:text-lg font-semibold my-4 text-black`}>
              SubTotal ({cartInfo.length} {cartInfo.length > 1 ? `Items` : `Item`}) : <span className='font-bold text-gray-700'>{ GB_Currency.format(cartInfo.reduce((total, product) => (total += product.price*product.productQty), 0))}</span>
            </div>
            <button className='proceedBtn'>Proceed to Checkout</button>
          </div>
        </div>
        {
          cartInfo.length === 0 && 
            <div className='bg-gray-100 h-[350px] max-w-[11400px] text-center font-semibold flex flex-col items-center justify-center rounded-b-md mx-4'> 
              <span className='text-gray-500 text-2xl xl:text-3xl mb-4'>Your Cart is Empty</span>
              <Link to={'/'}>
                <button className='text-xl xl:text-2xl text-white bg-amazonclone-yellow p-3 rounded-md hover:bg-yellow-600'>Back to Home</button>
              </Link>
            </div>
        }
      </div>
    </div>
  )
}

export default Checkout