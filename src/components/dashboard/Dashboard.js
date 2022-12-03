import React, { useEffect, useState } from "react";
import TopBanner from "./topbanner";
import "../../index.css";
import OutOfStockProducts from "./middle-section/out-of-stock-products";
import ProductsOnLowStock from "./middle-section/products-on-low-stock";
import ProductsToBeArrived from "./middle-section/products-to-be-arrived";
import StockPercentage from "./graphs/stock-percentage";
import WeightedScore from "./graphs/weighted-score";
import {
  lowStockProducts,
  outofStockProducts,
  expireProducts,
} from "../../services/addProductService";
import SideBar from "../Sidebar/SideBar";
const Dashboard = () => {
  const [lowStock, setLowStock] = useState(0);
  const [outOfStock, setOutOfStock] = useState(0);
  const [toBeArrived, setToBeArrived] = useState(0);

  useEffect(() => {
    lowStockProducts().then((res) => {
      console.log(res.data);
      setLowStock(res.data.length);
    });
    outofStockProducts().then((res) => {
      console.log(res.data);
      setOutOfStock(res.data.length);
    });
    expireProducts().then((res) => {
      console.log(res.data);
      setToBeArrived(res.data.length);
    });
  }, []);

  return (
    <>
      <div style={{ display: "flex" }}>
        <SideBar />
        <div className="flex h-9/10">
          <div className="mt-auto lg:w-4/5 w-full p-3 bg-gray-50 lg:ml-auto">
            <TopBanner />
            <div className="md:flex-row flex-col flex gap-4 items-stretch justify-between my-3">
              <OutOfStockProducts amt={outOfStock} />
              <ProductsOnLowStock amt={lowStock} />
              <ProductsToBeArrived amt={toBeArrived} />
            </div>
            <div className="md:flex-row flex-col flex">
              <WeightedScore
                lowStock={(lowStock / (lowStock + outOfStock)) * 100}
                outOfStock={(outOfStock / (lowStock + outOfStock)) * 100}
                arrivingStock={
                  100 -
                  (lowStock / (lowStock + outOfStock)) * 100 -
                  (outOfStock / (lowStock + outOfStock)) * 100
                }
              />
              <StockPercentage percentage={0.5} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
