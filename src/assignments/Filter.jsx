import { useState } from 'react';
import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

// Chores by category
const booksChores = ["Read a book", "Shower", "Exercise", "Meditate"];
const kitchenChores = [
  "Vacuum", "Do the dishes", "Make the bed", "Clean the bathroom",
  "Take the trash out", "Clean the kitchen", "Water indoor plants"
];
const washChores = [
  "Clean the windows", "Mow the lawn", "Water outdoor plants",
  "Tend the garden", "Clean the car"
];
const clothesChores = [
  "Do the laundry", "Hang up the laundry", "Fold the laundry",
  "Put laundry in closet"
];

const bedroomChores = [
  ""
];

const bagsChores = [
  ""
];

// Combine categories into a single array
const choresData = [
  ...booksChores.map((name, index) => ({ id: `books-${index}`, name, category: "Books" })),
  ...kitchenChores.map((name, index) => ({ id: `kitchen-${index}`, name, category: "Kitchen" })),
  ...washChores.map((name, index) => ({ id: `wash-${index}`, name, category: "Wash" })),
  ...clothesChores.map((name, index) => ({ id: `clothes-${index}`, name, category: "Clothes" })),
  ...livingroomChores.map((name, index) => ({ id: `livingroom-${index}`, name, category: "Livingroom" })),
  ...bedroomChores.map((name, index) => ({ id: `bedroom-${index}`, name, category: "Bedroom" })),
  ...bagsChores.map((name, index) => ({ id: `bags-${index}`, name, category: "Bags" })),
];

// Define emojis for each category
const categoryEmojis = [
  { label: "Books", emoji: "📚" },
  { label: "Kitchen", emoji: "🍽️" },
  { label: "Wash", emoji: "🧼" },
  { label: "Clothes", emoji: "👕" },
  { label: "Livingroom", emoji: "🛋️" },
  { label: "Bedroom", emoji: "🛏️" },
  { label: "Bags", emoji: "🛍️" },
];

function Filter() {
  const {category, task} = useContext(TaskContext);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter chores based on selected category
  const filteredChores =
    selectedCategory === "All"
      ? choresData
      : choresData.filter((chore) => chore.category === selectedCategory);

  return (
    <div className="filter-container">
      <h2>SMILE - Dine opgaver</h2>

      {/* Emoji buttons for each category */}
      <div className="category-buttons">
        <button onClick={() => setSelectedCategory("All")} className={`category-btn ${selectedCategory === "All" ? "active" : ""}`}>
          <p className='filter-emoji'>🔄</p>
        </button>
        {categoryEmojis.map((category) => (
          <button
            key={category.label}
            onClick={() => setSelectedCategory(category.label)}
            className={`category-btn ${selectedCategory === category.label ? "active" : ""}`}
            title={category.label}
          >
            <p className='filter-emoji'>{category.emoji}</p>
          </button>
        ))}
      </div>

      {/* Render filtered chores */}
      <ul className="chore-list">
        {filteredChores.map((chore) => (
          <li key={chore.id} className="chore-item">
            {chore.name} - {chore.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;