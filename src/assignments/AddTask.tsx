import { useState, useContext } from 'react';
import { TaskContext } from "../context/TaskContext";
import Filter from "./Filter";
import { Link } from 'react-router-dom';






function AddTask() {

  const { task, setTask, setShowTask } = useContext(TaskContext);
  const { setCategory} = useContext(TaskContext);
  const { setPoints} = useContext(TaskContext);
   
  const [selectedTask, setSlectedTask] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPoints, setSelectedPoints] = useState(null);
    
  const categories = [
    { id: 1, label: '📚', value: 'Study' },
    { id: 2, label: '🍽️', value: 'Kitchen' },
    { id: 3, label: '🧼', value: 'Wash' },
    { id: 4, label: "👕", value: "Clothes" },
    { id: 5, label: "🛋️", value: "Livingroom" },
    { id: 6, label: "🛏️", value: "Bedroom" },
    { id: 7, label: "🛍️", value: "Shop" }
  ];

  const points = [
    {id: 1, label: '5', value:5},
    {id: 2, label: '10', value:10},
    {id: 3, label: '15', value:15},
    {id: 4, label: '20', value:20},
    {id: 5, label: '25', value:25}
    ];

//Funktion til at skrive sin opgave 
const handleChance = (e) => {
  const value = e.target.value;
  setTask(value);
}

// Funktion til at håndtere, når en category vælges 
const handleCategoryClick = (categoryId, categoryValue) => {
  setSelectedCategory(categoryId);  // Sætter den valgte value(emoji)
  setCategory(categoryValue);
};
const handlePointsClick = (pointsId, pointsValue) => {
  setSelectedPoints(pointsId); //Sætter den valgte value (nummer points)
  setPoints(pointsValue);
}


const handleSubmit = (e) => {
  e.preventDefault(); //Forhindrer sideopdatering
  if (task && selectedCategory && selectedPoints) {
    setShowTask(true); //sætter setShowTask til true, hvis der er en værdi i setTask
  }
}

return(
  <div className='center'>
    <h2>Opret opgave</h2>
    
    


    <form onClick={handleSubmit}>
        <input type="text" placeholder='Opgavens navn' onChange={handleChance} />
        <div className="character-selection"> {categories.map((category) => (
          <div
            key={category.id}
            className={`category ${selectedCategory === category.id ? 'selected' : ''}`}
            onClick={() => handleCategoryClick(category.id, category.value)}
            >
          </div>
          ))}
        </div>
        <div className="character-selection"> {points.map((points) => (
          <div
            key={points.id}
            className={`points ${selectedPoints === points.id ? 'selected' : ''}`}
            onClick={() => handlePointsClick(points.id, points.value)}
            >
          </div>
          ))}
        </div>
        <button type='submit'>Tilføj opgave</button>
        <button type='submit' className={`${!task && !selectedCategory && !selectedPoints ? "disabled" : ""}`}>Tilføj Opgave</button>
    </form> 

    <Link 
        to={`${selectedPoints ? "/assignment" : ""}`} 
        className={`buttonBottom button ${!task && !selectedCategory && !selectedPoints ? "disabled" : ""}`} 
      > 
        Tilføj opgave
      </Link>

  </div>



  );
}

export default AddTask;


/* <div className='center'>
      <h1>Vælg din karakter</h1>
      <div className="character-selection">
        {characters.map((character) => (
          <div
            key={character.id}
            className={`character ${selectedCharacter === character.id ? 'selected' : ''}`}
            onClick={() => handleCharacterClick(character.id)}
          >
            <img
              src={character.src}
              alt={character.alt}
            />
          </div>
        ))}
      </div>
      <button className='buttonBottom' onClick={handleSubmit}>Kom i gang</button>
    </div>
      <Link 
        to={`${selectedCharacter ? "/mood" : ""}`} 
        className={`buttonBottom button ${!selectedCharacter ? "disabled" : ""}`} 
      > 
        Kom i gang
      </Link>
    </div>  */



  // //Opsætning af inputfelter til at tilføje en ny opgave
  //   return (
  //     <>
  //       <form onSubmit={handleSubmit}>
  //         <input
  //           type="text"
  //           value={taskName}
  //           onChange={(e) => setTaskName(e.target.value)}
  //           placeholder="Tilføj opgave"
  //         />

  //         {/* Valg af kategori */}
  //         <select 
  //           value={category} 
  //           onChange={(e) => setCategory(e.target.value)}
  //           required
  //         >
  //         <div
  //           key={category.id}
  //           className={`category ${selectedCategory === category.id ? 'selected' : ''}`}
  //           onClick={() => {
  //             handleCategoryClick(category.id, category.label)
  //           }}
  //         >
  //         </div>

  //         {/* Valg af antal Points */}
  //         <select 
  //           value={points} 
  //           onChange={(e) => setPoints(Number(e.target.value))}
  //           required
  //         >
  //           <option value="" disabled hidden>Vælg antal points</option>
  //           <option value={5}>5</option>
  //           <option value={10}>10</option>
  //           <option value={15}>15</option>
  //           <option value={20}>20</option>
  //           <option value={25}>25</option>
  //         </select>

  //         <button type="submit">Tilføj</button>
  //       </form>
  //     </>
  //         //   <Link 
  //         //   to={`${selectedCharacter ? "/mood" : ""}`} 
  //         //   className={`buttonBottom button ${!selectedCharacter ? "disabled" : ""}`} 
  //         // > 
  //         //   Kom i gang
  //         // </Link>

      
  //   );
  // }

  // export default AddTask;




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

