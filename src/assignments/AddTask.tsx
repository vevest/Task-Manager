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
const handleTaskChange = (e) => {
  setTask(e.target.value);
};

// Funktion til at håndtere, når en category vælges 
const handleCategoryClick = (categoryId, categoryValue) => {
  setSelectedCategory(categoryId);  // Sætter den valgte value(emoji)
  setCategory(categoryValue);
};

const handlePointsClick = (pointsId, pointsValue) => {
  setSelectedPoints(pointsId); //Sætter den valgte value (nummer points)
  setPoints(pointsValue);
}


const handleLinkClick = (e) => {
  e.preventDefault(); //Forhindrer sideopdatering
   // Forhindrer navigation, hvis ikke alt er udfyldt
  if (task && selectedCategory && selectedPoints) {
    e.preventDefault();
    alert('Udfyld venligst alle felter før du fortsætter.');
    return;
    }
    setShowTask(true); //sætter setShowTask til true, hvis der er en værdi i setTask
  };


return(
  <div className='center'>
    <h2>Opret opgave</h2>
    
    


    <form>
        <h3>Skriv din opgave</h3>
        <input type="text" placeholder='Opgavens navn' onChange={handleTaskChange} />
        <div className="character-selection"> 
        <h3>Vælg en kategori</h3>
        {categories.map((category) => (
          <div
            key={category.id}
            className={`category ${selectedCategory === category.id ? 'selected' : ''}`}
            onClick={() => handleCategoryClick(category.id, category.value)}
            >
              {category.label}
          </div>
          ))}
        </div>
        <div className="character-selection"> 
        <h3>Angiv antal points</h3>
        {points.map((points) => (
          <div
            key={points.id}
            className={`points ${selectedPoints === points.id ? 'selected' : ''}`}
            onClick={() => handlePointsClick(points.id, points.value)}
            >
              {points.label}
          </div>
          ))}
        </div>
        <Link 
        to = "/filter"
        className = {`buttonBottom button ${!task && !selectedCategory && !selectedPoints ? "disabled" : ""}`} 
        onClick = {handleLinkClick}
      > 
        Tilføj opgave
      </Link>
      
    </form> 

  </div>
  );
}

export default AddTask;

