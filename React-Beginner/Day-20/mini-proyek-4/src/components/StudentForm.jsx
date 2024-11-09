import React, { useContext } from "react";
import { LanguageContext } from "../containers/StudentContainer";

export default function StudentForm({
  toggleModalForm,
  students,
  onChange,
  handleAddStudent,
  onUpdate,
  isUpdate,
  error,
}) {
  const { language } = useContext(LanguageContext);
  return (
    <div className="modal-overlay">
      <div className="modal-content overflow-y-scroll rounded">
        <div className="modal-header">
          <h5 className="modal-title">
            {language === "id"
              ? isUpdate
                ? "Form Edit Siswa"
                : "Form Tambah Siswa"
              : isUpdate
              ? "Form Edit Student"
              : "Form Add Student"}
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={() => {
              toggleModalForm(isUpdate);
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
                {language === "id" ? "Nama Siswa" : "Student Name"}
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
                {language === "id"
                  ? "Mohon masukkan nama Anda"
                  : "Please enter your name"}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="class" className="form-label">
                {language === "id" ? "Kelas" : "Class"}
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
                <option selected>
                  {language === "id"
                    ? "Pilih Kelas"
                    : "Please enter your class"}
                </option>
                <option value="Informatika">
                  {language === "id" ? "Informatika" : "Informatics"}
                </option>
                <option value="Akuntansi">
                  {language === "id" ? "Akuntansi" : "Accounting"}
                </option>
                <option value="Manajemen">
                  {language === "id" ? "Manajemen" : "Management"}
                </option>
              </select>
              <div className="invalid-feedback">
                {language === "id"
                  ? "Mohon pilih kelas Anda"
                  : "Please select your class"}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="year" className="form-label">
                {language === "id" ? "Tahun" : "Year"}
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
              <div className="invalid-feedback">
                {language === "id"
                  ? "Mohon masukkan tahun Anda"
                  : "Please enter your year"}
              </div>
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
                maxLength={9}
              />
              <div className="invalid-feedback">
                {language === "id"
                  ? "Mohon masukkan NIM Anda"
                  : "Please enter your NIM"}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="guardianName" className="form-label">
                {language === "id" ? "Nama Wali" : "Guardian Name"}
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
                {language === "id"
                  ? "Mohon masukkan nama wali Anda"
                  : "Please enter your guardian name"}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="birthDate" className="form-label">
                {language === "id" ? "Tanggal Lahir" : "Birth Date"}
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
                {language === "id"
                  ? "Mohon masukkan tanggal lahir Anda"
                  : "Please enter your birth date"}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                {language === "id" ? "Alamat" : "Address"}
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
              <div className="invalid-feedback">
                {language === "id"
                  ? "Mohon masukkan alamat Anda"
                  : "Please enter your address"}
              </div>
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
                <label htmlFor="male">
                  {language === "id" ? "Laki-laki" : "Male"}
                </label>
                <br />
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  onChange={onChange}
                  checked={students.gender === "female"}
                />
                <label htmlFor="female">
                  {language === "id" ? "Perempuan" : "Female"}{" "}
                </label>
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          {isUpdate ? (
            <button
              onClick={() => {
                onUpdate(students.id);
                toggleModalForm(false);
              }}
              type="button"
              className="btn btn-warning"
            >
              <i className="bi bi-pencil-square" />{" "}
              {language === "id" ? "Perbarui" : "Update"}
            </button>
          ) : (
            <button
              onClick={(e) => {
                handleAddStudent(e);
                toggleModalForm(false);
              }}
              type="button"
              className="btn btn-primary"
            >
              <i className="bi bi-save" />{" "}
              {language === "id" ? "Kirim" : "Submit"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
