import React from "react";
import StudentContainer from "./containers/StudentContainer";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <div className="p-4">
      <BrowserRouter>
        <StudentContainer />
      </BrowserRouter>
    </div>
  );
}
