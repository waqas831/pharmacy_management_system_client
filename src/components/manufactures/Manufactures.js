import React, { useState, useEffect } from "react";
import DefaultLayout from "../DefaultLayout";
import AddManufactures from "./AddManufactures";
import { getManufacture } from "../../services/manufactureService";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

const Manufactures = () => {
  const [manufactures, setManufactures] = useState([]);
  const getManufacturesData = async () => {
    const res = await getManufacture();
    setManufactures(res.data.items);
  };

  useEffect(() => {
    getManufacturesData();

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
    { field: "companyName", headerName: "First Nmae", width: 150 },
    { field: "address", headerName: "Last Name", width: 150 },
    { field: "city", headerName: "Address", width: 150 },
    { field: "email", headerName: "Email", width: 150 },
 
  ];
  return (
    <>
      <DefaultLayout>
        <AddManufactures setManufactures={setManufactures} />
        <div style={{ height: 430, width: "100%" }}>
          <DataGrid rows={manufactures} columns={columns}
           getRowId={(row) => row._id}
          />
        </div>
      </DefaultLayout>
    </>
  );
};

export default Manufactures;
