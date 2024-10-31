import React from "react";

export default function StudentForm({
  toggleModal,
  student,
  onChange,
  onSubmit,
  isEdit,
}) {
  return (
    <div className="modal-overlay">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            {isEdit ? "Edit Student" : "Form New Student"}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={() => toggleModal(isEdit)}
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
                onChange={onChange}
                value={student.name}
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
                onChange={onChange}
                inputMode="numeric"
                value={student.nim}
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
                onChange={onChange}
                value={student.birthDate}
                min="0"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <textarea
                name="address"
                onChange={onChange}
                id="address"
                value={student.address}
                className="form-control"
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="guardian" className="form-label">
                Guardian Name
              </label>
              <input
                type="text"
                name="guardian"
                onChange={onChange}
                id="guardian"
                value={student.guardian}
                min="0"
                className="form-control"
              />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          {isEdit ? (
            <button type="button" class="btn btn-warning" onClick={onSubmit}>
              <i className="bi bi-pencil-square" /> Update
            </button>
          ) : (
            <button onClick={onSubmit} type="button" class="btn btn-primary">
              <i className="bi bi-save" /> Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
