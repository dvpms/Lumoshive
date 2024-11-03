import React from "react";

export default function StudentDetail({toggleModalDetail, student}){
    return(
        <div className="modal-overlay">
            <div class="modal-content">
                <div class="modal-header"> 
                    <h5 class="modal-title">Student Detail</h5>
                    <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={toggleModalDetail}
                    ></button>
                </div>
                <div className="modal-body">
                <p>
                    <strong>Name: </strong> {student.name}
                </p>
                <p>
                    <strong>Class: </strong> {student.class}
                </p>
                <p>
                    <strong>NIM: </strong> {student.nim}
                </p>
                <p>
                    <strong>Gender: </strong> {student.gender}
                </p>
                <p>
                    <strong>Year: </strong> {student.year}
                </p>
                <p>
                    <strong>Guardian Name: </strong> {student.guardian_name}
                </p>
                <p>
                    <strong>Birth Date: </strong> {student.birthDate}
                </p>
                <p>
                    <strong>Address:  </strong> {student.address}
                </p>
                </div>
            </div>
      </div>
    );
}