import { useState, useContext } from 'react';
import { TaskContext } from "../context/TaskContext";


function AddTask({addTask}) {
  const { category, setCategory, taskName, setTaskName,points,setPoints } = useContext(TaskContext);

    const handleSubmit = (e) => {
      e.preventDefault();
      if (taskName.trim() && category && points) {
        console.log('Tilføjer opgave til to do liste:', points);  // Debugging for at sikre korrekt butiksnavn
        addTask(category, taskName, points);
        setCategory('');
        setTaskName('');
        setPoints('');
      }
    };
  
  
  //Opsætning af inputfelter til at tilføje en ny opgave
    return (
      <>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Tilføj opgave"
          />
  
          {/* Valg af kategori */}
          <select 
            value={category} 
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="" disabled hidden>Vælg kategori</option>
            <option value="books">📚</option>
            <option value="kitchen">🍽️</option>
            <option value="wash">🧼</option>
            <option value="clothes">👕</option>
            <option value="livingroom">🛋️</option>
            <option value="bedroom">🛏️</option>
            <option value="bags">🛍️</option>
          </select>

          {/* Valg af antal Points */}
          <select 
            value={points} 
            onChange={(e) => setPoints(Number(e.target.value))}
            required
          >
            <option value="" disabled hidden>Vælg antal points</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
            <option value={25}>25</option>
          </select>
  
          <button type="submit">Tilføj</button>
        </form>
      </>
    );
  }
  
  export default AddTask