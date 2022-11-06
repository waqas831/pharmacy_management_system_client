import React, { useState } from "react";
import DefaultLayout from "../DefaultLayout";
import AddManufactures from "./AddManufactures";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

const Manufactures = () => {
  const rowss = [
    {
      id: 1,
      col1: "Hello",
      col2: "World",
      col3: "23",
      col4: "male",
      col5: "03017777777",
      col6: "waqas@gmail.com",
      col7: "Mda road",
    },
    {
      id: 1,
      col1: "Hello",
      col2: "World",
      col3: "23",
      col4: "male",
      col5: "03017777777",
      col6: "waqas@gmail.com",
      col7: "Mda road",
    },
    {
      id: 1,
      col1: "Hello",
      col2: "World",
      col3: "23",
      col4: "male",
      col5: "03017777777",
      col6: "waqas@gmail.com",
      col7: "Mda road",
    },
    {
      id: 1,
      col1: "Hello",
      col2: "World",
      col3: "23",
      col4: "male",
      col5: "03017777777",
      col6: "waqas@gmail.com",
      col7: "Mda road",
    },
  ];

  const columns = [
    { field: "col1", headerName: "First Nmae", width: 150 },
    { field: "col2", headerName: "Last Name", width: 150 },
    { field: "col3", headerName: "Age", width: 150 },
    { field: "col4", headerName: "Gender", width: 150 },
    { field: "col5", headerName: "Phone Number", width: 150 },
    { field: "col6", headerName: "Email", width: 150 },
    { field: "col7", headerName: "Address", width: 150 },
  ];
  return (
    <>
      <DefaultLayout>
        <AddManufactures />
        <div style={{ height: 430, width: "100%" }}>
          <DataGrid rows={rowss} columns={columns} />
        </div>
      </DefaultLayout>
    </>
  );
};

export default Manufactures;
