import { ChangeEvent, FormEvent, useContext, useRef, useState } from "react"
// import emp from "../assets/images/emp.png";
import { userContext } from "../contexts/contextState";
import { newUserType } from "../Types/types";

export default function EmployeeDataEditModal() {


    
  const contxt = useContext(userContext);
  const {clickedCard , setClickedCard} = contxt;
  const [showImg ,setShowImg]  = useState<string>("");
  const onChangePicture = (e : React.ChangeEvent<HTMLInputElement>) => {
      let files = e.target.files;
      if (files != null) {
      let file = files[0];
      const reader  =  new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener("load", () => {
          clickedCard!.profile  = reader.result as (string);
          console.log(clickedCard!.profile)
          setShowImg(clickedCard!.profile );
      });
      }
  };

  const handleSaveChanges = ()=>{
        contxt.handleUpdate(clickedCard?.id as string ,clickedCard as newUserType);
        setClickedCard(null);
  }
  const handleChange =(e :React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
    const {name,value} = e.target;
    setClickedCard({...clickedCard as newUserType, [name]: value });
    console.log(clickedCard);
  }
   const closeModal = ()=>{
    setClickedCard(null);
   }

  //  const mystyle = {
  //   position:"relative",
  //   // backgroundColor: "#154c79",
  //   width:"105px",
  //   height:"113px",
  //   zIndex:1,
  // }

  return (
    <div className="modal fade" id="modal-add-employee">
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
        <div style={{width:"95%" , height:"7.5vh",marginTop:20,marginLeft:16 , backgroundColor:"white" , display:'flex' , fontSize:"2.2rem" , justifyContent:"space-between"}}>
         <span>add employee</span>
         <i className="fa-sharp fa-solid fa-xmark" style={{fontSize:25 , color:"black" , marginRight:"12px"}} data-bs-dismiss="modal" onClick={closeModal}></i>
    </div>
        <div className="modal-body">
        <div className="user-img" style={{position:"relative",width:"105px",height:"113px",zIndex:1}}>
            <img src={showImg}  style={{width:"105px" , height:"113px",position:"relative" , zIndex:5}} />
            <label htmlFor="emp-img-input">
                    <i className="fa-solid fa-user-pen"></i>
                    <input
                  type="file"
                  accept="image/*"
                  id="emp-img-input"
                  className="d-none form-input"
                  onChange={onChangePicture}
                />
                    {/* <div id="employee-image-container">add photo</div> */}
            </label>
        </div>

          {/* <div className="user-img" style={mystyle}>
            <img src={clickedCard?.profile}  style={{width:"105px" , height:"113px",position:"relative" , zIndex:5}} />
            <input type="file" className="form-control" name="fileImg"  style={{position:"relative",width:"105px" , top:"-112px",height:"113px"  , zIndex:0}}  onChange={onChangePicture} />
           </div> */}
        <br />
        <div className='form-feilds'>
        <label  className="form-label">First Name</label>
        <input type="text" className="form-control" placeholder="First" name="fname"  onChange={handleChange} value = {clickedCard?.fname} />
        <label className="form-label">Last Name</label>
        <input type="text" className="form-control" name="sname"  placeholder='Last'   onChange={handleChange} value = {clickedCard?.sname}  />
        <label  className="form-label">email</label>
        <input type="email" className="form-control" name="email" placeholder='Email' onChange={handleChange}value = {clickedCard?.email} />
        <label >Office Location : </label><br></br>
        <select name="office" id="office" className="p-1"  onChange={handleChange} value = {clickedCard?.office} >
        <option value="sales">select</option>
        <option value="india" >India</option>
        <option value="seattle">Seattle</option>
        </select>
        <br/>
        <label >Department : </label><br></br>
        <select name="department" id="department" className="p-1"   onChange={handleChange} value = {clickedCard?.department} >
        <option value="sales">select</option>
        <option value="it" >IT</option>
        <option value="humanresource">Human resource</option>
        <option value="sales">sales</option>
        <option value="md">MD</option>
        </select>
        <br></br>
        <label >JobTitle : </label><br></br>
        <select name="jobtitle" id="jobtitle" className="p-1"   onChange={handleChange} value = {clickedCard?.jobtitle} >
        <option value="sales">select</option>
        <option value="sharepointpracticehead">SharePoint Practice </option>
        <option value="head">Head</option>
        <option value="dotNetDevelopment">.Net Development Lead</option>
        <option value="recrutingExpert">Recruiting Expert</option>
        <option value="bussinessAnalyst">Business Analyst</option>
        <option value="biDeveloper">BI Developer </option>
        </select>
        <br/>
        <label  className="form-label">Phone No</label>
        <input type="text" className="form-control" name="phoneno" placeholder='+91952789922'  required onChange={handleChange}value = {clickedCard?.phoneno}  />
        <label className="form-label">Skype</label>
        <input type="text" className="form-control" name="skype" placeholder='user_name' required onChange={handleChange} value = {clickedCard?.skype}  />
        
        </div>
               {/* <button className="btn" type="button" data-bs-dismiss="modal"><h4 className="fa-solid fa-xmark text-danger"></h4></button>
               <button className="btn" type="submit" data-bs-dismiss="modal"> <h4 className="fa-solid fa-check text-success" onClick={handleSaveChanges}></h4></button>
          */}
           <button style={{width:"100%", height:"9vh",display:"flex" ,alignItems:"center" ,  justifyContent:"space-evenly" , backgroundColor:"white" , border:"none"}} >
            {/* Add Employee */}
            <i className="fa-sharp fa-solid fa-xmark" style={{fontSize:50 , color:"red"}} data-bs-dismiss="modal" onClick={closeModal}></i>
            {/* <i className="fa-thin fa-solid fa-check" style={{fontSize:50 , color:"green"}}></i> */}
            <i className="fa-thin fa-solid fa-check" style={{fontSize:50, color:"green"}} onClick={handleSaveChanges} data-bs-dismiss="modal" ></i>
        </button>
          </div>
        </div>
      </div>
    </div>
  );
}