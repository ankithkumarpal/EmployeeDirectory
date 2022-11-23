import React ,{useState ,useContext, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { userContext } from '../contexts/contextState';
import { newUserType  , filterType, EmployeeAddModalPropType} from '../Types/types';
import uuid from 'react-uuid';
import './EmployeeAddModal.css'

export const EmployeeAddModal = ({setAlphabetTag,setFilterTag}:EmployeeAddModalPropType) =>  {
    const  contxtUser = useContext(userContext);
    // console.log(inputTag)
         const [show, setShow] = useState(false);
         const [showImg ,setShowImg]  = useState<string>("");
         const onChangePicture = (e : React.ChangeEvent<HTMLInputElement>) => {
            let files = e.target.files;
            if (files != null) {
            let file = files[0];
            const reader  =  new FileReader();
            reader.readAsDataURL(file);
            reader.addEventListener("load", () => {
                newUser.profile = reader.result as string;
                console.log(newUser.profile)
                setShowImg(newUser.profile);
            });
            }
        };

  
    let [popUp, setpopUp] = useState(true);
    const openPopUp = () => {
        if (popUp == false) setpopUp(true);
        else setpopUp(false);
    }
    
    const handleShow = () => {
        setShow(true);
    }
    const validate = (newUser : newUserType)=>{
        for(const key in newUser) {
          if(key === "") {
              return false;
          }
        }
       return true;
  }
    const handleCancel=()=>{
        setShow(!show);
    }

    let [newUser, setNewUser] = useState<newUserType>({
        id:"",
        fname: "",
        sname: "",
        email: "",
        office: "",
        jobtitle: '',
        department: '',
        phoneno: '',
        skype: '',
        profile:''
    });


    const handleSubmit = () => {
        
        // generating unique id 
        newUser.id = uuid();
        // validating input form 
        // let isTrue = validate(newUser) 
        // if(isTrue=== false) {
        //     alert("every feild is mandatory");
        //     return ;
        // }

        
        // store user state
        contxtUser.addEmployee(newUser);
        setpopUp(!popUp);
        setShow(false);

        // removing filter if any applied 
        setAlphabetTag('#');
        setFilterTag(null);

        // setting the form default as beginneing
        setNewUser({
            id:"",
            fname: "",
            sname: "",
            email: "",
            office: "",
            jobtitle: '',
            department: '',
            phoneno: '',
            skype: '',
            profile:''
        })
    };

    const handleChange = (e :  React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            const {name,value} = e.target ;
            setNewUser({...newUser, [name]: value }) ;
    }

    // const mystyle = {
    //     position:"relative",
    //     // backgroundColor: "#154c79",
    //     width:"105px",
    //     height:"113px",
    //     zIndex:1,
    //   }
  return (
       <>
        <Button className="border border-none fw-bold text-light cyan-shade  text-nowrap ms-auto px-2 py-1 modal-mobile-view-btn" style={{borderRadius: 0}}onClick={handleShow}>Add Employee</Button>

<Modal show={show}>
    {/* <Modal.Header closeButton onHide={handleCancel}>
        <Modal.Title>Add Employee</Modal.Title>
    </Modal.Header> */}
    <div style={{width:"95%" , height:"7.5vh",marginTop:20,marginLeft:16 , backgroundColor:"white" , display:'flex' , fontSize:"2.2rem" , justifyContent:"space-between"}}>
         <span>add employee</span>
         <i className="fa-sharp fa-solid fa-xmark" style={{fontSize:25 , color:"black" , marginRight:"12px"}} onClick={handleCancel} ></i>
    </div>
    <Modal.Body>
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
        <br/>
        {/* <input type="file" className="form-control" name="fileImg"  required onChange={onChangePicture} /> */}
        <br />
        <div className='form-feilds'>
        <label  className="form-label">First Name</label>
        <input type="text" className="form-control" placeholder="First" name="fname"  onChange={handleChange} required />
        <label className="form-label">Last Name</label>
        <input type="text" className="form-control" name="sname"  placeholder='Last'  required onChange={handleChange} />
        <label  className="form-label">email</label>
        <input type="email" className="form-control" name="email" placeholder='Email' onChange={handleChange} />
        <label >Office Location : </label><br></br>
        <select name="office" id="office" className="p-1"  onChange={handleChange}>
        <option value="sales">select</option>
        <option value="india" >India</option>
        <option value="seattle">Seattle</option>
        </select>
        <br/>
        <label >Department : </label><br></br>
        <select name="department" id="department" className="p-1"   onChange={handleChange}>
        <option value="sales">select</option>
        <option value="it" >IT</option>
        <option value="humanresource">Human resource</option>
        <option value="sales">sales</option>
        <option value="md">MD</option>
        </select>
        <br></br>
        <label >JobTitle : </label><br></br>
        <select name="jobtitle" id="jobtitle" className="p-1"   onChange={handleChange}>
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
        <input type="text" className="form-control" name="phoneno" placeholder='+91952789922'  required onChange={handleChange} />
        <label className="form-label">Skype</label>
        <input type="text" className="form-control" name="skype" placeholder='user_name' required onChange={handleChange} />
        
        </div>
    </Modal.Body>
    
    <Modal.Footer>
        <Button style={{width:"100%", height:"9vh",display:"flex" ,alignItems:"center" ,  justifyContent:"space-evenly" , backgroundColor:"white" , border:"none"}} >
            {/* Add Employee */}
            <i className="fa-sharp fa-solid fa-xmark" style={{fontSize:50 , color:"red"}} onClick={handleCancel} ></i>
            {/* <i className="fa-thin fa-solid fa-check" style={{fontSize:50 , color:"green"}}></i> */}
            <i className="fa-thin fa-solid fa-check" style={{fontSize:50, color:"green"}} onClick={handleSubmit}></i>
        </Button>
    </Modal.Footer>
</Modal>
    
    
    </>
  )
}
