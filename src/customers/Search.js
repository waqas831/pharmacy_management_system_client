import React from "react";
import "./search.css";
import { useNavigate } from "react-router-dom";
const Search = ({setSearch}) => {
  const navigate= useNavigate();
  return (
    <>
      <div className="search-bar">
        <div className="search-bar__wrapper">
          <input type="text" placeholder="Search Medicine" onChange={(e)=>{
            setSearch(e.target.value)
          }} />
          <h3 className="prescription_heading" 
          onClick={()=>{
            navigate("/form")
          }}
          >Upload Prescription</h3>
        
        </div>
      </div>
    </>
  );
};

export default Search;
