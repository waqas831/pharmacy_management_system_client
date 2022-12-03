import React, { Component } from "react";
import "../../../index.css";

class ProductsToBeArrived extends Component {
  render() {
    return (
      <div className="inline-flex flex-col space-y-3 items-center justify-center flex-1 bg-white border-2 rounded-2xl border-gray-300">
        <p className="text-xl font-bold text-gray-900">Expired products</p>
        <div className="inline-flex space-x-3 items-center justify-start">
          {/* <img src={TruckGreen} alt="#" /> */}
          <p className="text-3xl text-center text-gray-900">{this.props.amt}</p>
        </div>
      </div>
    );
  }
}

export default ProductsToBeArrived;
