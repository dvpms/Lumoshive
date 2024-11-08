import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import ActivityDetail from "./pages/ActivityDetail";
import fetchData from "./hooks/fetchData";
import Swal from "sweetalert2";

export const DataContext = createContext();

const App = () => {
  const { data, loading, error, getData, deleteData, addData } = fetchData(
    "http://localhost:3000/activities"
  );


  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = async (title, description) => {
    try {
      addData(title, description);
      getData();

      await Swal.fire({
        title: "Success!",
        text: "Activity added successfully!",
        icon: "success",
      });
    } catch (error) {
      console.error("Error adding activity:", error);
      Swal.fire({
        title: "Error!",
        text: "There was an error adding the activity.",
        icon: "error",
      });
    }
  };

  const handleDelete = async (id) => {
    try {
      deleteData(id);
      await Swal.fire({
        title: "Success!",
        text: "Activity deleted successfully!",
        icon: "success",
      });
      getData();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <Home handleDelete={handleDelete} handleSubmit={handleSubmit} />
            }
          />
          <Route
            path="/activity/:id"
            element={<ActivityDetail data={data} />}
          />
        </Routes>
      </div>
    </DataContext.Provider>
  );
};

export default App;

