import React, { useState, useEffect, createContext } from "react";
import PropTypes from "prop-types";
import Navbar from "../components/Navbar";
import StudentList from "../components/StudentList";
import StudentForm from "../components/StudentForm";
import StudentDetail from "../components/StudentDetail";
import useAPI from "../hooks/useAPI";

export const LanguageContext = createContext();

const StudentContainer = () => {
  const {
    fetchStudents,
    addStudent,
    deleteStudent,
    detailStudentAPI,
    updateStudent,
  } = useAPI();

  const [modalForm, setModalForm] = useState(false);
  const [students, setStudents] = useState([]);
  const [detailStudent, setDetailStudent] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [currentStudent, setCurrentStudent] = useState({
    name: "",
    class: "",
    year: "",
    nim: "",
    guardian_name: "",
    birthDate: "",
    address: "",
    gender: "",
  });
  const [error, setError] = useState(null);

  const [language, setLanguage] = useState("id"); // default bahasa Indonesia

  const changeLanguage = (language) => {
    setLanguage(language);
  };
  const getStudents = async () => {
    try {
      const students = await fetchStudents();
      setStudents(students.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentStudent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDetail = async (id) => {
    try {
      const res = await detailStudentAPI(id);
      setCurrentStudent(res.data);
    } catch (err) {
      console.log(err);
    }
    toggleModalDetail();
  };

  const toggleModalDetail = () => {
    setDetailStudent(!detailStudent);
  };

  const toggleModalForm = (isUpdate = false) => {
    setIsUpdate(isUpdate);
    setModalForm(!modalForm);
    setCurrentStudent({
      name: "",
      class: "",
      year: "",
      nim: "",
      guardian_name: "",
      birthDate: "",
      address: "",
      gender: "",
    });
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();
    try {
      const res = await addStudent(currentStudent);
      setCurrentStudent({
        name: "",
        class: "",
        year: "",
        nim: "",
        guardian_name: "",
        birthDate: "",
        address: "",
        gender: "",
      });
      getStudents();
      toggleModalForm(  );
      console.log(res);
    } catch (err) {
      console.log(err);
      setError(err.response);
    }
  };
  const handleDelete = async (id) => {
    try {
      await deleteStudent(id);
      getStudents();
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = async (id) => {
    try {
      toggleModalForm();
      setIsUpdate(true);
      const res = await detailStudentAPI(id);
      setCurrentStudent(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleUpdateStudent = async (id) => {
    try {
      await updateStudent(id, currentStudent);
      getStudents();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      <div className="container student-container rounded-5">
        <div className="col p-2">
          <Navbar
            toggleModalForm={toggleModalForm}
            changeLanguage={changeLanguage}
          />
        </div>
        {modalForm && (
          <StudentForm
            toggleModalForm={toggleModalForm}
            students={currentStudent}
            onChange={handleInputChange}
            handleAddStudent={handleAddStudent}
            error={error}
            isUpdate={isUpdate}
            onUpdate={handleUpdateStudent}
          />
        )}
        {detailStudent && (
          <StudentDetail
            toggleModal={toggleModalForm}
            student={currentStudent}
            toggleModalDetail={toggleModalDetail}
          />
        )}
        <div className="col list-container">
          <StudentList
            students={students}
            onDelete={handleDelete}
            onDetail={handleDetail}
            onUpdate={handleUpdateStudent}
            handleEdit={handleEdit}
          />
        </div>
      </div>
    </LanguageContext.Provider>
  );
};

StudentContainer.propTypes = {
  toggleModalForm: PropTypes.func.isRequired,
  students: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      class: PropTypes.string,
      year: PropTypes.string,
      nim: PropTypes.string,
      guardian_name: PropTypes.string,
      birthDate: PropTypes.string,
      address: PropTypes.string,
      gender: PropTypes.string,
    })
  ),
  onDelete: PropTypes.func.isRequired,
  onDetail: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  toggleModalDetail: PropTypes.func.isRequired,
  student: PropTypes.shape({
    name: PropTypes.string,
    class: PropTypes.string,
    year: PropTypes.string,
    nim: PropTypes.string,
    guardian_name: PropTypes.string,
    birthDate: PropTypes.string,
    address: PropTypes.string,
    gender: PropTypes.string,
  }),
  error: PropTypes.string,
  isUpdate: PropTypes.bool.isRequired,
};

export default StudentContainer;

