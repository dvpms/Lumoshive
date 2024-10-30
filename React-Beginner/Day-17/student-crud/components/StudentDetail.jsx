import React from "react";

export default function StudentDetail({toggleModal}){
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
                    <strong>Name: </strong> Devran Perdana Malik
                </p>
                <p>
                    <strong>NIM: </strong> 
                </p>
                <p>
                    <strong>Address:  </strong> Jl Sudirman
                </p>
                <p>
                    <strong>Guardian Name: </strong> Siti
                </p>
                </div>
            </div>
      </div>
    );
}