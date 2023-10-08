import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const FormEntry = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send a POST request
    axios({
      method: "post",
      url: "https://6521eba9a4199548356d9f76.mockapi.io/crud-hassan",
      data: {
        name: name,
        email: email,
      },
    }).then(() => {
      history("/read");
    });
  };
  return (
    <>
      <div className="d-flex justify-content-between m-2">
        <h1>Create</h1>
        <Link to="/read">
          <button className="btn-primary">Show Data</button>
        </Link>
      </div>
      <form>
        <div class="m-5">
          <label for="names" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="names"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div class="m-5">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      {name}
      {email}
    </>
  );
};

export default FormEntry;
