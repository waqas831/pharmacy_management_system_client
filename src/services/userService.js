import axios from "axios";

const API_URL = "http://localhost:8080/api/users/login";
export const getUserLogin = (email,password) => {
  try {
    return axios.post(API_URL,{email,password});
  } catch (error) {
    console.log(error);
  }
};
