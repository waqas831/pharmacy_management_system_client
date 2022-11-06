import axios from "axios";

const API_URL = "http://localhost:8080/api/customers";
export const getCustomers = () => {
  try {
    return axios.get(API_URL);
  } catch (error) {
    console.log(error);
  }
};
