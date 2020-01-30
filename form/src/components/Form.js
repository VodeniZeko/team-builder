import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="form-group">
      <h1>Tell me about yourself</h1>
      <form className="'react-form">
        <label htmlFor="name">Your name</label>
        <input className="form-input" id="title" type="text" />
        <label htmlFor="email">Your email</label>
        <input className="form-input" id="email" type="email" />
        <label htmlFor="text">Your class</label>
        <input
          className="form-input"
          id="text"
          type="text"
          placeholder="eg WEB27..."
        />
        <label htmlFor="name">Your role</label>
        <input
          className="form-input"
          id="title"
          type="text"
          placeholder="eg Data scientist..."
        />
        <button className="btn" type="submit">
          {" "}
          Submit..{" "}
        </button>
      </form>
    </div>
  );
};

export default Form;
