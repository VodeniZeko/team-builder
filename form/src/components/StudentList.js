import React from "react";
import "./StudentList.css";

const StudentList = ({ students }) => {
  return (
    <div className="container">
      {students.map(x => {
        return (
          <div key={x.id} className="card">
            <p>name: {x.name}</p>
            <p>email: {x.email}</p>
            <p>class: {x.class}</p>
            <p>role: {x.role}</p>
          </div>
        );
      })}
    </div>
  );
};

export default StudentList;
