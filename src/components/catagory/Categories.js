
import React, { useState, useEffect } from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { getCategories } from "./../../services/categoryService";
import SideBar from "../Sidebar/SideBar";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((res) => {
      console.log("res", res);
      setCategories(res.data);
    });
  }, []);

  const columns = [
    { field: "name", headerName: "Name", width: 150 },
    {
      field: "col2",
      headerName: "Action",
      width: 130,
      renderCell: (params) => (
        <>
          <button className="btn btn-danger btn-sm m-1 " onClick={() => {}}>
            Delete
          </button>

          <button
            className="btn btn-primary btn-sm m-1 "
            onClick={() => {
              console.log("edit button called");
              console.log("777777777777777", params);
            }}
          >
            Edit
          </button>
        </>
      ),
    },
  ];
  return (
    <>
      <div style={{ display: "flex" }}>
        <SideBar />
        <div
          className="mt-5 w-full h-96 p-1 
          rounded mb-2 shadow-lg border-none"
        >
          <h3
            style={{
              marginLeft: "20px",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            Categories List
          </h3>
          <DataGrid
            rows={categories}
            columns={columns}
            getRowId={(row) => row._id}
            className="w-full h-96 p-2  rounded mb-2 shadow-lg border-none bg-white text-black"
          />
        </div>
      </div>
    </>
  );
};

export default Categories;
