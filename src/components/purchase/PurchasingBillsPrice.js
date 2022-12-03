import React from "react";

const PurchasingBillsPrice = ({ sellProducts }) => {
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Total Bill</div>
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Item Name</th>
                    <th scope="col">Item Price</th>
                  </tr>
                </thead>
                <tbody>
                  {sellProducts?.map((item) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <p>{item?.name}</p>
                          </td>
                          <td>
                            <p>{item?.price * item.quantity}</p>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                  <tr>
                    <th scope="col">Total Iems</th>
                    <th scope="col">Total Bill</th>
                  </tr>
                  <tr>
                    <td>{sellProducts?.length}</td>
                    <td>
                      {sellProducts?.reduce((acc, item) => {
                        return acc + item.price * item.quantity;
                      }, 0)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PurchasingBillsPrice;
