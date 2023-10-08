import React from "react";
import FormEntry from "./components/FormEntry";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from "./components/Read";
import NoPage from "./components/NoPage";
import Edit from "./components/Edit";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={FormEntry} />
          <Route path="/read" Component={Read} />
          <Route path="/edit" Component={Edit} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
