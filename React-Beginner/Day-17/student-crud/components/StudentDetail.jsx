import React from "react";

export default function StudentDetail({toggleModal, student}){
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
                    onClick={toggleModal}
                    ></button>
                </div>
                <div className="modal-body">
                <p>
                    <strong>Name: </strong> {student.name}
                </p>
                <p>
                    <strong>NIM: </strong> {student.nim}
                </p>
                <p>
                    <strong>Address:  </strong> {student.address}
                </p>
                <p>
                    <strong>Guardian Name: </strong> {student.guardian}
                </p>
                </div>
            </div>
      </div>
    );
}