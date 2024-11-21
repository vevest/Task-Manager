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
      {/* Vis kun Level-komponenten, hvis der ikke er tilføjet en opgave til filter */}
      {!addTaskToFilter && <Level />}
      
      <div className="gridToFlex-Box">
        {/* Vis kun Filter og Water, hvis der ikke er tilføjet en opgave til filter */}
        {!addTaskToFilter && (
          <>
            <Filter />
            <Water />
          </>
        )}
      </div>

      {/* Vis AddTask-komponenten, når en opgave er tilføjet til filter */}
      {addTaskToFilter && <AddTask />}

      {/* Navbar-komponenten vises altid */}
      <Navbar />
    </>
  );
}

export default Assignments;
