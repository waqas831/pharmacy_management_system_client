import axios from "axios";

const API_URL = "http://localhost:8080/api/pharmasist";
export const getPharmasist = () => {
  try {
    return axios.get(API_URL);
  } catch (error) {
    console.log(error);
  }
};

export const addPharmasist = (data) => {
  try {
    return axios.post(API_URL, data);
  } catch (error) {
    console.log(error);
  }
};

export const deletePharmasist = (id) => {
  try {
    return axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const editPharmasist = (id, data) => {
  console.log("editCustomer", id, data);
  try {
    return axios.put(`${API_URL}/${id}`, data);
  } catch (error) {
    console.log(error);
  }
};
