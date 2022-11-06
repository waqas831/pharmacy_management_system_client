import axios from "axios";
const API_URL = "http://localhost:8080/api/sales";
export const getBills = () => {
  try {
    return axios.get(API_URL);
  } catch (error) {
    console.log(error);
  }
};


export const getBill = (id) => {
  try {
    return axios.get(`${API_URL}/${id}`);
  } catch (error) {
    console.log(error);
  }
};
