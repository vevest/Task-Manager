import Navbar from "../allComponents/Navbar";
import AddTask from "../assignments/AddTask";
import Filter from "../assignments/Filter";
import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CharacterContext } from "../context/CharacterContext"; 

function Assignments() {
  const { tasks, setTasks} = useContext(CharacterContext);

  return (
    <>
      <h1>Mine opgaver</h1>
      <p>Vælg eller opret dine egne opgaver og optjen points!</p>
      <AddTask />
      <Filter />
      <Navbar />
    </>
  );
}

export default Assignments;
