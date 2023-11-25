import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { fetchData } from '../utils/callApi';
import { ProductDetails } from './'
import { GB_Currency } from '../utils/constants'

function SearchResults() {
  
  const [searchParams] = useSearchParams();
  var categoryType = searchParams.get('category');
  var searchText = searchParams.get('searchTerm');
  
  const [productList, setProductList] = useState(null);

  useEffect(()=>{
    fetchData('search').then((searchResp)=> {
      if(searchText) {
        setProductList(searchResp[categoryType].filter((item) => (
          item.title.toLowerCase().includes(searchText.toLowerCase())
        )))
      } else {
        setProductList(searchResp[categoryType]);
      }
    });
  }, [searchParams]);

  return (
    <div>
      <div className='min-w-[1200px] max-w-[1300px] m-auto'>
        { productList && productList.map((product) => {
            return (
              <Link key={product.id} to={`/product/${product.id}`}>
                <div className='h-[250px] grid grid-cols-12 gap-0 my-2'>
                  <div className='col-span-2 p-4 rounded-l-lg bg-gray-200'>
                    <img className='m-auto' src={product.image_small} alt="" />
                  </div>
                  <div className='col-span-10 bg-white rounded-r-lg border-slate-500 hover:bg-gray-100'>
                    <div className='font-medium text-black p-4'>
                      <ProductDetails product={product} ratings={true} />
                      <div className='text-xl xl:text-2xl font-bold text-gray-700 my-2'>{GB_Currency.format(product.price)}</div>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })
        }
      </div>
    </div> 
  )
}

export default SearchResults