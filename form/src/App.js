import React, { useState } from "react";
import StudentList from "./components/StudentList";
import Form from "./components/Form";

function App() {
  const [students, setStudents] = useState([
    {
      id: 0,
      name: " ",
      email: " ",
      class: " ",
      role: " "
    }
  ]);

  const addNewStudent = student => {
    const newStudent = {
      id: Date.now(),
      name: student.name,
      email: student.email,
      class: student.class,
      role: student.role
    };
    setStudents([...students, newStudent]);
  };
  return (
    <div>
      <Form addStudent={addNewStudent} />
      <StudentList students={students} />
    </div>
  );
}

export default App;
