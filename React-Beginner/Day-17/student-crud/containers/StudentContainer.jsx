import React, { Component } from "react";
import StudentTable from "../components/StudentTable";
import StudentForm from "../components/StudentForm";

export default class StudentContainer extends Component {
    state = {
        modalForm: false,
    };
    render() {
        return(
            <>
            {this.state.modalForm && <StudentForm />}
                <StudentTable />
            </>
        )
    }
}