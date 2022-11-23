import React from 'react'
import { inputTagType ,SortByFilterProps} from '../Types/types'


export const SortByFilter = ({setinputTag , inputTag}: SortByFilterProps) => {
  const changeTag = (e :  React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
     console.log(e.target.value);
     let val  = e.target.value as inputTagType;
     setinputTag(val);
    //  setinputTag(e.target.value as inputTagType)
  }
  return (
    <>
       <span style={{}}>Filter by</span>
      <span style={{marginLeft:0}}>
        <select name="" id="filter" className="p-1" style={{width:"110%"}}  value= {inputTag}  onChange={changeTag}>
          <option value="fname">First name</option>
          <option value="sname">Last name</option>
          <option value="department">department</option>
          <option value="office">office</option>
          <option value="jobtitle">jobtitle</option>
        </select>
      </span>
    </>
  )
}
