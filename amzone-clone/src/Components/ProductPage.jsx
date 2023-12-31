import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchData } from '../utils/callApi';
import { GB_Currency } from '../utils/constants'
import { ProductDetails } from './'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice';

function ProductPage() {

  const{productId} = useParams();
  const[product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState("1");

  const dispatch = useDispatch();

  useEffect(()=>{
    fetchData('products').then((resp) => {
      setProduct(resp[productId]);
    })
  }, []);

  if(!product?.title) return <h1>Product is loading...</h1>

  return (
    product && 
    <div>
      <div className='h-screen bg-amazonclone-background'>
        <div className='min-w-[1000px] max-w-[1500px] m-auto p-4'>
          <div className='grid grid-cols-10 gap-2'>
            {/* Left div */}
            <div className='col-span-3 p-4 rounded bg-white m-auto'>
              <img src={product.image} alt="product_image" />
            </div>
            {/* Middle div */}
            <div className='col-span-5 p-4 rounded divide-y divide-gray-400 bg-white'>
              <div className='mb-3'>
                <ProductDetails product={product} ratings={true} />
              </div>
              <div className='text-base xl:text-lg mt-4'>
                {product.description}
              </div>
            </div>
            {/* Right div */}
            <div className='col-span-2 p-4 bg-white rounded'>
              <div className='text-2xl xl:text-3xl text-red-500 text-right font-semibold'>{GB_Currency.format(product.price)}</div>
              <div className='text-xl xl:text-3xl text-gray-500 text-right font-semibold'><span className='line-through'>{GB_Currency.format(product.oldPrice)}</span></div>
              <div className='text-xl xl:text-2xl text-blue-700 font-semibold mt-3'>Free Returns</div>
              <div className='text-xl xl:text-2xl text-blue-700 font-semibold mt-1'>Free Shipping</div>
              <div className='text-xl xl:text-2xl text-green-700 font-semibold mt-1'>In Stock</div>
              <div className='text-lg xl:text-xl font-normal mt-1'>Quantity: 
                <select className='text-lg mx-2 px-2 bg-gray-200 broder-2 rounded-md hover:border-black' 
                      value={quantity} 
                      onChange={(evt) => setQuantity(evt.target.value)}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <Link to={'/checkout'}>
                <button className='proceedBtn' 
                    onClick={()=>dispatch(addToCart({...product, productQty: parseInt(quantity)}))}> Add to Cart</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage