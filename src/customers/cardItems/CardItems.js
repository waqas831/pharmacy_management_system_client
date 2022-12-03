import React from "react";
import SideBar from "../../components/Sidebar/SideBar";

const CardItems = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <SideBar />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <h1
            style={{
              color: "red",
              fontSize: "50px",
              fontWeight: "bold",
            }}
          >
            Card Items
          </h1>
          
        </div>
      </div>
    </>
  );
};

export default CardItems;
