import React,{useContext} from "react";
import { LanguageContext } from "../containers/StudentContainer";

export default function StudentDetail({toggleModalDetail, student}){
    const { language } = useContext(LanguageContext);
    return(
        <div className="modal-overlay">
            <div class="modal-content">
                <div class="modal-header"> 
                    <h5 class="modal-title">{language === "id" ? "Detail Siswa" : "Student Detail"}</h5>
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
                    <strong>{language === "id" ? "Nama: " : "Name: "} </strong> {student.name}
                </p>
                <p>
                    <strong>{language === "id" ? "Kelas: " : "Class: "} </strong> {student.class}
                </p>
                <p>
                    <strong>{language === "id" ? "NIM: " : "NIM: "} </strong> {student.nim}
                </p>
                <p>
                    <strong>{language === "id" ? "Jenis Kelamin: " : "Gender: "} </strong> {student.gender}
                </p>
                <p>
                    <strong>{language === "id" ? "Tahun: " : "Year: "} </strong> {student.year}
                </p>
                <p>
                    <strong>{language === "id" ? "Nama Wali: " : "Guardian Name: "} </strong> {student.guardian_name}
                </p>
                <p>
                    <strong>{language === "id" ? "Tanggal Lahir: " : "Birth Date: "} </strong> {student.birthDate}
                </p>
                <p>
                    <strong>{language === "id" ? "Alamat: " : "Address: "} </strong> {student.address}
                </p>
                </div>
            </div>
      </div>
    );
}