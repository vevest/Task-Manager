import { useState } from 'react';
import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";


// Define emojis for each category
const categoryEmojis = [
  { label: "Study", emoji: "📚" },
  { label: "Kitchen", emoji: "🍽️" },
  { label: "Wash", emoji: "🧼" },
  { label: "Clothes", emoji: "👕" },
  { label: "Livingroom", emoji: "🛋️" },
  { label: "Bedroom", emoji: "🛏️" },
  { label: "Shop", emoji: "🛍️" },
];

function Filter() {
  const { tasks } = useContext(TaskContext)!;  // Hent 'tasks' fra taskcontext
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter opgaver baseret på valgt kategori
  const filteredTasks =
    selectedCategory === "All"
      ? tasks  // Hvis 'All' er valgt, vis alle opgaver
      : tasks.filter((task) => task.category === selectedCategory);  // Filtrer opgaver efter kategori


  return (
    <div className="filter-container">
      <div className='flex'>
        <h2>Opgaver</h2>
        <div className="circle">
          {/* <i class="fa-solid fa-plus"></i> */}
        </div>
      </div>

      {/* Emoji knapper for hver kategori */}
      <div className="category-buttons">
        <button onClick={() => setSelectedCategory("All")} className={selectedCategory === "All" ? "active" : ""}>
          <p className="filter-emoji">🔄</p>
        </button>
        {categoryEmojis.map((category) => (
          <button
            key={category.label}
            onClick={() => setSelectedCategory(category.label)}
            className={selectedCategory === category.label ? "active" : ""}
            title={category.label}
          >
            <p className="filter-emoji">{category.emoji}</p>
          </button>
        ))}
      </div>

      {/* Render de filtrerede opgaver */}
      <ul className="task-list">
        {filteredTasks.map((task, index) => (
          <li key={index} className="task-item">
            {task.taskName} - {task.category} - {task.points} points
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;