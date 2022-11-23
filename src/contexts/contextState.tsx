import { useEffect  , createContext} from "react";
import { useState , useContext} from "react";
import {contextStateType , contextChildType , workInfoType , newUserType , depkeysType
                                    ,officeKeysType , titleKeysType} from '../Types/types';



export const userContext = createContext<contextStateType>({} as contextStateType);
const Contextstate =  ({children} : contextChildType) => {
   
    const work : workInfoType = {
        department : {
            "it":0,
            "humanresource":0,
            "md":0,
            "sales":0,
          },
        office : {
            "seattle":0,
            "india":0,
       },
       jobTitle: {
            "sharepointpracticehead":0,
            "dotNetDevelopment":0,
            "recrutingExpert":0,
            "biDeveloper":0,
            "bussinessAnalyst":0,
        }
    }
     // getting value from local Storage 

    const  localItemsUser = ()=>{
        const userData = localStorage.getItem("user")
        if(userData){
            return JSON.parse(userData);
        }else {
            return [];
        }
    }

    const localItemsWorkInfo = ()=>{
    const workInfo = localStorage.getItem("workInfo");
    if(workInfo){
            return JSON.parse(workInfo);
        }else {
            return work;
        }
    }

    

    const [empData , setEmpData] = useState(localItemsUser);
    const [workInfo , setWorkInfo] = useState<workInfoType>(localItemsWorkInfo);
    const [clickedCard,setClickedCard] = useState<newUserType | null>(null);
    // adding to local storage 
    useEffect (()=>{
        // console.log("ksafjlkalfkaljlflakflkfa")
         localStorage.setItem("user" , JSON.stringify(empData));
         localStorage.setItem("workInfo" , JSON.stringify(workInfo));
     } , [empData]);
   
    // adding new user info 
    const addEmployee  = (newUser : newUserType) =>{
        setEmpData([...empData,newUser])
        updateWorkInfo(newUser , 1);
    }

    // updating work info ; 
    const updateWorkInfo = (obj:newUserType , val :number)=>{
            const  dep  = obj.department as depkeysType;
            const off = obj.office as officeKeysType;
            const title = obj.jobtitle as titleKeysType;
            workInfo.department[dep]= workInfo.department[dep] + val;
            workInfo.jobTitle[title] =  workInfo.jobTitle[title]  + val;
            workInfo.office[off] = workInfo.office[off] + val;
       
    }
    // updating user info 
    console.log(empData)
    const   handleUpdate = (id : string , newUser : newUserType)=>{
        const userInfo = empData;
        for(let i = 0;i<userInfo.length;i++) {
            if(userInfo[i].id == id) {
                userInfo[i].fname =newUser.fname;
                userInfo[i].sname =newUser.sname;
                userInfo[i].email = newUser.email;
                userInfo[i].office = newUser.office;
                userInfo[i].jobtitle = newUser.jobtitle;
                userInfo[i].department = newUser.department;
                userInfo[i].phoneno = newUser.phoneno;
                userInfo[i].skype = newUser.skype;
                userInfo[i].profile = newUser.profile;
            }
        }
        setEmpData([...userInfo]);
    }

    // deleting userInfo 
   const  handleDelete = (id : string)=>{
       const newuser = empData.filter((val : newUserType)=>{
         if(val.id === id) {
            updateWorkInfo(val , -1);
            return ;
         }
         return val.id!==id;
       })

       setEmpData(newuser);
    }

      return(
         <userContext.Provider value = {{empData ,workInfo , setWorkInfo,  handleUpdate , handleDelete , addEmployee,
            clickedCard,setClickedCard ,setEmpData
         }}>
             {children}
         </userContext.Provider>
      )
}

export default Contextstate;