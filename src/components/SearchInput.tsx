import React from 'react'
import { searchInputPropType } from '../Types/types';
import './searchInput.css'

export const SearchInput = ({keyword,handleKeyword}:searchInputPropType) => {
    const handleKey=(e :  React.ChangeEvent<HTMLInputElement>)=>{
        const val = e.target.value as string;
        console.log(val);
        handleKeyword(e.target.value);
    }
  return (
    <>
          
       <div className="border border-2 p-1 mobile-view-search-input">
            <i className="fa fa-search text-muted"></i>
            <input type="search" id="search" placeholder="Enter any keyword" value = {keyword} onChange={handleKey}/>
        </div>
    </>
  )
}
