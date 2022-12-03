import React from "react";
import "../product.css";
import { useNavigate } from "react-router-dom";
const CustomerHeader = ({ cartCount }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          alignSelf: "center",
          backgroundColor: "#f5f5f5",
          padding: "10px",
          borderRadius: "5px",
          width: "1250px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div className="header__left">
            <h3>Medicine</h3>
          </div>
          <div className="header__right" onClick={()=>{
            navigate("/addtocard")
          }}>
            <h3>Cart</h3>
            <h5 className="card_counte">{cartCount}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerHeader;
