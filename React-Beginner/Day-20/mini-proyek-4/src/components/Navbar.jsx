import React from "react";
import toga from "../assets/toga.png";

export default function Navbar({ toggleModalForm }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-primary">
      <div className="container-fluid d-flex ">
        <h2 className="navbar-brand me-auto" href="#">
          <strong>Students</strong>
          {/* <img src={toga} alt="" classNameName="toga-icon"/> */}
        </h2>
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
              onClick={() => toggleModalForm(false)}
            >
              <i className="bi bi-plus-square"></i> Add
            </button>
          </div>
          <form className="d-flex" role="search">
            <button className="btn btn-search position-absolute end-0 me-3" type="submit">
              <i className="bi bi-search"></i>
            </button>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
}
