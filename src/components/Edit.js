import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Edit = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(id);
    axios
      .put(`https://6521eba9a4199548356d9f76.mockapi.io/crud-hassan/${id}`, {
        name: name,
        email: email,
      })
      .then(() => {
        navigate("/read");
      });
  };

  return (
    <>
      <h1>Update</h1>
      <form>
        <div class="m-5">
          <label for="names" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="names"
            value={name}
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
            value={email}
            id="exampleInputEmail1"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="d-flex mx-2">
          <button type="submit" class="btn btn-primary" onClick={handleUpdate}>
            Update
          </button>

          <Link to="/read">
            <button className="btn-primary mx-2">Back</button>
          </Link>
        </div>
      </form>
    </>
  );
};

export default Edit;
