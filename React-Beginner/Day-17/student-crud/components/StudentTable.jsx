import React from "react";

export default function StudentTable() {
  return (
    <div className="table-responsive">
      <table className="table caption-top table-bordered table-hover">
        <caption className="text-center">List of Students</caption>
        <thead>
          <tr>
            <th scope="col" className="px-3" colSpan="4">
              <button className="btn btn-primary float-end fw-bold">
                <i className="bi bi-plus-circle"></i> Add New
              </button>
            </th>
          </tr>
          <tr className="text-center">
            <th scope="col">NO</th>
            <th scope="col">Name</th>
            <th scope="col">NIM</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className="text-center">1</th>
            <td>Devran</td>
            <td>2121161</td>
            <td>
              <button className="btn btn-sm btn-outline-danger me-2 float-end">
                <i className="bi bi-trash"></i>
              </button>
              <button className="btn btn-sm btn-outline-warning me-2">
                <i className="bi bi-pencil-square"></i>
              </button>
              <button className="btn btn-sm btn-outline-primary me-2">
                <i className="bi bi-info-circle"></i>
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Devran</td>
            <td>2121161</td>
            <td>
              <button className="btn btn-sm btn-outline-danger me-2 float-end">
                <i className="bi bi-trash"></i>
              </button>
              <button className="btn btn-sm btn-outline-warning me-2">
                <i className="bi bi-pencil-square"></i>
              </button>
              <button className="btn btn-sm btn-outline-primary me-2">
                <i className="bi bi-info-circle"></i>
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Devran</td>
            <td>2121161</td>
            <td>
              <button className="btn btn-sm btn-outline-danger me-2 float-end">
                <i className="bi bi-trash"></i>
              </button>
              <button className="btn btn-sm btn-outline-warning me-2">
                <i className="bi bi-pencil-square"></i>
              </button>
              <button className="btn btn-sm btn-outline-primary me-2">
                <i className="bi bi-info-circle"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
