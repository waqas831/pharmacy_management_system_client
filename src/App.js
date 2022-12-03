import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerHomePage from "./pages/CustomerHomePage";
import Homepage from "./pages/Homepage";
import ItemPage from "./pages/ItemPage";
import BillsHomePage from "./pages/BillsHomePage";
import Login from "./components/login/Login";

import PharmasistPrescription from "./components/pharmasist/PharmasistPrescription";
import React, { useState, useEffect } from "react";
import Stock from "./components/pharmasist/Stock";
import Medicines from "./components/admin/Medicines";
import AdminPharmasist from "./components/admin/AdminPharmasist";
import PharmacyProducts from "./components/products/PharmacyProducts";
import Manufactures from "./components/manufactures/Manufactures";
import Customers from "./components/customers/Customers";
import Supplier from "./components/supplier/Supplier";
import SignUp from "./components/signup/SignUp";
import Purchase from "./components/purchase/Purchase";
import Dashboard from "./components/dashboard/Dashboard";

import AddProducts from "./components/products/AddProducts";
import AddCustomer from "./components/customers/AddCustomer";
import AddSupplier from "./components/supplier/AddSupplier";
import AddManufactures from "./components/manufactures/AddManufactures";
import Categories from "./components/catagory/Categories";
import AddCatagory from "./components/catagory/AddCatagory";
import CustomerHome from "./customers/CustomerHome";
import CardItems from "./customers/cardItems/CardItems";
import UploadForm from "./customers/uploadPrescription/UploadForm";
function App() {
  const [token, setToken] = React.useState("");
  const [user, setUser] = React.useState("");
  const [role, setRole] = React.useState("");

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    const userParse = user && user !== "undefined" ? JSON.parse(user) : null;
    setToken(token);
    setRole(userParse?.role);
    setUser(user);
    console.log("user rolw", userParse?.role, token, user);
  }, [token]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          {role === "admin"
            ? adminRoutes()
            : role === "pharmasist"
            ? pharmasistRoutes()
            : customerRoutes()}
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

export const adminRoutes = () => {
  return (
    <>
      <Route path="/" element={<Dashboard />} />
      <Route path="/adminPharmasist" element={<AdminPharmasist />} />
      {/*  */}
      <Route path="/products" element={<PharmacyProducts />} />
      <Route path="/addproducts" element={<AddProducts />} />
      {/*  */}
      <Route path="/medicines" element={<Medicines />} />

      {/*  */}
      <Route path="/manufactures" element={<Manufactures />} />
      <Route path="/addmanufactures" element={<AddManufactures />} />
      {/*  */}
      <Route path="/customers" element={<Customers />} />
      <Route path="/addcustomers" element={<AddCustomer />} />
      {/*  */}
      <Route path="/supplier" element={<Supplier />} />
      <Route path="/addsupplier" element={<AddSupplier />} />
      {/*  */}
      <Route path="/catagory" element={<Categories />} />
      <Route path="/addcatagory" element={<AddCatagory />} />
      {/*  */}
      <Route path="/purchase" element={<Purchase />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
    </>
  );
};

export const pharmasistRoutes = () => {
  return (
    <>
      <Route path="/" element={<Homepage />} />
      <Route path="/prescription" element={<PharmasistPrescription />} />
      <Route path="/stock" element={<Stock />} />
    </>
  );
};

export const customerRoutes = () => {
  return (
    <>
      <Route path="/" element={<CustomerHome />} />
      <Route path="/addtocard" element={<CardItems />} />
      <Route path="/form" element={<UploadForm />} />
    </>
  );
};
