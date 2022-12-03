import React, { useState, useEffect } from "react";
import DefaultLayout from "../DefaultLayout";
import AddProducts from "./AddProducts";
import { getSupplier } from "../../services/supplierService";
import { getManufacture } from "./../../services/manufactureService";
import { addProducts, getProducts } from "../../services/addProductService";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import Moment from "react-moment";
import { render } from "@testing-library/react";
import SideBar from "../Sidebar/SideBar";

const PharmacyProducts = () => {
  const [supplier, setSupplier] = useState([]);
  const [manufacture, setManufacture] = useState([]);
  const [products, setProducts] = useState([]);
  const customersCallAndMarchant = () => {
    getSupplier().then((res) => {
      setSupplier(res.data);
    });
  };

  const manufactureCall = () => {
    getManufacture().then((res) => {
      console.log("res", res);
      setManufacture(res.data.items);
    });
  };

  const getProductsData = async () => {
    getProducts().then((res) => {
      console.log("res", res);
      setProducts(res.data);
    });
  };

  useEffect(() => {
    manufactureCall();
    customersCallAndMarchant();
    getProductsData();
  }, []);

  const columns = [
    { field: "name", headerName: "Madicine Nmae", width: 150 },
    { field: "price", headerName: "price", width: 150 },
    { field: "quantity", headerName: "quantity", width: 150 },
    {
      field: "expireDate",
      headerName: "expireDate",
      width: 150,
      renderCell: (params) => (
        <Moment format="YYYY/MM/DD">{params.value}</Moment>
      ),
    },
    {
      field: "supplier",
      headerName: "Supplier Name",
      width: 150,
      renderCell: (params) => <div>{params.row.supplierId.name}</div>,
    },
    {
      field: "manufacture",
      headerName: "Manufacture Name",
      width: 150,
      renderCell: (params) => <div>{
        console.log("params", params)
        }</div>,
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
            Product List
          </h3>
          <DataGrid
            rows={products}
            columns={columns}
            getRowId={(row) => row._id}
            className="w-full h-96 p-2  rounded mb-2 shadow-lg border-none bg-white text-black"
            
          />
        </div>
      </div>
    </>
  );
};

export default PharmacyProducts;
