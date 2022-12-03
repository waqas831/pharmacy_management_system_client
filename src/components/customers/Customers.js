import React, { useEffect } from "react";
import DefaultLayout from "../DefaultLayout";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import AddCustomer from "./AddCustomer";
import {
  getCustomers,
  deleteCustomer,
  editCustomer,
} from "../../services/customerService";
import SideBar from "../Sidebar/SideBar";
const Customers = () => {
  const [customers, setCustomers] = React.useState([]);
  const [singleCustomer, setSingleCustomer] = React.useState();
  const [editMode, setEditMode] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    getCustomers().then((res) => {
      console.log("res", res);
      setCustomers(res.data);
    });
  }, []);

  const columns = [
    { field: "name", headerName: "Name", width: 120, editable: true },
    { field: "age", headerName: "Age", width: 120 },
    { field: "gender", headerName: "Gender", width: 130 },
    { field: "number", headerName: "Number", width: 150 },
    { field: "email", headerName: "Email", width: 150 },
    { field: "address", headerName: "Address", width: 150 },
    {
      field: "col8",
      headerName: "Action",
      width: 130,
      renderCell: (params) => (
        <>
          <button
            className="btn btn-danger btn-sm m-1 "
            onClick={() => {
              deleteCustomer(params.row._id).then((res) => {
                console.log("res", params.row._id, res);
                getCustomers().then((res) => {
                  setCustomers(res.data);
                });
              });
            }}
          >
            Delete
          </button>

          <button
            className="btn btn-primary btn-sm m-1 "
            onClick={() => {
              setSingleCustomer(params.row);
              setEditMode(true);
              setOpen(true);

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
          Customers List
        </h3>
        <div style={{ height: 430, width: "100%" }}>
          <DataGrid
            rows={customers}
            columns={columns}
            getRowId={(row) => row._id}
            className="w-full h-96 p-2  rounded mb-2 shadow-lg border-none bg-white text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Customers;

// {editMode ? (
//   <AddCustomer
//   setCustomers={setCustomers}
//     setOpen={setOpen}
//     open={open}
//     singleCustomer={singleCustomer}
//     setEditMode={setEditMode}
//     editMode={editMode}
//     />
//     ) : (
//       <AddCustomer
//       setCustomers={setCustomers}
//       setOpen={setOpen}
//       open={open}
//       />
//       )}
