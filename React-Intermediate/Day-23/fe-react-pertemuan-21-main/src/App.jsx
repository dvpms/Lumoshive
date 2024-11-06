import React from "react";
import BlogList from "./pages/BlogList";
import { Routes, Route } from "react-router-dom";
import BlogDetail from "./pages/BlogDetail";
import Navbar from "./components/Navbar";
import useFetch  from "./utils/useFetch";

export default function App() {
  const { loading, data, error } = useFetch("http://localhost:3000/posts");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<BlogList posts={data}/>}  />
        <Route path="/post/:id" element={<BlogDetail posts={data} />} />
      </Routes>
    </>
  );
}
