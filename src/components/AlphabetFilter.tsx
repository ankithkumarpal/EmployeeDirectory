
import React from 'react';
import './AlphabetFilter.css';
import {useState} from 'react'
// import { SafeAnchor } from 'react-bootstrap';
type  AlphabetFilterType ={
     setAlphabetTag : React.Dispatch<React.SetStateAction<string>>
     alphabetTag:string;
    item : number;
}

 const  AlphabetFilter = ({setAlphabetTag, alphabetTag , item} : AlphabetFilterType)=>{
     const handleClick = (event: React.MouseEvent<HTMLElement>) => {
         setAlphabetTag(String.fromCharCode(65 + item))
      }
     const isSelected = alphabetTag == String.fromCharCode(65+item);
    //  console.log(isSelected);
    return (
        <>
         <div id="alphabetFilter" className={`mobile-view-alphabet col cyan-shade text-light my-1 me-1  p-1 text-center flist ${isSelected ? "aplhabet-selected":"" }`} onClick={handleClick}>{String.fromCharCode(65 + item)}</div>
        </>
    )
}
export default AlphabetFilter;