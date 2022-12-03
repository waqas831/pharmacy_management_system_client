import axios from "axios";

const API_URL = "http://localhost:8080/api/products";
export const getProducts = () => {
  try {
    return axios.get(API_URL);
  } catch (error) {
    console.log(error);
  }
};

export const addProducts = (data) => {
  try {
    return axios.post(API_URL, data);
  } catch (error) {
    console.log(error);
  }
};

export const getSingleProduct = (id) => {
  try {
    return axios.get(`${API_URL}/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const lowStockProducts = () => {
  try {
    return axios.get(`${API_URL}/lowstock`);
  } catch (error) {
    console.log(error);
  }
};

export const outofStockProducts = () => {
  try {
    return axios.get(`${API_URL}/outofstock`);
  } catch (error) {
    console.log(error);
  }
};


export const expireProducts = () => {
  try {
    return axios.get(`${API_URL}/expire`);
  } catch (error) {
    console.log(error);
  }
};


export const updateMultipleProducts = (data) => {
  try {
    return axios.put(`${API_URL}/updateMultiple`, data);
  } catch (error) {
    console.log(error);
  }
}
