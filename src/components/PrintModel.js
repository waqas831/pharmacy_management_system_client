import { getBill } from "../services/billService";
import React, { useState, useEffect } from "react";
const PrintModel = ({ billId }) => {
  const [saleRecord, setSaleRecord] = useState();
  const printModelPage = () => {
    console.log("print clicked");
    window.print();
  };
  useEffect(() => {
    const getBillData = async () => {
      const mydata = await getBill(billId);
      setSaleRecord(mydata.data);
      console.log("mydata", mydata.data);
    };
    getBillData();
  }, []);
  return (
    <div
      style={{
        position: "relative",
        width: "50%",
        height: "80%",
        Zindex: "1",
        background: "red",
        border: "2px solid red",
        backgroundColor: "black",
        bottom: "10%",
        opacity: 1,
        left: "35%",
      }}
    >
      <div>
        <h1>Print Model</h1>
        <h1>Print Model</h1>
        <h1>Print Model</h1>
        <h1>Print Model</h1>
        <h1>Print Model</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <button style={{ cursor: "pointer" }} onClick={printModelPage}>
          Print
        </button>
      </div>
    </div>
  );
};

export default PrintModel;
