import { useState } from 'react';

function AddTask() {
  const [tasks, setTasks] = useState([]); // Gemmer opgaver i en liste
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

  // Slet opgaven
  const handleTaskDone = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId)); // Fjern opgaven med det specifikke id
  };

  return (
    <div className="center">
      <h2>Opret opgave</h2>

      <form>
        <h3>Skriv din opgave</h3>
        <input
          type="text"
          value={selectedTask}
          placeholder="Opgavens navn"
          onChange={handleTaskChange}
        />

        <div className="character-selection">
          <h3>Vælg en kategori</h3>
          {categories.map((category) => (
            <div
              key={category.id}
              className={`category ${
                selectedCategory && selectedCategory.id === category.id ? 'selected' : ''
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category.label}
            </div>
          ))}
        </div>

        <div className="character-selection">
          <h3>Angiv antal points</h3>
          {points.map((point) => (
            <div
              key={point.id}
              className={`points ${
                selectedPoints && selectedPoints.id === point.id ? 'selected' : ''
              }`}
              onClick={() => handlePointsClick(point)}
            >
              {point.label}
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

      {/* Viser tilføjede opgaver */}
      <div className="task-list">
        <h3>Opgaver</h3>
        {tasks.map((task) => (
          <div key={task.id} className="task-item">
            <p>{task.name}</p>
            <p>{task.category}</p>
            <p>{task.points} points</p>
            <button onClick={() => handleTaskDone(task.id)}>Færdig</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddTask;
