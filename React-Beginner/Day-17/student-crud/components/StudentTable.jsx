import React from "react";

export default function StudentTable({
  toggleModalForm,
  toggleModalDetail,
  handleEditStudent,
  handleDeleteStudent,
  students,
}) {
  return (
    <div className="table-responsive">
      <table className="table caption-top table-bordered table-hover">
        <caption className="text-center">List of Students</caption>
        <thead>
          <tr>
            <th scope="col" className="px-3" colSpan="4">
              <button
                onClick={() => toggleModalForm(false)}
                className="btn btn-primary float-end fw-bold"
              >
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
          {students.map((student, index) => {
            return (
              <tr key={index}>
                <th scope="row" className="text-center">
                  {index + 1}
                </th>
                <td>{student.name}</td>
                <td>{student.nim}</td>
                <td>
                  <button onClick={() => handleDeleteStudent(index)} className="btn btn-sm btn-outline-danger me-2 float-end">
                    <i className="bi bi-trash"></i>
                  </button>
                  <button
                    onClick={() => handleEditStudent(student, index)}
                    className="btn btn-sm btn-outline-warning me-2"
                  >
                    <i className="bi bi-pencil-square"></i>
                  </button>
                  <button
                    onClick={() => toggleModalDetail(student)}
                    className="btn btn-sm btn-outline-primary me-2"
                  >
                    <i className="bi bi-info-circle"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
