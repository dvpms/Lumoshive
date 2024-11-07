import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import Home from "./pages/Home";
import ActivityDetail from "./pages/ActivityDetail";
import fetchData from "./hooks/fetchData";

export const DataContext = createContext();

const App = () => {
    const [data, setData] = useState([]); // Inisialisasi data sebagai array kosong
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/activities");
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    return (
        <DataContext.Provider value={{ data, loading, error }}>
            <div className="container">
                <Home />
                <ActivityDetail />
            </div>
        </DataContext.Provider>
    );
};

export default App;
