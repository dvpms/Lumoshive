import React from "react";

export default function StudentForm({toggleModal}) {
  return (
    <div className="modal-overlay">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Form New Student</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={toggleModal}
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Student Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="nim" className="form-label">
                NIM
              </label>
              <input
                type="text"
                name="nim"
                id="nim"
                min="0"
                inputMode="numeric"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="birthDate" className="form-label">
                Birth Date
              </label>
              <input
                type="date"
                name="birthDate"
                id="birthDate"
                min="0"
                className="form-control"
              />
              </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <textarea name="address" id="address" className="form-control"></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="guardianName" className="form-label">
                Guardian Name
              </label>
              <input
                type="text"
                name="guardianName"
                id="guardianName"
                min="0"
                className="form-control"
              />
              </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary">
            <i className="bi bi-save" /> Submit
          </button>
        </div>
      </div>
    </div>
  );
}
