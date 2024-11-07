import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios"; // Pastikan Anda mengimpor axios
import Swal from "sweetalert2"; // Pastikan Anda mengimpor Swal

const ActivityForm = ({ showModal, setShowModal }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Mencegah perilaku default form

    try {
      // Lakukan POST request ke API
      const response = await axios.post("http://localhost:3000/activities", {
        title,
        description,
      });

      // Tampilkan SweetAlert dengan informasi sukses
      await Swal.fire({
        title: "Success!",
        text: "Activity added successfully!",
        icon: "success",
      });

      // Tutup modal dan reset form setelah berhasil menambah aktivitas
      handleClose();
    } catch (error) {
      console.error("Error adding activity:", error);
      // Tampilkan SweetAlert dengan informasi kesalahan
      Swal.fire({
        title: "Error!",
        text: "There was an error adding the activity.",
        icon: "error",
      });
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
        <form onSubmit={handleSubmit}> {/* Pastikan untuk menambahkan onSubmit di sini */}
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
