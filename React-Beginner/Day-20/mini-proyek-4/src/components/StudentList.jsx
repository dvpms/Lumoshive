import React from "react";
import Male from "../assets/male.png";
import Female from "../assets/female.png";


export default function StudentList({ students, onDelete, onDetail, handleEdit }) {
  return (
    <>
      {students.map((student) => (
        <div class="card-profile student-list" key={student.id}>
          <div className="header-profile">
            <div className="profile-img">
              {student.gender === "male" ? (
                <img src={Male} alt="" />
                
              ): (
                <img src={Female} alt="" />
              )}
            </div>
            <div className="title-profile">
              <p className="fs-6">{student.name.split(" ")[0]}</p>
              <p className="fs-6">{student.nim}</p>
              <p className="fs-6">{student.class}</p>
            </div>
          </div>
          <div className="button-profile">
            <div className="">
              <button className="btn btn-primary shadow" onClick={() => onDetail(student.id)}>
                <i className="bi bi-info-circle"></i>
              </button>
            </div>
            <div className="">
              <button className="btn btn-danger shadow" onClick={() => onDelete(student.id)}>
                <i className="bi bi-trash"></i>
              </button>
            </div>
            <div className="">
              <button className="btn btn-warning shadow" onClick={() => handleEdit(student.id)}>
                <i className="bi bi-pencil"></i>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
