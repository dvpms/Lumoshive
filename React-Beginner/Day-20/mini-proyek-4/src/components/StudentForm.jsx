import React from "react";

export default function StudentForm({
  toggleModal,
  student,
  onChange,
  onSubmit,
  isEdit,
}) {
  const {
    name,
    class: className,
    year,
    nim,
    guardian_name: guardianName,
    birthDate,
    address,
    gender,
  } = student;

  return (
    <div className="modal-overlay">
      <div class="modal-content overflow-y-scroll rounded">
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
                value={name}
                id="name"
                className="form-control"
                required
              />
              <div className="invalid-feedback">
                Please enter your student name
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="className" className="form-label">
                Class
              </label>
              <select
                class="form-select"
                aria-label="Default select example"
                name="class"
                id="className"
                onChange={onChange}
                required
              >
                <option selected value="">
                  Pilih Kelas
                </option>
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
                value={year}
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
                value={nim}
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
                value={guardianName}
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
                value={birthDate}
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
                value={address}
                className="form-control"
                rows="3"
                required
              ></textarea>
              <div className="invalid-feedback">Please enter your address</div>
            </div>

            <div className="mb-3">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="male"
                  id="male"
                  onChange={onChange}
                  value="male"
                />
                <label class="form-check-label" for="male">
                  Male
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="female"
                  id="female"
                  onChange={onChange}
                  value="female"
                />
                <label class="form-check-label" for="female">
                  Female
                </label>
              </div>
            </div>
          </form>
        </div>
      <div className="modal-footer">
        {isEdit ? (
          <button
            onClick={() => {
              onSubmit();
              toggleModal(false);
            }}
            type="button"
            className="btn btn-warning"
          >
            <i className="bi bi-pencil-square" /> Update
          </button>
        ) : (
          <button onClick={onSubmit} type="button" className="btn btn-primary">
            <i className="bi bi-save" /> Submit
          </button>
        )}
      </div>
      </div>
    </div>
  );
}
