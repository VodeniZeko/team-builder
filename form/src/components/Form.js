import React, { useState, useEffect } from "react";
import "./Form.css";

const Form = ({ addStudent }) => {
  const [student, setStudent] = useState({
    name: " ",
    email: " ",
    class: " ",
    role: " "
  });

  const onChange = e => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };
  const enabled =
    student.name === " " ||
    student.email === " " ||
    student.class === " " ||
    student.role === " ";

  const onSubmit = e => {
    e.preventDefault();
    addStudent(student);
    setStudent({ name: " ", email: " ", class: " ", role: " " });
  };
  return (
    <div className="form-group">
      <h1>Tell me about yourself</h1>
      <form onSubmit={onSubmit} className="'react-form">
        <label htmlFor="name">Your name</label>
        <input
          onChange={onChange}
          className="form-input"
          id="title"
          name="name"
          type="text"
          value={student.name}
        />
        <label htmlFor="email">Your email</label>
        <input
          onChange={onChange}
          className="form-input"
          id="email"
          name="email"
          type="email"
          value={student.email}
        />
        <label htmlFor="text">Your class</label>
        <input
          onChange={onChange}
          className="form-input"
          id="text"
          type="text"
          name="class"
          value={student.class}
        />
        <label htmlFor="name">Your role</label>
        <input
          onChange={onChange}
          className="form-input"
          id="title"
          type="text"
          name="role"
          value={student.role}
        />
        <button disabled={enabled} className="btn" type="submit">
          {" "}
          Submit..{" "}
        </button>
      </form>
    </div>
  );
};

export default Form;
