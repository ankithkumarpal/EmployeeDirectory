import React, { useState } from 'react';
import './content.css';
import Cards from './Cards';
import { useContext } from 'react';
import { userContext } from '../contexts/contextState';
import {newUserType, inputTagType, contentPropTypes } from '../Types/types';
import AlphabetFilter from './AlphabetFilter';
import { SortByFilter } from './SortByFilter';
import { EmployeeAddModal } from './EmployeeAddModal';
import { SearchInput } from './SearchInput';
import MobileViewModal from './MobileViewModal';

const  Content = ({filterTag , setFilterTag ,inputTag,setinputTag,keyword,setKeyword ,alphabetTag ,setAlphabetTag ,handleKeyword} : contentPropTypes)=>{
   
    const  contxtUser = useContext(userContext);
    const clearInput = ()=>{
        setFilterTag(null);
        setAlphabetTag("#");
        setKeyword("");
    }
    const clearAllfilter=()=>{
        setFilterTag(null);
        setAlphabetTag("#");
        setKeyword("");
    }

    let  items: number[] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

    return (
        <div id="Content">
            <div className="alphabetSection">
                <div className="row" >
                    <div className="col cyan-shade text-light my-1 me-1 p-1 text-center aphabet-user-icon" onClick={clearAllfilter}><i className="fa-solid fa-user"></i></div>
                    {items.map((val,index)=>{
                        return <AlphabetFilter setAlphabetTag={setAlphabetTag} alphabetTag= {alphabetTag} item = {val}/>
                    })}
                </div>
            </div>
            <div className='search-cards-sections'>
                <div className='searchSection'>
                    <div className="d-flex justify-content-between my-2">
                        <div className="d-flex align-items-start justify-content-between col-7 search-filter-div">
                            <span className="m-1">Search</span>
                            <SearchInput keyword={keyword} handleKeyword={handleKeyword}/>
                            <button id="clear" className="text-light p-1 px-2" onClick={clearInput}>Clear</button>
                            <SortByFilter inputTag={inputTag}  setinputTag={setinputTag}/>
                        </div>
                        
                        <EmployeeAddModal setAlphabetTag={setAlphabetTag} setFilterTag={setFilterTag}/>
                    </div>
                </div>
                {/* <div className='contentNoteSection'> <b>Note</b> : Please use the advanced filter option to refine your result </div> */}
                <div className='cardSection'>
                    {
                        contxtUser.empData.filter((value)=>{
                            const tag = (value[inputTag]);
                            // console.log(keyword)
                            if(filterTag!=null && value[filterTag.section as inputTagType] != null){
                                if(value[filterTag.section as inputTagType].toLowerCase() === filterTag.value.toLowerCase())
                                    return value;
                            }else if(tag!=null && alphabetTag!='#'){
                                if(tag.charAt(0).toLowerCase() == alphabetTag.toLowerCase()) return value;
                            }else if(tag!=null && tag.toLowerCase().includes(keyword.toLowerCase()))
                               return value;
                            else if(keyword ==="" || tag === undefined) return  value;
                        }).map((value) => {
                            return <Cards data={value}/>
                        })
                    }
                   <MobileViewModal/>
                </div>
            </div>
        </div>
    )
}

export default Content;