import React, { Component } from "react";
import Navbar from "../components/Navbar";
import StudentList from "../components/StudentList";
import StudentForm from "../components/StudentForm";
import StudentDetail from "../components/StudentDetail";
import {
  fetchStudents,
  addStudent,
  deleteStudent,
  detailStudent,
  updateStudent,
} from "../utils/api";

export default class StudentContainer extends Component {
  state = {
    modalForm: false,
    students: [],
    detailStudent: false,
    isUpdate: false,
    currentStudent: {
      name: "",
      class: "",
      year: "",
      nim: "",
      guardian_name: "",
      birthDate: "",
      address: "",
      gender: "",
    },
    error: null,
  };

  componentDidMount() {
    this.getStudents();
  }

  async getStudents() {
    try {
      const students = await fetchStudents();
      this.setState({ students: students.data });
    } catch (err) {
      console.log(err);
    }
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      currentStudent: {
        ...prevState.currentStudent,
        [name]: value,
      },
    }));
  };

  handleDetail = (id) => {
    detailStudent(id)
      .then((res) => {
        this.setState({ currentStudent: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
    this.toggleModalDetail();
  };

  toggleModalDetail = () => {
    this.setState({ detailStudent: !this.state.detailStudent });
  };

  handleAddStudent = (e) => {
    e.preventDefault();
    addStudent(this.state.currentStudent)
      .then((res) => {
        this.getStudents();
        this.setState({
          currentStudent: {
            name: "",
            class: "",
            year: "",
            nim: "",
            guardian_name: "",
            birthDate: "",
            address: "",
            gender: "",
          },
        });
        this.toggleModalForm();
        console.log(res);
      })
      .catch((err) => {
        this.setState({
          error: err.response.data.message,
        });
      });
  };

  handleDelete = (id) => {
    deleteStudent(id)
      .then((res) => {
        this.getStudents();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleEdit = (id) => {
    this.toggleModalForm();
    this.setState({ isUpdate: !this.state.isUpdate });
    detailStudent(id)
      .then((res) => {
        this.setState({ currentStudent: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
      this.setState({
        currentStudent: {
          name: "",
          class: "",
          year: "",
          nim: "",
          guardian_name: "",
          birthDate: "",
          address: "",
          gender: "",
        }
      })
  };

  handleUpdateStudent = (id) => {
    updateStudent(id, this.state.currentStudent)
      .then((res) => {
        this.getStudents();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  toggleModalForm = (isUpdate = false) => {
    this.setState({isUpdate, modalForm: !this.state.modalForm, currentStudent: {
      name: "",
      class: "",
      year: "",
      nim: "",
      guardian_name: "",
      birthDate: "",
      address: "",
      gender: "",
    }});
  };

  render() {
    return (
      <div className="container student-container rounded-5">
        <div className="col p-2">
          <Navbar toggleModalForm={this.toggleModalForm} />
        </div>
        {this.state.modalForm && (
          <StudentForm
            toggleModal={this.toggleModalForm}
            students={this.state.currentStudent}
            onChange={this.handleInputChange}
            onSubmit={this.handleAddStudent}
            error={this.state.error}
            isUpdate={this.state.isUpdate}
            onUpdate={this.handleUpdateStudent}
          />
        )}
        {this.state.detailStudent && (
          <StudentDetail
            toggleModal={this.toggleModalForm}
            student={this.state.currentStudent}
            toggleModalDetail={this.toggleModalDetail}
          />
        )}
        <div className="col list-container">
          <StudentList
            students={this.state.students}
            onDelete={this.handleDelete}
            onDetail={this.handleDetail}
            onUpdate={this.handleUpdateStudent}
            handleEdit={this.handleEdit}


          />
        </div>
      </div>
    );
  }
}
