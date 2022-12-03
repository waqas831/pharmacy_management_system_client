import axios from "axios";

const API_URL = "http://localhost:8080/api/category";
export const getCategories = () => {
  try {
    return axios.get(API_URL);
  } catch (error) {
    console.log(error);
  }
};

export const addCategories = (data) => {
  try {
    return axios.post(API_URL, data);
  } catch (error) {
    console.log(error);
  }
};

export const deleteCategories = (id) => {
  try {
    return axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.log(error);
  }
}

export const editCategories = (id, data) => {
  console.log("editCustomer", id, data);
  try {
    return axios.put(`${API_URL}/${id}`, data);
  } catch (error) {
    console.log(error);
  }
}
