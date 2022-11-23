import { useContext } from "react";
import { userContext } from "../contexts/contextState";
import EmployeeDataEditModal from "./EmployeeDataEditModal";

export default function MobileViewModal() {
  const { empData, setEmpData, clickedCard, setClickedCard } =
    useContext(userContext);

  const handleDelete = () => {
    setEmpData(empData.filter((emp) => emp !== clickedCard));
   // handleDelete(id);
    setClickedCard(null);
  };

//   const handleDeleteUser = ()=>{
//     contxt.handleDelete(data.id);
//     setShowcard(!showcard);
//   }
//   let [newUser, setNewUser] = useState<newUserType>({
//     id:"",
//     fname: "",
//     sname: "",
//     email: "",
//     office: "",
//     jobtitle: '',
//     department: '',
//     phoneno: '',
//     skype: '',
//     profile:''
// });
 const  handleEditFormModal = ()=>{
   setClickedCard(null);
 }
 const openEditForm = ()=>{
     console.log(clickedCard)
 }
  return (
    <div className="modal fade" id="modal-emp-details" >
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-body">
            <div className="text-end">
              <button className="btn-close"  data-bs-dismiss="modal" onClick={handleEditFormModal}></button>
            </div>
            <img src={clickedCard?.profile} alt="" style={{ width: 120  , height:120}} />
            <br />
            <br/>
            <h2 className="fw-normal" style={{fontSize:"2rem" ,textTransform:"capitalize"}}>{clickedCard?.fname}</h2>
            <p className="m-0 text-muted" style={{fontSize:"1.2rem" ,textTransform:"capitalize"}}>{clickedCard?.jobtitle}</p>
            <p className="m-0 text-muted" style={{fontSize:"1.2rem" ,textTransform:"capitalize"}}>{clickedCard?.department}</p>
            <p className="m-0 text-muted" style={{fontSize:"1.2rem" ,textTransform:"capitalize"}}>{clickedCard?.office}</p>
             <br />
             {/* <br/> */}
             <div className="d-flex align-items-center justify-content-between">
              <div>
                <h2 className="fw-normal mt-2 mb-0" style={{fontSize:"2rem"}}>mobile</h2>
                <p className="fw-bold cyan-shade-text">
                  {clickedCard?.phoneno}
                </p>
              </div>
              <h2>
                <i className="fa-solid fa-phone" style={{color:"rgb(81,201,61)"}}></i>
              </h2>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <h2 className="fw-normal mt-2 mb-0" style={{fontSize:"2rem"}}>skype name</h2>
                <p className="fw-bold cyan-shade-text">
                  {clickedCard?.skype}
                </p>
              </div>
              <h2>
                <i className="fa-brands fa-skype cyan-shade-text"></i>
              </h2>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <h2 className="fw-normal mt-2 mb-0" style={{fontSize:"2rem"}}>email</h2>
                <p className="fw-bold cyan-shade-text">{clickedCard?.email}</p>
              </div>
              <h2>
                <i className="fa-solid fa-envelope text-warning"></i>
              </h2>
            </div>
          </div>
          <div className="modal-footer d-flex justify-content-around">
            {/* delete button */}
            <button className="btn" onClick={handleDelete} data-bs-dismiss="modal">
              <h2>
                <i className="fa-solid fa-trash-can cyan-shade-text"></i>
              </h2>
            </button>
            {/* edit button */}
            <button
              className="btn"
              data-bs-toggle="modal"
              data-bs-target="#modal-add-employee"
              onClick={openEditForm}
            >
              <h2>
                <i className="fa-solid fa-pen text-muted" ></i>
              </h2>
            </button>
            {/* <EmployeeDataEditModal/> */}
          </div>
        </div>
      </div>
    </div>
  );
}