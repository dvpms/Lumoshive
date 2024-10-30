import React, { Component } from "react";
import StudentTable from "../components/StudentTable";
import StudentForm from "../components/StudentForm";
import StudentDetail from "../components/StudentDetail";

export default class StudentContainer extends Component {
  state = {
    modalForm: false,
    modalDetail: false,
    students: [
        {
            name: "Devran Perdana Malik",    
            nim: "2121161",
            address: "Jl. Sudirman",
            guardian: "Siti",
        }
    ]
  };

  toggleModalForm = () => {
    this.setState({ modalForm: !this.state.modalForm });
  };

  toggleModalDetail = () => {
    this.setState({ modalDetail: !this.state.modalDetail });
  };
  render() {
    return (
      <>
        <StudentTable students={this.state.students} toggleModalForm={this.toggleModalForm} toggleModalDetail={this.toggleModalDetail}/>
        {this.state.modalForm && (
          <StudentForm toggleModal={this.toggleModalForm} />
        )}
        {this.state.modalDetail && (
          <StudentDetail toggleModal={this.toggleModalDetail} />
        )}
      </>
    );
  }
}
