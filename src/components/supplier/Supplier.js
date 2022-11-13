import React,{useState,useEffect} from "react";
import DefaultLayout from "../DefaultLayout";
import AddSupplier from "./AddSupplier";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { getSupplier } from "../../services/supplierService";

const Supplier = () => {
    const [suppliers, setSuppliers] = useState([]);
    const [singleSupplier, setSingleSupplier] = useState();
    const [editMode, setEditMode] = useState(false);
    const [open, setOpen] = useState(false);
    useEffect(() => {
        getSupplier().then((res) => {
        console.log("res", res);
        setSuppliers(res.data);
      });
    }, []);
  
    const columns = [
      { field: "name", headerName: "Name", width: 150 },
      { field: "phone", headerName: "Number", width: 150 },
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
              
              }}
            >
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
      <DefaultLayout>
        <AddSupplier setSuppliers={setSuppliers} />
        <div style={{ height: 430, width: "100%" }}>
        <DataGrid
          rows={suppliers}
          columns={columns}
          getRowId={(row) => row._id}
        />
      </div>
      </DefaultLayout>
    </>
  );
};

export default Supplier;
