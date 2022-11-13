import React, { useState, useEffect } from "react";
import DefaultLayout from "../DefaultLayout";
import AddProducts from "./AddProducts";
import { getSupplier } from "../../services/supplierService";
import { getManufacture } from "./../../services/manufactureService";

const PharmacyProducts = () => {
  const [supplier, setSupplier] = useState([]);
  const [manufacture, setManufacture] = useState([]);

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

  useEffect(() => {
    manufactureCall();
    customersCallAndMarchant();
  }, []);
  return (
    <>
      <DefaultLayout>
        <AddProducts supplier={supplier} manufacture={manufacture} />
      </DefaultLayout>
    </>
  );
};

export default PharmacyProducts;
