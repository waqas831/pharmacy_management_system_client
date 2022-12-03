import React, { useState, useEffect } from "react";
import DefaultLayout from "../DefaultLayout";
import AddPharmasistModel from "../../models/AddPharmasistModel";
import { getPharmasist } from "../../services/pharmasistService";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import SideBar from "../Sidebar/SideBar";

const AdminPharmasist = () => {
  const [pharmasist, setPharmasist] = useState([]);

  useEffect(() => {
    getPharmasist().then((res) => {
      console.log("res", res);
      setPharmasist(res.data);
    });
  }, []);

  const columns = [
    { field: "fname", headerName: "First Nmae", width: 120, editable: true },
    { field: "lname", headerName: "Last Name", width: 120 },
    { field: "gender", headerName: "Age", width: 120 },
    { field: "age", headerName: "Gender", width: 130 },
    { field: "address", headerName: "Phone Number", width: 150 },
    { field: "email", headerName: "Email", width: 150 },
    { field: "password", headerName: "Address", width: 150 },
    {
      field: "col8",
      headerName: "Action",
      width: 130,
      renderCell: (params) => (
        <div className="flex justify-between m-3">
          <button
            className="bg-red-700 hover:bg-red-700 text-white text-lg font-bold rounded"
            onClick={() => {
              console.log("777777777777777", params);
            }}
          >
            Delete
          </button>
          <button
            className="bg-red-700 hover:bg-red-700 text-white text-lg font-bold rounded ml-3"
            onClick={() => {
              console.log("777777777777777", params);
            }}
          >
            Edit
          </button>
        </div>
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
            Phamasist List
          </h3>
          <DataGrid
            rows={pharmasist}
            columns={columns}
            getRowId={(row) => row._id}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            className="w-full h-96 p-2  rounded mb-2 shadow-lg border-none bg-white text-black"
          />
        </div>
      </div>
      {/* <AddPharmasistModel setPharmasist={setPharmasist} /> */}
    </>
  );
};

export default AdminPharmasist;
