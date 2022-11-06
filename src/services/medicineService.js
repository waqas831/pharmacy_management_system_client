import axios from "axios";

const API_URL = "http://localhost:8080/api/medicine";
export const getMedicines = () => {
  try {
    return axios.get(API_URL);
  } catch (error) {
    console.log(error);
  }
};