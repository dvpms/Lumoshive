import React, { useState, useEffect } from "react";
import axios from "axios";

// const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//     const response = await axios.get("http://localhost:3000/posts");
//     const result = await response.data;
//     setData(result);
//     console.log(result);
//     setLoading(false);

//   }

    //       setLoading(true);
//       const res = await axios.get("http://localhost:3000/posts");
//       try {
//         console.log(res.data);
//       } catch (error) {
//         setError(error);
//         console.log("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
    // };
    

//     fetchData();
//   },);

//   return { data, loading, error };
// };


function useFetch(url) {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    async function fetchData() {

      const response = await fetch(url);

      const result = await response.json();

      setData(result);
      console.log(result);

      setLoading(false);

    }

    fetchData();

  }, [url]);

  return { data, loading,error };

}

export default useFetch;