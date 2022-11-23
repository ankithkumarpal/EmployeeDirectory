import "./home.css";
import Filter from "./components/Filters";
import Content from "./components/Content";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { userContext } from "./contexts/contextState";
import { filterType, inputTagType } from "./Types/types";
import { MobileViewFilter } from "./components/MobileViewFilter";
import { SortByFilter } from "./components/SortByFilter";
import Button from "react-bootstrap/Button";
import { SearchInput } from "./components/SearchInput";
import { EmployeeAddModal } from "./components/EmployeeAddModal";
import EmployeeDataEditModal from "./components/EmployeeDataEditModal";

const Home = () => {
  // sidebar filter state
  const contxt = useContext(userContext);
  let [filterTag, setFilterTag] = useState<filterType | null>({} as filterType);
  let [hamToggle, setHamToggle] = useState<boolean>(true);
  let [searchToggle, setSearchToggle] = useState<boolean>(false);
  let [inputTag, setinputTag] = useState<inputTagType>("fname");
  let [keyword, setKeyword] = useState<string>("");
  let [alphabetTag, setAlphabetTag] = useState<string>("#");

  let handleHamToggle = () => {
    if(searchToggle) setSearchToggle(!searchToggle)
    setHamToggle(!hamToggle);
  };

  let handleSearchToggle = () => {
  // if(hamToggle) setHamToggle(!hamToggle);
    setSearchToggle(!searchToggle);
  };

  const handleKeyword = (val: string) => {
    setFilterTag(null);
    // console.log(val);
    setKeyword(val);
    setAlphabetTag("#");
  };

  return (
    <div id="Home">
      <header id="mobileHeader">
      <MobileViewFilter
          hamToggle={hamToggle}
          setHamToggle={setHamToggle}
          filterTag={filterTag}
          setFilterTag={setFilterTag}
        />
        <div id="mobile-view-header">
          <div className="hambuger">
            <div className="hambergerIcon">
              <i className="fa-solid fa-bars" onClick={handleHamToggle}></i>
              {/* <SideBarFilter setFilterTag={setFilterTag} hamToggle={hamToggle}/> */}
            </div>
          </div>
         
        <div style={{width:"80%"}}>
        <SearchInput keyword={keyword} handleKeyword={handleKeyword} />     
        </div>
        
          <div className="divfilterTag" onClick={handleSearchToggle}>
            {!searchToggle ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-filter"
                viewBox="0 0 16 16"
              >
                <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
              </svg>
            ) : (
              <i className="fa-sharp fa-solid fa-xmark" style={{fontSize:28}}></i>
            )}
          </div>
        </div>
        {searchToggle && (
          <div className="mobile-view-search mobile-view-search-active">
            <div className="mobile-view-search-inner-div">
              <div className="mobile-sortByFilter">
                <SortByFilter inputTag={inputTag} setinputTag={setinputTag} />
              </div>
            </div>
            <hr />
          </div>
          // <hr />
        )}
        {/* <MobileViewFilter
          hamToggle={hamToggle}
          setHamToggle={setHamToggle}
          filterTag={filterTag}
          setFilterTag={setFilterTag}
        /> */}
        {
          !searchToggle && hamToggle ?
          <hr></hr> :<br/>
         
        }
        <div className="mobileEmpBtn">
          <div className="mobile-view-addEmployeeBtn">
            <div className="mobile-view-addEmployeeBtn-inner">
              <EmployeeAddModal
                setAlphabetTag={setAlphabetTag}
                setFilterTag={setFilterTag}
              />
            </div>
        </div>
        </div>
        
      </header>

      <header id="Header">
        <Header />
      </header>
      <section id="section">
        <div id="section-filter">
          <Filter filterTag={filterTag} setFilterTag={setFilterTag} />
        </div>
        <Content
          filterTag={filterTag}
          setFilterTag={setFilterTag}
          inputTag={inputTag}
          setinputTag={setinputTag}
          keyword={keyword}
          setKeyword={setKeyword}
          alphabetTag={alphabetTag}
          setAlphabetTag={setAlphabetTag}
          handleKeyword={handleKeyword}
        />
        <EmployeeDataEditModal/>
      </section>
    </div>
  );
};

export default Home;
