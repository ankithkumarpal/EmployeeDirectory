import { useContext , useState , useEffect} from 'react';
import { userContext } from '../contexts/contextState';
import {filterPropType } from '../Types/types';
import './filters.css';

type selectedFeildType =  boolean;
const  Filter = ({setFilterTag , filterTag} : filterPropType)=> {
    
     const contxt = useContext(userContext);
    //  console.log(contxt.workInfo.department)
     const dep = contxt.workInfo.department;
     const office = contxt.workInfo.office;
     const jobTitle = contxt.workInfo.jobTitle;

     const [selectedFeild , setSelectedFeild] = useState<selectedFeildType>(false);
     useEffect(() => {
          
     }, [selectedFeild])
    //  console.log(filterTag?.value)
    return (
        <div id="Filter">
              <div className="mobile-view-side-filter p-2 m-2 col-10 border border-2 filter-inner">
                <h6>Departments</h6>
                <ul className="list-unstyled mb-4">
                    <li className={`flist ${filterTag?.value=='it'  ? "filter-selected" :""}`} onClick={(e)=>{setFilterTag({section:"department" , value:'it'}) , setSelectedFeild(!selectedFeild)}}>IT({dep.it})</li >
                    <li className={`flist ${filterTag?.value=='humanresource' ? "filter-selected" :""}`} onClick={(e)=>{setFilterTag({section:"department" , value:"humanresource"})}} >Human Resources({dep.humanresource})</li>
                    <li className={`flist ${filterTag?.value=='md' ? "filter-selected" :""}`} onClick={(e)=>{setFilterTag({section:"department" , value:"md"})}}>MD({dep.md})</li>
                    <li className={`flist ${filterTag?.value=='sales' ? "filter-selected" :""}`} onClick={(e)=>{setFilterTag({section:"department" , value:"sales"})}}>Sales({dep.sales})</li>
                </ul> 
                <h6>Offices</h6>
                <ul className="list-unstyled mb-4">
                    <li className={`flist ${filterTag?.value=='office' ? "filter-selected" :""} `} onClick={(e)=>{setFilterTag({section:'office' , value:"seattle"})}}>Seattle({office.seattle})</li>
                    <li  className={`flist ${filterTag?.value=='india' ? "filter-selected" :""} `} onClick={(e)=>{setFilterTag({section:"office" , value:"india"})}}>India({office.india})</li>
                </ul>
                <h6>Job Titles</h6>
                <ul className="list-unstyled mb-4">
                    <li className={`flist ${filterTag?.value=='sharepointpracticehead' ? "filter-selected" :""} `} onClick={(e)=>{setFilterTag({section:"jobtitle" , value:"sharepointpracticehead"})}}>SharePoint Practice Head({jobTitle.sharepointpracticehead})</li>
                    <li className={`flist ${filterTag?.value=='dotNetDevelopment' ? "filter-selected" :""} `} onClick={(e)=>{setFilterTag({section:"jobtitle" , value:"dotNetDevelopment"})}}>.Net Development Lead({jobTitle.dotNetDevelopment})</li>
                    <li  className={`flist ${filterTag?.value=='recrutingExpert' ? "filter-selected" :""} `} onClick={(e)=>{setFilterTag({section:"jobtitle" , value:"recrutingExpert"})}}>Recruiting Expert({jobTitle.recrutingExpert})</li>
                    <li className={`flist ${filterTag?.value=='biDeveloper' ? "filter-selected" :""} `} onClick={(e)=>{setFilterTag({section:"jobtitle" , value:"biDeveloper"})}}>BI Developer({jobTitle.biDeveloper})</li>
                    <li  className={`flist ${filterTag?.value=='bussinessAnalyst' ? "filter-selected" :""} `} onClick={(e)=>{setFilterTag({section:"jobtitle" , value:"bussinessAnalyst"})}}>Business Analyst({jobTitle.bussinessAnalyst})</li>
                </ul>
            </div>
        </div>
    )
}

export default Filter;