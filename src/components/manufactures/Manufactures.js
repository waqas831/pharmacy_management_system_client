import React, { useState, useEffect } from "react";
import DefaultLayout from "../DefaultLayout";
import AddManufactures from "./AddManufactures";
import { getManufacture } from "../../services/manufactureService";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import SideBar from "../Sidebar/SideBar";

const Manufactures = () => {
  const [manufactures, setManufactures] = useState([]);
  const getManufacturesData = async () => {
    const res = await getManufacture();
    setManufactures(res.data.items);
  };

  useEffect(() => {
    getManufacturesData();
  }, []);

  const columns = [
    { field: "companyName", headerName: "First Nmae", width: 150 },
    { field: "address", headerName: "Last Name", width: 150 },
    { field: "city", headerName: "Address", width: 150 },
    { field: "email", headerName: "Email", width: 150 },
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
            Manufactures List
          </h3>
          <div style={{ height: 430, width: "100%" }}>
            <DataGrid
              rows={manufactures}
              columns={columns}
              getRowId={(row) => row._id}
              className="w-full h-96 p-2  rounded mb-2 shadow-lg border-none bg-white text-black"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Manufactures;
