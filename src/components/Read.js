import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Edit from "./Edit";

const Read = () => {
  // ====Set To Local Storage for passing value in form ====

  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  const deleteHandle = (id) => {
    axios
      .delete(`https://6521eba9a4199548356d9f76.mockapi.io/crud-hassan/${id}`)
      .then((response) => {
        console.log(`Deleted post with ID ${response.id}`);
        getDatas();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [data, setData] = useState([]);
  // GET request for remote image in node.js

  function getDatas() {
    axios({
      method: "get",
      url: "https://6521eba9a4199548356d9f76.mockapi.io/crud-hassan",
    }).then(function (response) {
      console.log(response.data);
      setData(response.data);
    });
  }

  useEffect(() => {
    getDatas();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between m-2">
        <h1>Read Operation</h1>
        <Link to="/">
          <button className="btn-secondary">Create</button>
        </Link>
      </div>
      <table class="table m-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>

        {data.map((cdata) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{cdata.id}</th>
                  <td>{cdata.name}</td>
                  <td>{cdata.email}</td>
                  <td>
                    <Link to="/edit">
                      <button
                        className="btn-primary"
                        onClick={() => {
                          setToLocalStorage(cdata.id, cdata.name, cdata.email);
                        }}
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn-danger"
                      onClick={() => {
                        deleteHandle(cdata.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Read;
