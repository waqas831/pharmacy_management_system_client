import React, { useState, useEffect } from "react";
import SideBar from "../components/Sidebar/SideBar";
import CustomerHeader from "./header/CustomerHeader";
import Products from "./Products";
import Search from "./Search";
import { getProducts } from "../services/addProductService";

const CustomerHome = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);



  const removeFromCart = (product) => {
    const isExist = cart.find((item) => item._id === product._id);
    if (isExist.quantity === 1) {
      setCart(cart.filter((item) => item._id !== product._id));
    } else {
      setCart(
        cart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  const searchResultPass = () => {
    const result = searchResult.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
    setProducts(result);
  };


  const getProductsData = async () => {
    getProducts().then((res) => {
      setProducts(res.data);
      setSearchResult(res.data);
    });
  };

  useEffect(() => {
    getProductsData();
  }, []);

  useEffect(() => {
    searchResultPass();
  }, [search]);

  return (
    <>
      <div style={{ display: "flex" }}>
        <SideBar />
        <div>
          <CustomerHeader cartCount={cartCount} />
          <Search setSearch={setSearch} />
          <Products products={products} setCart={setCart} cart={cart} setCartCount={setCartCount} />
        </div>
      </div>
    </>
  );
};

export default CustomerHome;
