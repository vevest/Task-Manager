import Navbar from "../allComponents/Navbar";
import AddTask from "../assignments/AddTask";
import Filter from "../assignments/Filter";
import React, { useContext } from 'react';
import { TaskContext } from "../context/TaskContext"; 
import { Link } from "react-router-dom";

function Assignments() {
  const { category } = useContext(TaskContext);
  const { points } = useContext(TaskContext);
  const { setTaskName } = useContext(TaskContext);

  const handleClick = () => {
    setTaskName(null);
  }

  return (
    <>
      <h1>Mine opgaver</h1>
      <p>Vælg eller opret dine egne opgaver og optjen points!</p>
      
      <Navbar />
    </>
  );
}

export default Assignments;
