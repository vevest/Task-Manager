import Navbar from "../allComponents/Navbar";
import AddTask from "../assignments/AddTask";
import Filter from "../assignments/Filter";
import React, { useContext } from 'react';
import { TaskContext } from "../context/TaskContext"; 
import { Link } from "react-router-dom";

function Assignments() {
  
  return (
    <>
      <h1>Mine opgaver</h1>
      <p>Vælg eller opret dine egne opgaver og optjen points!</p>
      <AddTask />
      <Navbar />
    </>
  );
}

export default Assignments;
