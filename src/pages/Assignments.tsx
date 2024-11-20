import Navbar from "../allComponents/Navbar";
import Level from "../allComponents/Level";
import Water from "../allComponents/Water";
import AddTask from "../assignments/AddTask";
import Filter from "../assignments/Filter";
import { CharacterContext } from "../context/CharacterContext"; 
import React, { useContext } from 'react';


function Assignments() {
  const { addTaskToFilter } = useContext(CharacterContext);

  return (
    <>
      <Level />
      <Water />
      {addTaskToFilter && <AddTask />}
      <Filter />
      <Navbar />
    </>
  );
}

export default Assignments;
