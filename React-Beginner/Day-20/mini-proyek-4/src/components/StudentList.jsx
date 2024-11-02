import React from "react";
import Male from "../assets/male.png";
import Female from "../assets/female.png";


export default function StudentTable({ students }) {
  return (
    <>
      {students.map((student, index) => (
        <div class="card-profile student-list" key={index}>
          <div className="header-profile">
            <div className="profile-img">
              {student.gender === "male" ? (
                <img src={Male} alt="" />
                
              ): (
                <img src={Female} alt="" />
              )}
            </div>
            <div className="title-profile">
              <p className="fs-6">{student.name}</p>
              <p className="fs-6">{student.nim}</p>
              <p className="fs-6">{student.class}</p>
            </div>
          </div>
          <div className="button-profile">
            <div className="">
              <button className="btn btn-primary shadow">
                <i className="bi bi-info-circle"></i> Detail
              </button>
            </div>
            <div className="">
              <button className="btn btn-danger shadow">
                <i className="bi bi-trash"></i>Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
