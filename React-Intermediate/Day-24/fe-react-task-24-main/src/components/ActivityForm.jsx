import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios"; // Pastikan Anda mengimpor axios
import Swal from "sweetalert2"; // Pastikan Anda mengimpor Swal

const ActivityForm = ({ showModal, setShowModal,handleSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  const handleForm = async (e) => {
    e.preventDefault();
    try {
      handleSubmit(title, description);
      handleClose();
      
    } catch (error) {
      console.error(error);
    }
  };

  const handleClose = () => {
    setShowModal(false);
    setTitle("");
    setDescription("");
  };

  return (
    <Modal show={showModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Activity</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleForm}> {/* Pastikan untuk menambahkan onSubmit di sini */}
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required // Tambahkan required jika ingin membuat field ini wajib
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required // Tambahkan required jika ingin membuat field ini wajib
            ></textarea>
          </div>
          <Button variant="primary" type="submit"> {/* Ganti onClick menjadi type="submit" */}
            Add
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ActivityForm;
