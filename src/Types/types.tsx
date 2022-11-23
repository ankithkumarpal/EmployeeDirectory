export type filterType = {
    section : string 
    value : string
}
export type filterPropType = {
       setFilterTag : React.Dispatch<React.SetStateAction<filterType| null>>
       filterTag:filterType | null
}

// content file types 
export type setFilterType  = {
    section : string , 
    value : string 
}
export type changeTagType = {
    changeTag : (e : React.ChangeEvent<HTMLInputElement>)=>void;
}

export type inputTagType = "fname" | "sname" | "office" | "department" | "jobtitle";
export type newUserType = {
        id: string,
        fname: string,
        sname: string,
        email: string,
        office:string,
        jobtitle:string,
        department: string,
        phoneno: string,
        skype: string,
        profile:string
}
export type contentPropTypes = {
    filterTag : setFilterType | null;
    setFilterTag: React.Dispatch<React.SetStateAction<filterType|null>>
    inputTag:inputTagType;
    setinputTag : React.Dispatch<React.SetStateAction<inputTagType>>;
    keyword:string;
    setKeyword:React.Dispatch<React.SetStateAction<string>>
    alphabetTag:string;
    setAlphabetTag:React.Dispatch<React.SetStateAction<string>>
    handleKeyword:(val:string)=>void
}

// cards type 
export type cardsPropType = {
    data : newUserType;
}

export type workInfoType = {
    department : {
        it:number
        humanresource:number,
        md:number,
        sales:number,
    },
    office: {
        seattle:number,
        india:number,
    },
    jobTitle: {
    sharepointpracticehead:number,
    dotNetDevelopment:number,
    recrutingExpert:number,
    biDeveloper:number,
    bussinessAnalyst:number,
    }
}

export type depkeysType = "it" | "humanresource" |"md" | "sales";
export type officeKeysType = "india" | "seattle";
export type titleKeysType = "sharepointpracticehead" | "dotNetDevelopment" | "recrutingExpert" | "bussinessAnalyst" |"biDeveloper"

export   type contextChildType = {
    children : React.ReactNode;
}

export type contextStateType = {
     empData : newUserType[],
     workInfo :workInfoType,
     setWorkInfo : React.Dispatch<React.SetStateAction<workInfoType>>,
     handleUpdate : (id : string , newUser : newUserType)=>void,
     handleDelete : (id : string)=>void , 
     addEmployee : (newUser : newUserType) =>void
     setClickedCard:React.Dispatch<React.SetStateAction<newUserType | null>>
     clickedCard:newUserType | null
     setEmpData:React.Dispatch<any>
}

export type EmployeeAddModalPropType = {
    setFilterTag:React.Dispatch<React.SetStateAction<filterType | null>>
    setAlphabetTag:React.Dispatch<React.SetStateAction<string>>
}

export type searchInputPropType ={
    keyword:string
    handleKeyword:(val : string)=>void
}
export type MobileViewFilterProps = {
    hamToggle:boolean;
    setHamToggle:React.Dispatch<React.SetStateAction<boolean>>
    setFilterTag:React.Dispatch<React.SetStateAction<filterType | null>>
    filterTag : filterType | null
};
export type SortByFilterProps = {
    setinputTag : React.Dispatch<React.SetStateAction<inputTagType>>
    inputTag:inputTagType
}
export type sideFilterBarProp ={
    setFilterTag : React.Dispatch<React.SetStateAction<filterType| null>>;
    hamToggle:boolean
 }