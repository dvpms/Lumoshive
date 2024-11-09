import axios from "axios";

const API_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = {
  "api-key": "akusianakgembala",
};

const useAPI = () => {
  const fetchStudents = async () => {
    const res = await axios.get(`${API_URL}/students`, {
      headers: API_KEY,
    });
    return res.data;
  };

  const addStudent = async (student) => {
    const res = await axios.post(`${API_URL}/students`, student, {
      headers: API_KEY,
    });
    return res.data;
  };

  const deleteStudent = async (id) => {
    const res = await axios.delete(`${API_URL}/students/${id}`, {
      headers: API_KEY,
    });
    return res.data;
  };

  const detailStudentAPI = async (id) => {
    const res = await axios.get(`${API_URL}/students/${id}`, {
      headers: API_KEY,
    });
    return res.data;
  };

  const updateStudent = async (id, student) => {
    const res = await axios.put(`${API_URL}/students/${id}`, student, {
      headers: API_KEY,
    });
    return res.data;
  };

  return {
    fetchStudents,
    addStudent,
    deleteStudent,
    detailStudentAPI,
    updateStudent,
  };
};

export default useAPI;