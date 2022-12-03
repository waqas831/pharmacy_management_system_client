import React, { useState, useEffect } from "react";
import DefaultLayout from "../DefaultLayout";
import SelectSearch from "react-select-search";
import {
  addProducts,
  getProducts,
  getSingleProduct,
  updateMultipleProducts,
} from "../../services//addProductService";
import { addSales } from "../../services/salesServcie";
import "react-select-search/style.css";
import PurchasingItemsDetail from "./PurchasingItemsDetail";
import PurchasingBillsPrice from "./PurchasingBillsPrice";
import SideBar from "../Sidebar/SideBar";
const Purchase = () => {
  const [products, setProducts] = useState([]);
  const [sellProducts, setSellProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const getProductsData = async () => {
    getProducts().then((res) => {
      setProducts(res.data);
    });
  };

  useEffect(() => {
    getProductsData();
  }, [sellProducts, products]);

  useEffect(() => {}, [products, sellProducts]);

  const getSingle = async (value) => {
    const res = await getSingleProduct(value);
    const data = res.data;
    setSellProducts([...sellProducts, { ...data, quantity }]);
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <SideBar />
        <div
          style={{
            width: "100%",
            height: "100vh",
            backgroundColor: "#F4F7FC",
          }}
        >
          <SelectSearch
            options={products.map((item) => {
              return { name: item.name, value: item._id };
            })}
            placeholder="Search"
            search
            name="_id"
            style={{ width: "50%", margin: "20px 10px 10px 20px" }}
            onChange={(value) => getSingle(value)}
          />

          <table
            className="table table-bordered"
            style={{
              width: "80%",
              margin: "20px 10px 0 20px",
              backgroundColor: "white",
            }}
          >
            <thead
              style={{
                backgroundColor: "#F4F7FC",
                color: "#000",
                fontSize: "14px",
              }}
            >
              <tr
                style={{
                  backgroundColor: "#F4F7FC",
                  color: "#000",
                  fontSize: "14px",
                  margin: "10px",
                }}
              >
                <th scope="col">Madicine Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Sub Total</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            <PurchasingItemsDetail
              sellProducts={sellProducts}
              setSellProducts={setSellProducts}
            />
          </table>
          <div
            style={{
              width: "80%",
              margin: "20px 10px 0 20px",
              backgroundColor: "white",
            }}
          >
            <PurchasingBillsPrice sellProducts={sellProducts} />
          </div>
          <div
            style={{
              width: "80%",
              margin: "20px 10px 0 20px",
              backgroundColor: "white",
            }}
          >
            <button
              onClick={() => {
                console.log(sellProducts);
                setSellProducts([]);
              }}
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "black",
                marginRight: "1rem",
                // make a button with border
                border: "1px solid black",
                padding: "0.5rem 1rem",
                borderRadius: "0.5rem",
                cursor: "pointer",
                backgroundColor: "white",
                outline: "none",
                marginTop: "1rem",
                marginLeft: "10rem",
              }}
            >
              Cancel
            </button>
            <button
              onClick={() => {
                console.log(sellProducts);
                updateMultipleProducts(sellProducts).then((res) => {
                  console.log("updated response of quantity", res);
                  addSales(sellProducts).then((res) => {
                    console.log("res of sales add", res);
                  });
                });
              }}
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "white",
                marginRight: "1rem",
                border: "1px solid black",
                padding: "0.5rem 1rem",
                borderRadius: "0.5rem",
                cursor: "pointer",
                backgroundColor: "black",
                outline: "none",
                marginTop: "1rem",
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Purchase;
