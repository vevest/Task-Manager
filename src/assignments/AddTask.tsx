import { useContext, useState } from 'react';
import { CharacterContext } from "../context/CharacterContext";

/**
 * AddTask() opretter en ny opgave 
 * @param tasks indeholder en liste over alle opgaver der er tilføjet
 * @param setTask er en funktion der opdaterer task hver gang en opgave tilføjes eller slettes 
 * @param selectedTask gemmer teksten fra inputfeltet
 * @param setSelectedTask opdaterer selectedTask når den ændres
 * @param selectedCategory gemmer den kategori brugeren har valgt
 * @param setSelectedCategory opdaterer selectedCategori når den ændres
 * @param selectedPoints gemmer points brugeren har valgt
 * @param setSelectedPoints opdaterer selectedPoints når den ændres
 * @param categories er en liste over de værdier brugeren kan vælge imellem af kategorier
 * @param points er en liste over de værdier brugeren kan vælge imellem af points
 * 
 * @returns 
 */


function AddTask() {
  const { tasks, setTasks } = useContext(CharacterContext);
  const [selectedTask, setSelectedTask] = useState(''); // Opgavens navn
  const [selectedCategory, setSelectedCategory] = useState(null); // Valgte kategori
  const [selectedPoints, setSelectedPoints] = useState(null); // Valgte points

  const categories = [
    { id: 1, label: '📚', value: 'Study' },
    { id: 2, label: '🍽️', value: 'Kitchen' },
    { id: 3, label: '🧼', value: 'Wash' },
    { id: 4, label: '👕', value: 'Clothes' },
    { id: 5, label: '🛋️', value: 'Livingroom' },
    { id: 6, label: '🛏️', value: 'Bedroom' },
    { id: 7, label: '🛍️', value: 'Shop' },
  ];

  const points = [
    { id: 1, label: '5 point', value: 5 },
    { id: 2, label: '10 point', value: 10 },
    { id: 3, label: '15 point', value: 15 },
    { id: 4, label: '20 point', value: 20 },
    { id: 5, label: '25 point', value: 25 },
  ];

  // Håndter inputændringer
  const handleTaskChange = (e) => {
    setSelectedTask(e.target.value);
  };

  // Håndter valg af kategori
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Håndter valg af points
  const handlePointsClick = (point) => {
    setSelectedPoints(point);
  };

  // Tilføj opgaven til listen
  const handleAddTask = (e) => {
    e.preventDefault();

    if (!selectedTask || !selectedCategory || !selectedPoints) {
      alert('Udfyld venligst alle felter før du tilføjer en opgave.');
      return;
    }

    const newTask = {
      id: tasks.length + 1,
      name: selectedTask,
      category: selectedCategory.label,
      points: selectedPoints.value,
    };

    setTasks([...tasks, newTask]); // Tilføj ny opgave til listen
    setSelectedTask(''); // Nulstil opgavefelt
    setSelectedCategory(null); // Nulstil kategori
    setSelectedPoints(null); // Nulstil points
  };

  return (
    <div className="center">
      <h1>Opret opgave</h1>

      <form>
        <h2>📌 Kategori</h2>
        <div className="character-selection">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`category ${
                selectedCategory && selectedCategory.label === category.label ? 'selected' : ''
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category.label}
            </div>
          ))}
        </div>

        <h2>Opgaven</h2>
        <input
          type="text"
          value={selectedTask}
          placeholder="Skriv opgaven"
          onChange={handleTaskChange}
        />

        <h2>⚡️ Points</h2>
        <div className="character-selection">
          {points.map((point) => (
            <div
              key={point.id}
              className={`points ${
                selectedPoints && selectedPoints.value === point.value ? 'selected' : ''
              }`}

              onClick={() => handlePointsClick(point)}
            >
              {point.value}
            </div>
          ))}
        </div>

        <button
          className={`button ${
            !selectedTask || !selectedCategory || !selectedPoints ? 'disabled' : ''
          }`}
          onClick={handleAddTask}
        >
          Tilføj opgave
        </button>
      </form>
    </div>
  );
}

export default AddTask;
