import React, { useState, useEffect } from "react";
import axios from "axios";

export default function fetchData(url) {
  const [data, setData] = useState([]); // Inisialisasi data sebagai array kosong
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

   const getData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/activities");
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const addData = async (title, description) => {
    try {
      const res = await axios.post("http://localhost:3000/activities", {
        title,
        description,
      });
      return res.data;
    } catch (err) {
      console.log("Error:", err);
    }
  };

  const deleteData = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/activities/${id}`);
    } catch (err) {
      console.log("Error:", err);
    }

    getData();
  };

  return { data, loading, error, deleteData, getData, addData };
}
