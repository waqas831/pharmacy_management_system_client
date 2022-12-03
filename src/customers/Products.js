import "./product.css";
import React from "react";
const Products = (props) => {
  
  const { products,cart,setCart,setCartCount } = props;

  const addToCart = (product) => {
    const isExist = cart.find((item) => item._id === product._id);
    if (isExist) {
      setCart(
        cart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setCartCount(cart.length);
  };

  return (
    <>
      <div className="product-wrapper">
        {products.map((product) => {
          return (
            <div className="product">
              <div className="product__image">
                <img
                  src={
                    "https://images.unsplash.com/photo-1610078270003-8b8b1b2b9b1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  }
                  alt=""
                />
              </div>
              <div className="product__info">
                <div className="product__info__name">
                  <h3>Name:</h3>
                  <h3>{product.name}</h3>
                </div>
                <div className="product__info__price">
                  <h3>Price:</h3>
                  <h3>{product.price}</h3>
                </div>
                <div className="product__info__button">
                  <button
                    onClick={() => {
                      addToCart(product);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
