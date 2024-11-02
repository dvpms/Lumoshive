import React, { Component } from "react";
import Navbar from "../components/Navbar";
import StudentList from "../components/StudentList";
import StudentForm from "../components/StudentForm";

export default class StudentContainer extends Component {
  state = {
    modalForm: false,
    modalDetail: false,
    editedStudent: null,
    students: [
      {
        name: "Devran",
        class: "Informatika",
        year: "2014",
        nim: "212121",
        guardian_name: "Siti",
        birthDate: "2000-12-20",
        address: "Kebon jeruk Jakarta barat",
        gender: "male",
      },
      {
        name: "Devran",
        class: "Informatika",
        year: "2014",
        nim: "212122",
        guardian_name: "Siti",
        birthDate: "2000-12-20",
        address: "Kebon jeruk Jakarta barat",
        gender: "female",
      },
    ],
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
  };


  toggleModalForm = () => {
    this.setState({modalForm: !this.state.modalForm });
  };
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      currentStudent: {
        ...prevState.currentStudent,
        [name]: value,
      },
    }));
    console.log(this.state.currentStudent);
  };


  render() {
    return (
      <>
        <div className=" container student-container rounded-5">
          <div className="col p-2">
            <Navbar toggleModalForm={this.toggleModalForm}/>
          </div>
          {this.state.modalForm && (
            <StudentForm
              toggleModal={this.toggleModalForm}
              student={this.state.currentStudent}
              onChange={this.handleInputChange}
            />
          )}
          <div className="col list-container">
            <StudentList students={this.state.students}/>
          </div>
        </div>
      </>
    );
  }
}
