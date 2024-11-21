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
      {!addTaskToFilter && <Level />}
      <div className="gridToFlex-Box">
        {!addTaskToFilter && <Filter />}
        {!addTaskToFilter && <Water />}
      </div>
      {addTaskToFilter && <AddTask />}
      <Navbar />
    </>
  ); 
}

export default Assignments;
