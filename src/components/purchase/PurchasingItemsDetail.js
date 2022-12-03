import React from "react";
const PurchasingItemsDetail = ({ sellProducts, setSellProducts }) => {
  return (
    <>
      <tbody>
        {sellProducts?.map((item) => {
          return (
            <tr>
              <td>{item?.name}</td>
              <td>{item?.price}</td>
              <td>
                <button
                  style={{
                    cursor: "pointer",
                    backgroundColor: "black",
                    border: "none",
                    color: "white",
                    padding: "5px 10px",
                    textAlign: "center",
                    textDecoration: "none",
                    display: "inline-block",
                    fontSize: "16px",
                    margin: "4px 2px",
                  }}
                  className="btn btn-primary"
                  onClick={() => {
                    sellProducts.map((data) => {
                      if (data._id == item._id) {
                        data.quantity += 1;
                      }
                    });
                  }}
                >
                  +
                </button>
                <span>{item.quantity}</span>
                <button
                  className="btn btn-primary"
                  style={{
                    cursor: "pointer",
                    backgroundColor: "black",
                    border: "none",
                    color: "white",
                    padding: "5px 10px",
                    textAlign: "center",
                    textDecoration: "none",
                    display: "inline-block",
                    fontSize: "16px",
                    margin: "4px 2px",
                  }}
                  onClick={() => {
                    sellProducts.map((data) => {
                      if (data._id == item._id) {
                        data.quantity -= 1;
                      }
                    });
                  }}
                >
                  -
                </button>
              </td>
              <td>{item?.price * item.quantity}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    setSellProducts(
                      sellProducts.filter((data) => data._id !== item._id)
                    );
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </>
  );
};

export default PurchasingItemsDetail;
