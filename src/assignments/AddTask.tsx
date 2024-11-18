// import React, { useState, useContext, FormEvent } from 'react';
// import { TaskContext } from '../context/TaskContext';
// import { Task } from '../types';

// const AddTask: React.FC<{ addTask: (task: { category: string; taskName: string; points: number }) => void }> = ({ addTask }) => {
//   const { taskName, setTaskName, categories, points } = useContext(TaskContext)!; 
//   const [category, setCategory] = useState<string | null>(null);  // Gemmer valgt kategori
//   const [selectedPoints, setSelectedPoints] = useState<number | null>(null);  // Gemmer valgte points

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     if (taskName.trim() && category && selectedPoints) {
//       const newTask: Task = {
//         category,
//         taskName,
//         points: selectedPoints,
//       };

//       console.log('Tilføjer opgave:', newTask);

//       addTask(newTask);   // Ny opgave tilføjes 
//       setTaskName('');    // Nulstil opgavenavn
//       setCategory(null);  // Nulstil kategori
//       setSelectedPoints(null);    // Nulstil points
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={taskName}
//         onChange={(e) => setTaskName(e.target.value)}
//         placeholder="Tilføj opgave"
//       />

//       {/* Valg af kategori */}
//       <div>
//         <h3>Vælg kategori:</h3>
//         <div>
//           {categories.map((categoryItem) => (
//             <button
//               key={categoryItem.value}
//               type="button"
//               onClick={() => setCategory(categoryItem.value)}>
//               {categoryItem.label}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Valg af antal Points */}
//       <div>
//         <h3>Vælg antal points:</h3>
//         <div>
//           {points.map((point) => (
//             <button
//               key={point}
//               type="button"
//               onClick={() => setSelectedPoints(point)}>
//               {point}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Deaktiver submit-knap, hvis felterne ikke er udfyldt */}
//       <button type="submit" disabled={!taskName.trim() || !category || !selectedPoints}> 
//         Tilføj
//       </button>
//     </form>
//   );
// }

// export default AddTask;

import { useState, useContext } from 'react';
import { TaskContext } from "../context/TaskContext";


function AddTask({addTask}) {
  const { category, setCategory, taskName, setTaskName,points,setPoints } = useContext(TaskContext);

    const handleSubmit = (e) => {
      e.preventDefault();
      if (taskName.trim() && category && points) {
        console.log('Tilføjer opgave til to do liste:', points);  // Debugging for at sikre korrekt butiksnavn
        console.log('Tilføjer opgave til to do liste:', points);  // Debugging for at sikre korrekt opgave
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
          //   <Link 
          //   to={`${selectedCharacter ? "/mood" : ""}`} 
          //   className={`buttonBottom button ${!selectedCharacter ? "disabled" : ""}`} 
          // > 
          //   Kom i gang
          // </Link>

      
    );
  }

  export default AddTask;