import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const login = async (data) => {
  const res = await axios.post(`${API_URL}/login`, data, {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "RJS1-202404",
    }, 
  });
  return res.data;
};
export const register = async (data) => {
  const res = await axios.post(`${API_URL}/register`, data, {
    headers: { 
        "Content-Type": "application/json",
        "x-api-key": "RJS1-202404",
      },
  });
  return res.data;
};
