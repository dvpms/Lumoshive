import React from "react";

export default function StudentForm({
  toggleModal,
  students,
  onChange,
  onSubmit,
  onUpdate,
  isUpdate,
  error,
}) {
  return (
    <div className="modal-overlay">
      <div className="modal-content overflow-y-scroll rounded">
        <div className="modal-header">
          <h5 className="modal-title">
            {isUpdate ? "Edit Student" : "Form New Student"}
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={() => {
              toggleModal(isUpdate);
            }}
          ></button>
        </div>
        <div className="modal-body">
          {error && (
            <div class="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Student Name
              </label>
              <input
                type="text"
                name="name"
                onChange={onChange}
                value={students.name}
                id="name"
                className="form-control"
                required
              />
              <div className="invalid-feedback">
                Please enter your student name
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="class" className="form-label">
                Class
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="class"
                id="class"
                onChange={onChange}
                value={students.class}
                required
              >
                <option selected>Pilih Kelas</option>
                <option value="Informatika">Informatika</option>
                <option value="Akuntansi">Akuntansi</option>
                <option value="Manajemen">Manajemen</option>
              </select>
              <div className="invalid-feedback">Please select your class</div>
            </div>
            <div className="mb-3">
              <label htmlFor="year" className="form-label">
                Year
              </label>
              <input
                type="number"
                name="year"
                id="year"
                min="2000"
                max="2024"
                onChange={onChange}
                value={students.year}
                className="form-control"
                required
              />
              <div className="invalid-feedback">Please enter your year</div>
            </div>
            <div className="mb-3">
              <label htmlFor="nim" className="form-label">
                NIM
              </label>
              <input
                type="text"
                name="nim"
                id="nim"
                onChange={onChange}
                value={students.nim}
                className="form-control"
                required
              />
              <div className="invalid-feedback">Please enter your NIM</div>
            </div>
            <div className="mb-3">
              <label htmlFor="guardianName" className="form-label">
                Guardian Name
              </label>
              <input
                type="text"
                name="guardian_name"
                id="guardianName"
                onChange={onChange}
                value={students.guardian_name}
                className="form-control"
                required
              />
              <div className="invalid-feedback">
                Please enter your guardian name
              </div>
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
                value={students.birthDate}
                className="form-control"
                required
              />
              <div className="invalid-feedback">
                Please enter your birth date
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <textarea
                name="address"
                id="address"
                onChange={onChange}
                value={students.address}
                className="form-control"
                rows="3"
                required
              ></textarea>
              <div className="invalid-feedback">Please enter your address</div>
            </div>

            <div className="mb-3">
              <div className="gender">
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  onChange={onChange}
                  checked={students.gender === "male"}
                />
                <label htmlFor="male">Laki-laki</label>
                <br />
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  onChange={onChange}
                  checked={students.gender === "female"}
                />
                <label htmlFor="female">Perempuan</label>
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          {isUpdate ? (
            <button
              onClick={() => {
                onUpdate(students.id);
                toggleModal(false);
              }}
              type="button"
              className="btn btn-warning"
            >
              <i className="bi bi-pencil-square" /> Update
            </button>
          ) : (
            <button
              onClick={onSubmit}
              type="button"
              className="btn btn-primary"
            >
              <i className="bi bi-save" /> Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
