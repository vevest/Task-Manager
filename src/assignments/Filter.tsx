import { useContext, useState } from 'react';
import { CharacterContext } from "../context/CharacterContext"; 
import { PointsContext } from '../context/PointsContext'; // Importér PointsContext



function Filter() {
  const { tasks, setTasks, addCompletedTask } = useContext(CharacterContext);  // Hent 'tasks' fra taskcontext
  const { setAddTaskToFilter } = useContext(CharacterContext);
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

  // Funktion der fortæller hvad der skal ske når opgaven er færdig
  const handleTaskDone = (taskId: string) => {
    const completedTask = tasks.find((task) => task.id === taskId);

    if (completedTask) {
      console.log("Task marked as done:", completedTask); // Log completedTask
      addPoints(completedTask.points); // Tilføj point
      addCompletedTask(completedTask); // Flyt opgaven til færdige opgaver
      
    }

    setTasks(tasks.filter((task) => task.id !== taskId)); // Fjern fra "To-do"-liste
  };

  const handleToFilter = () => {
    setAddTaskToFilter(true);
  }

  // Filter opgaver baseret på valgt kategori
  const filteredTasks =
    selectedFilter === "All"
      ? tasks  // Hvis 'All' er valgt, vis alle opgaver
      : tasks.filter((task) => task.category === selectedFilter);  // Filtrer opgaver efter kategori

  return (
    <div className="filter-container baseContent">
      <div className='flex'>
        <h2>Opgaver</h2>
        <div onClick={handleToFilter} className="circle">
          <i className="fa-solid fa-plus"></i>
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
            onClick={() => setSelectedFilter(category.label)}
            className={`filter-button ${selectedFilter === "All" ? "active" : ""}`}
            title={category.label}
          >
            <p className="filter-emoji">{category.label}</p>
          </button>
        ))}
      </div>

      {/* Render de filtrerede opgaver */}
    <ul className="task-list framedContent">
      <h2>To-do liste</h2>
      {tasks.length === 0 ? (
        <p className="no-tasks">Ingen opgaver i øjeblikket 🔆</p>
      ) : (
        filteredTasks.map((task) => (
          <li key={task.id} className="task-item">
            <div className='task-info'>
              <div className="task-category">
                {task.category}
              </div>
              <div className="task-nameAndPoints">
                <span className="task-name">{task.name}</span>
                <span className="task-points">{task.points}⚡️</span>
              </div>
            </div>
            <div className="task-actions">
                <button className="checkmark" onClick={() => handleTaskDone(task.id)}>
                  <i className="fa-solid fa-check"></i>
                </button>
              </div>
          </li>
        ))
      )}
    </ul>
    </div>
  );
};

export default Filter;