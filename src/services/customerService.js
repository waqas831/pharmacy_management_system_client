import axios from "axios";

const API_URL = "http://localhost:8080/api/customers";
export const getCustomers = () => {
  try {
    return axios.get(API_URL);
  } catch (error) {
    console.log(error);
  }
};

export const addCustomer = (data) => {
  try {
    return axios.post(API_URL, data);
  } catch (error) {
    console.log(error);
  }
};

export const deleteCustomer = (id) => {
  try {
    return axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.log(error);
  }
}

export const editCustomer = (id, data) => {
  console.log("editCustomer", id, data);
  try {
    return axios.put(`${API_URL}/${id}`, data);
  } catch (error) {
    console.log(error);
  }
}
