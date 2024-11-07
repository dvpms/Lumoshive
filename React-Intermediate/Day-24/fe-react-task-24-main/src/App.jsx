import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import ActivityDetail from "./pages/ActivityDetail";

export const DataContext = createContext();

const App = () => {
  const [data, setData] = useState([]); // Inisialisasi data sebagai array kosong
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
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

  const handleDelete = async (id) => {
    const res = await axios
      .delete(`http://localhost:3000/activities/${id}`)
      .then((res) => {
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      <div className="container">
        <Routes>
            <Route path="/" element={<Home handleDelete={handleDelete} />} />
            <Route path="/:id" element={<ActivityDetail data={data}/>} />
        </Routes>
      </div>
    </DataContext.Provider>
  );
};

export default App;