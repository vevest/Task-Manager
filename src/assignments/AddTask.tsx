import { useState, useContext } from 'react';
import { TaskContext } from "../context/TaskContext";
import Filter from "./Filter";
import { Link } from 'react-router-dom';

function AddTask() {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
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
    {id: 1, label: '5 point', value:5},
    {id: 2, label: '10 point', value:10},
    {id: 3, label: '15 point', value:15},
    {id: 4, label: '20 point', value:20},
    {id: 5, label: '25 point', value:25}
    ];

  //Funktion til at skrive sin opgave 
  const handleTaskChange = (e) => {
    setSelectedTask(e.target.value);
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
    if (!selectedTask || !selectedCategory || !selectedPoints) {
      alert('Udfyld venligst alle felter før du fortsætter.');
      return;
    } else {
      setButtonClicked(true);
    }
  };


return(
  <div className='center'>
    <h2>Opret opgave</h2>
    
    

  <div className='flex'>
    <form>
        <h3>Skriv din opgave</h3>
        <input type="text" value={selectedTask} placeholder='Opgavens navn' onChange={handleTaskChange} />
        <div className="character-selection"> 
        <h3>Vælg en kategori</h3>
        {categories.map((category) => (
          <div
            key={category.id}
            className={`category ${selectedCategory === category.label ? 'selected' : ''}`}
            onClick={() => handleCategoryClick(category.label, category.value)}
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
            className={`points ${selectedPoints === points.label ? 'selected' : ''}`}
            onClick={() => handlePointsClick(points.label, points.value)}
            >
              {points.value}
          </div>
          ))}
        </div>
        <button 
          className = {`button ${!selectedTask || !selectedCategory || !selectedPoints ? "disabled" : ""}`} 
          onClick = {handleLinkClick}>Tilføj opgave
        </button>   
    </form> 
    <div>
      <h1>{buttonClicked ? selectedTask : ''}</h1>
      <h1>{buttonClicked ? selectedPoints : ''}</h1>
      <h1>{buttonClicked ? selectedCategory : ''}</h1>
    </div>
    </div>

  </div>
  );
}

export default AddTask;

