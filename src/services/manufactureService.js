import axios from "axios";

const API_URL = "http://localhost:8080/api/manufacture";
export const getManufacture = () => {
  try {
    return axios.get(API_URL);
  } catch (error) {
    console.log('error',error);
  }
};


export const addManufacture = (data) => {
  try {
    return axios.post(API_URL, data);
  } catch (error) {
    console.log('error',error);
  }
};