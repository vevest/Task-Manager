import { useContext, useState } from 'react';
import { CharacterContext } from "../context/CharacterContext"; 
import { PointsContext } from '../context/PointsContext'; // Importér PointsContext



function Filter() {
  const { tasks, setTasks } = useContext(CharacterContext);  // Hent 'tasks' fra taskcontext
  const { addPoints } = useContext(PointsContext); // Hent addPoints-funktionen fra 
  const [selectedFilter, setSelectedFilter] = useState("All");

  const categories = [
    { id: 1, label: '📚', value: 'Study' },
    { id: 2, label: '🍽️', value: 'Kitchen' },
    { id: 3, label: '🧼', value: 'Wash' },
    { id: 4, label: '👕', value: 'Clothes' },
    { id: 5, label: '🛋️', value: 'Livingroom' },
    { id: 6, label: '🛏️', value: 'Bedroom' },
    { id: 7, label: '🛍️', value: 'Shop' },
  ];

    // Slet opgaven
    const handleTaskDone = (taskId) => {
      const completedTask = tasks.find((task) => task.id === taskId);
  
      if (completedTask) {
        addPoints(completedTask.points); // Tilføj points til konteksten
      }
  
      setTasks(tasks.filter((task) => task.id !== taskId)); // Fjern opgaven med det specifikke id
    };

  // Filter opgaver baseret på valgt kategori
  const filteredTasks =
    selectedFilter === "All"
      ? tasks  // Hvis 'All' er valgt, vis alle opgaver
      : tasks.filter((task) => task.category === selectedFilter);  // Filtrer opgaver efter kategori

  return (
    <div className="filter-container">
      <div className='flex'>
        <h2>Opgaver</h2>
        <div className="circle">
          <i class="fa-solid fa-plus"></i>
        </div>
      </div>

      {/* Emoji knapper for hver kategori */}
      <div className="category-buttons">
        <button onClick={() => setSelectedFilter("All")} 
        className={`filter-button ${selectedFilter === "All" ? "active" : ""}`}>
          <p className="filter-emoji">🔄</p>
        </button>
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => setSelectedFilter(category.value)}
            className={`filter-button ${selectedFilter === "All" ? "active" : ""}`}
            title={category.label}
          >
            <p className="filter-emoji">{category.label}</p>
          </button>
        ))}
      </div>

      {/* Render de filtrerede opgaver */}
      <ul className="task-list">
        {filteredTasks.map((task, index) => (
          <li key={task.id} className="task-item">
            {task.name} - {task.category} - {task.points} points <button onClick={() => handleTaskDone(task.id)}>Færdig</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;