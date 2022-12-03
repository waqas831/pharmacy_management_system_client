import { addCategories } from "../../services/categoryService";
import React, { useState } from "react";
import axios from "axios";
import SideBar from "../Sidebar/SideBar";
const AddCatagory = () => {
  const [catagory, setCatagory] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(catagory);
    const data = {
      name: catagory,
    };
    addCategories(data).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <div style={{ display: "flex", width: "100%" }}>
        <SideBar />
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "100%",
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "blue",
            }}
          >
            <span
              style={{
                textAlign: "center",
                color: "blue",
                marginTop: "5px",
                marginBottom: "5px",
              }}
              className="badge badge-secondary"
            >
              Add Category
            </span>
          </h2>
          <form
            onSubmit={handleSubmit}
            style={{ width: "100%", margin: "auto", marginTop: "5px" }}
          >
            <div className="form-row flex m-2">
              <div className="form-group col-md-6 ml-1 mr-1">
                <label htmlFor="name">Category Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  onChange={(e) => setCatagory(e.target.value)}
                  value={catagory}
                  placeholder="Enter Category Name"
                />
              </div>
            </div>
            {/* add submit button */}
            <button
              type="submit"
              className="btn btn-primary"
              style={{ marginLeft: "10px" }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCatagory;
