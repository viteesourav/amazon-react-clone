import React, { useEffect, useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { fetchData } from '../utils/callApi';
import { useNavigate, createSearchParams } from 'react-router-dom'

function Search() {

  const[searchList, setSearchList] = useState(null);
  const[searchText, setSearchText] = useState('');
  const[selectedCategory, setSelectedCategory] = useState('All');
  const naviagte = useNavigate();

  useEffect(()=>{
    fetchData('suggestions').then((resp) => {
      setSearchList(resp);
    });
  },[]);

  const handleOnSearch = (evt) => {
    evt.preventDefault();
    // console.log(evt);
    naviagte({
      pathname: 'search',
      search: `${createSearchParams({
        category: `${selectedCategory}`,
        searchTerm: `${searchText}`
      })}`
    });

    setSearchText('');
    setSelectedCategory('All');
  }

  return (
    <div className='w-[100%]'>
        <div className='flex items-center h-10 bg-amazonclone-yellow rounded'>
            <select className='p-2 rounded-l bg-gray-300 text-black text-sm xl:text-base' name="SearchDropDown" id="dropDown_1" 
            onChange={(evt)=>setSelectedCategory(evt.target.value)}>
                <option value="All">All</option>
                <option value="Deals">Deals</option>
                <option value="Amazon">Amazon</option>
                <option value="Fashion">Fashion</option>
                <option value="Computers">Computers</option>
                <option value="Home">Home</option>
                <option value="Mobiles">Mobiles</option>
            </select>
            <input className='flex grow items-center h-[100%] text-black' type="text" 
                  value={searchText} 
                  name="seachBar" 
                  id="searchBar"
                  onChange={(evt)=>setSearchText(evt.target.value)} />
            <button className='w-[45px]' onClick={handleOnSearch}>
                <MagnifyingGlassIcon className='h-[27px] m-auto stroke-slate-900'/>
            </button>
        </div>
        {
          searchText && 
          <div className='bg-white text-black z-40 rounded mt-1 w-full absolute'>
            {
            searchList.filter(item => {
              const itemTitle = item.title.toLowerCase();
              const searchTitle = searchText.toLocaleLowerCase();
              return (
                searchTitle &&
                itemTitle.startsWith(searchTitle) &&
                itemTitle !== searchTitle
              )
            }).slice(0, 10).map(item => (
              <div key={item.id} 
                  className='text-base xl:text-lg font-medium p-1 border-1 rounded-lg border-black cursor-pointer hover:bg-slate-200'
                  onClick={()=>setSearchText(item.title)}>
                {item.title}
              </div>
            ))
            }
          </div>
        }
    </div>
  )
}

export default Search