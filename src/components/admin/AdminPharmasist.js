import React, { useState, useEffect } from "react";
import DefaultLayout from "../DefaultLayout";
import AddPharmasistModel from "../../models/AddPharmasistModel";
import { getPharmasist } from "../../services/pharmasistService";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

const AdminPharmasist = () => {
  const [pharmasist, setPharmasist] = useState([]);

  useEffect(() => {
    getPharmasist().then((res) => {
      console.log("res", res);
      setPharmasist(res.data);
    });
  }, []);

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
        <strong>
          <button
            className="btn btn-danger"
            onClick={() => {
              console.log("777777777777777", params);
            }}
          >
            Delete
          </button>
        </strong>
      ),
    },
  ];
  return (
    <>
      <DefaultLayout>
        <AddPharmasistModel setPharmasist={setPharmasist} />
        <div style={{ height: 430, width: "100%" }}>
          <DataGrid
            rows={pharmasist}
            columns={columns}
            getRowId={(row) => row._id}
          />
        </div>
      </DefaultLayout>
    </>
  );
};

export default AdminPharmasist;
