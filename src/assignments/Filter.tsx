import { useContext, useState } from 'react';
import { CharacterContext } from "../context/CharacterContext"; 



function Filter() {
  const { tasks } = useContext(CharacterContext);  // Hent 'tasks' fra taskcontext
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
        className={selectedFilter === "All" ? "active" : ""}>
          <p className="filter-emoji">🔄</p>
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedFilter(category.id)}
            className={selectedFilter === category.value ? "active" : ""}
            title={category.label}
          >
            <p className="filter-emoji">{category.label}</p>
          </button>
        ))}
      </div>

      {/* Render de filtrerede opgaver */}
      <ul className="task-list">
        {filteredTasks.map((task, index) => (
          <li key={task.value} className="task-item">
            {task.name} - {task.category} - {task.points} points
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;