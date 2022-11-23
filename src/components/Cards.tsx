import './cards.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import {userContext} from '../contexts/contextState';
import { useContext } from 'react';
import { cardsPropType } from '../Types/types';
// import MobileViewModal from './MobileViewModal';


const Cards = ({data} : cardsPropType)=> {
  
  const contxt = useContext(userContext);
  const [showcard, setShowcard] = useState(false);
  const [newUser , setNewUser]  = useState({
    id:data.id,
    fname: data.fname,
    sname: data.sname,
    email: data.email,
    office: data.office,
    jobtitle: data.jobtitle,
    department: data.department,
    phoneno: data.phoneno,
    skype: data.skype,
    profile:data.profile
});

  const hadleClickOnCard  = ()=>{
        contxt.setClickedCard(data);
        // console.log(contxt.clickedCard);
        setShowcard(true)
        // console.log(showcard)
  }
  const handleSaveChanges = ()=>{
        contxt.handleUpdate(data.id ,newUser);
        setShowcard(false);
  }
  const handleDeleteUser = ()=>{
    contxt.handleDelete(data.id);
    setShowcard(!showcard);
  }
  const handleChange =(e :React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
    const {name,value} = e.target;
    setNewUser({...newUser, [name]: value }) ;
  }
  const handleCloseForm = ()=>{ 
    setShowcard(false)
  }
  return (
    <div className="Cards"  onClick={hadleClickOnCard} data-bs-toggle='modal'
    data-bs-target='#modal-emp-details'  >
        <div className='innerCard-section'>
              <div className="imageSection" >
              {/* onClick={hadleClickOnCard} */}
                 <div className="innerImageSection flist">
                    <img src={data.profile} alt=""/>
                 </div>
              </div>
              <div className="mobile-view-card-info" >
                {data.fname}
                {/* Anthony Morris */}
              </div>
              <div className="ellipsis">
              <i className="fa-solid fa-ellipsis-vertical"></i>
              </div>
              <div className="userInfo">
                  <div className="fullname">{data.fname}</div>
                  <div className="jobTitle">{data.jobtitle}</div>
                  <div className="department">{data.department}</div>
                  <div className="socialMediaIcons" style={{  backgroundColor:""}}>
                    <div>
                    {/* <FontAwesomeIcon icon="fa-brands fa-square-whatspp" /> */}
                      <i className="fa-brands fa-square-whatsapp" style={{fontSize:12,marginTop:0}}></i>
                    </div>
                    <div>
                    <i className="fa-solid fa-envelope" style={{fontSize:12,marginTop:0}}></i>
                    </div>
                    <div>
                    <i className="fa-solid fa-comment" style={{fontSize:12,marginTop:0}}></i>
                    </div>
                    <div>
                    <i className="fa-solid fa-star" style={{fontSize:12,marginTop:0}}></i>
                    </div>
                    <div>
                    <i className="fa-solid fa-heart" style={{fontSize:12,marginTop:0}}></i>
                    </div>
                  </div>
                 {/* {
                  showcard && <MobileViewModal/>
                 } */}
                  {/* <Modal show={showcard}>
                        <Modal.Header closeButton onHide={handleCloseForm}>
                            <Modal.Title>Add Employee</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <label  className="form-label">First Name</label>
                            <input type="text" className="form-control" placeholder="" name="fname"  onChange={handleChange} value = {newUser.fname}/>
                            <label  className="form-label">Last Name</label>
                            <input type="text" className="form-control" name="sname" required onChange={handleChange} value = {newUser.sname}/>
                            <label  className="form-label">email</label>
                            <input type="email" className="form-control" name="email" onChange={handleChange}  value = {newUser.email}/>
                            <label >Office Location : </label><br></br>
                            <select name="office" id="office" className="p-1"   onChange={handleChange} value = {newUser.office}>
                            <option value="sales">select</option>
                            <option value="india" >India</option>
                            <option value="seattle">Seattle</option>
                            </select>
                            <br/>
                            <label>Department : </label><br></br>
                            <select name="department" id="department" className="p-1"   onChange={handleChange} value = {newUser.department}>
                            <option value="sales">select</option>
                            <option value="it" >IT</option>
                            <option value="humanresource">Human resource</option>
                            <option value="sales">sales</option>
                            <option value="md">MD</option>
                            </select>
                            <br></br>
                            <label>JobTitle : </label><br></br>
                            <select name="jobtitle" id="jobtitle" className="p-1"   onChange={handleChange} value = {newUser.jobtitle}>
                            <option value="sales">select</option>
                            <option value="sharepointpracticehead">SharePoint Practice </option>
                            <option value="head">Head</option>
                            <option value="dotNetDevelopment">.Net Development Lead</option>
                            <option value="recrutingExpert">Recruiting Expert</option>
                            <option value="bussinessAnalyst">Business Analyst</option>
                            <option value="biDeveloper">BI Developer </option>
                            </select>
                            <br/>
                            <label className="form-label">Phone No</label>
                            <input type="text" className="form-control" name="phoneno" onChange={handleChange} value = {newUser.phoneno} />
                            <label  className="form-label">Skype</label>
                            <input type="text" className="form-control" name="skype" onChange={handleChange}  value = {newUser.skype}/>
                            <input type="file" className="form-control" name="fileImg"/>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={handleDeleteUser}>
                                Delete
                            </Button>
                            <Button variant="primary" onClick={handleSaveChanges}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal> */}
              </div>
        </div>
        
    </div>
  );
}

export default Cards;
