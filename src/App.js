import "antd/dist/antd.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerHomePage from "./pages/CustomerHomePage";
import Homepage from "./pages/Homepage";
import ItemPage from "./pages/ItemPage";
import BillsHomePage from "./pages/BillsHomePage";
import Login from "./components/login/Login";
import Dashboard from "./components/admin/Dashboard";
import Purchases from "./components/admin/Purchases";
import Prescription from "./components/admin/Prescription";
import PharmasistPrescription from "./components/pharmasist/PharmasistPrescription";
import React, { useState, useEffect } from "react";
import Stock from "./components/pharmasist/Stock";
import Medicines from "./components/admin/Medicines";
import AdminPharmasist from "./components/admin/AdminPharmasist";
import PharmacyProducts from "./components/products/PharmacyProducts";
import Manufactures from "./components/manufactures/Manufactures";
function App() {
  const [token, setToken] = React.useState("");
  const [user, setUser] = React.useState("");
  const [role, setRole] = React.useState("");

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    const userParse = JSON.parse(user);
    setToken(token);
    setRole(userParse?.role);
    setUser(user);
    console.log("user rolw", userParse?.role, token, user);
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          {role && role === "admin"
            ? adminRoutes()
            : role && role === "pharmasist"
            ? pharmasistRoutes()
            : customerRoutes()}
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

export const adminRoutes = () => {
  return (
    <>
      <Route path="/" element={<Homepage />} />
      <Route path="/adminPharmasist" element={<AdminPharmasist />} />
      <Route path="/products" element={<PharmacyProducts />} />
      <Route path="/medicines" element={<Medicines />} />
      <Route path="/manufactures" element={<Manufactures />} />
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
      <Route path="/" element={<Homepage />} />
      <Route path="/bills" element={<BillsHomePage />} />
    </>
  );
};
