import React, { Component } from "react";
import StudentTable from "../components/StudentTable";
import StudentForm from "../components/StudentForm";
import StudentDetail from "../components/StudentDetail";

export default class StudentContainer extends Component {
  state = {
    modalForm: false,
    modalDetail: false,
    editedStudent: null,
    students: [
      {
        name: "Devran Perdana Malik",
        nim: "2121161",
        birthDate: "",
        address: "Jl. Sudirman",
        guardian: "Siti",
      },
      {
        name: "Devrin Perdana Malik",
        nim: "2121161",
        birthDate: "",
        address: "Jl. Sudirman",
        guardian: "Siti",
      },
    ],
    currentStudent: {
      name: "Devrin Perdana Malik",
      nim: "2121161",
      birthDate: "",
      address: "Jl. Sudirman",
      guardian: "Siti",
    },
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

  toggleModalForm = (isEdit = false) => {
    this.setState({ isEdit, modalForm: !this.state.modalForm });
  };

  handleEditStudent = (student, index) => {
    this.setState({
      modalForm: !this.state.modalForm,
      isEdit: true,
      currentStudent: student,
      editedStudent: index,
    });
  };

  toggleModalDetail = () => {
    this.setState({ modalDetail: !this.state.modalDetail });
  };

  handleDeleteStudent = (index) => {
    const data = this.state.students;
    const newStudents = data.slice(0, index).concat(data.slice(index + 1));
    console.log(newStudents, index);
    this.setState((prevState) => ({
      students: newStudents,
    }));
  };

  handleInfoStudent = (student) => {
    this.setState({ currentStudent: student });
    this.toggleModalDetail();
  };

  handleAddOrUpdateStudent = () => {
    const { currentStudent, isEdit } = this.state;

    if (isEdit) {
      const index = this.state.editedStudent;
      const updateStudent = [...this.state.students];
      updateStudent[index] = currentStudent;
      this.setState({
        students: updateStudent,
      });
    } else {  
      this.setState((prevState) => {
        return {
          students: [...prevState.students, currentStudent],
        };
      });
      this.setState({
        currentStudent: {
          name: "",
          nim: "",
          birthDate: "",
          address: "",
          guardian: "",
        },
      });

      this.toggleModalForm(this.state.isEdit);
    }
  };

  render() {
    return (
      <>
        <StudentTable
          students={this.state.students}
          handleEditStudent={this.handleEditStudent}
          toggleModalForm={this.toggleModalForm}
          toggleModalDetail={this.handleInfoStudent}
          handleDeleteStudent={this.handleDeleteStudent}
        />
        {this.state.modalForm && (
          <StudentForm
            isEdit={this.state.isEdit}
            onSubmit={this.handleAddOrUpdateStudent}
            onChange={this.handleInputChange}
            toggleModal={this.toggleModalForm}
            student={this.state.currentStudent}
          />
        )}
        {this.state.modalDetail && (
          <StudentDetail toggleModal={this.toggleModalDetail} student={this.state.currentStudent}/>
        )}
      </>
    );
  }
}
