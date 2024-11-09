import React, { useContext } from "react";
import toga from "../assets/toga.png";
import { LanguageContext } from "../containers/StudentContainer";

export default function Navbar({ toggleModalForm }) {
  const { language, changeLanguage } = useContext(LanguageContext);

  const handleLanguageChange = () => {
    const newLanguage = language === "id" ? "en" : "id";
    changeLanguage(newLanguage);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-primary">
      <div className="container-fluid d-flex ">
        <h1 className="navbar-brand me-auto" href="#">
          <strong>{language === "id" ? "Siswa" : "Student"}</strong>
          <img src={toga} alt="" className="toga-icon" />
        </h1>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent d-flex justify-content-center "
        >
          <div className="navbar-nav ms-auto mb-lg-0">
            {/* <!-- Button trigger modal --> */}
            <button
              type="button"
              className="btn btn-primary me-3"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={() => toggleModalForm()}
            >
              <i className="bi bi-plus-square"></i> {language === "id" ? "  Tambah" : "Add"}
            </button>
            <button
              type="button"
              className="btn btn-primary me-3"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={handleLanguageChange}
            >
              <i class="bi bi-globe-americas"></i>
              {language === "id" ? " ID" : " EN"}
            </button>
          </div>
          <form className="d-flex" role="search">
            <button
              className="btn btn-search position-absolute end-0 me-3"
              type="submit"
            >
              <i className="bi bi-search"></i>
            </button>
            <input
              className="form-control me-2"
              type="search"
              placeholder={language === "id" ? "Cari..." : "Search..."}
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
}
