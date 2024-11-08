import React, { useState } from "react";
import ActivityForm from "../components/ActivityForm";
import ActivityList from "../components/ActivityList";

const Home = ({handleDelete, handleSubmit}) => {
  const [showModal, setShowModal] = useState(false); // State untuk mengontrol modal

  return (
    <div>
      <h1 className="my-4">Daily Activity Manager</h1>
      <button
        className="btn btn-primary mb-3"
        onClick={() => setShowModal(true)}
      >
        Add Activity
      </button>
      <ActivityList handleDelete={handleDelete}/>
      <ActivityForm showModal={showModal} setShowModal={setShowModal} handleSubmit={handleSubmit} />
    </div>
  );
};

export default Home;
