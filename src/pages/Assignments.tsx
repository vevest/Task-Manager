import Navbar from "../allComponents/Navbar";
import AddTask from "../assignments/AddTask";
import Filter from "../assignments/Filter";
import { CharacterContext } from "../context/CharacterContext"; 
import React, { useContext } from 'react';


function Assignments() {
  const { addTaskToFilter } = useContext(CharacterContext);

  return (
    <>
      {addTaskToFilter && <AddTask />}
      <Filter />
      <Navbar />
    </>
  );
}

export default Assignments;
