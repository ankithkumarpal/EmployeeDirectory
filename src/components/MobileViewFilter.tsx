import React from 'react'
import Filter from './Filters';
import "./mobileViewFilter.css";
import car from '../assets/car.jpg'
import { MobileViewFilterProps} from '../Types/types';
import logo from '../saketaLogo.png'
export const MobileViewFilter = ({hamToggle ,  setHamToggle,setFilterTag ,filterTag}:MobileViewFilterProps) => {
    // console.log(hamToggle)
    const toggleHamburger = ()=>{
      setHamToggle(!hamToggle);
    }
  return (
     <>
     <div className={`MobileViewFilter ${ hamToggle ? "MobileViewFilter-active" : "MobileViewFilter-inactive"}`} onClick={toggleHamburger}>
      <div className={ hamToggle ? "mobile-view-active" : "mobile-view-inactive"}>
        <div className="d-flex  mb-4" style={{backgroundColor:"white"}}>
            <div className="d-flex align-content-end flex-wrap" style={{width:250}}>
              <h3 className="cyan-shade-text fw-normal">Welcome,</h3>
              <h4 className="text-muted fw-normal" style={{fontWeight:'bolder'}}>Andrew Philips</h4>
            </div>
            <img src={car} alt="../assets/car.jpg" style={{width:45 , height:45 ,marginTop:8,marginRight:15}} />
          </div>
         <Filter filterTag={filterTag} setFilterTag={setFilterTag}/>  
         <div className="kekaLogo">
             <img src={logo} alt=""  />
         </div>
         <div  className="d-flex cyan-shade-text  justify-content-center align-items-center" style={{ height:60}}><h6>Employee Directory</h6></div>
      </div> 
      </div>

     
     </>
  )
}
