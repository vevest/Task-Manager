import { useState } from 'react';

// Chores by category
const selfcareChores = ["Read a book", "Shower", "Exercise", "Meditate"];
const houseChores = [
  "Vacuum", "Do the dishes", "Make the bed", "Clean the bathroom",
  "Take the trash out", "Clean the kitchen", "Water indoor plants"
];
const outdoorChores = [
  "Clean the windows", "Mow the lawn", "Water outdoor plants",
  "Tend the garden", "Clean the car"
];
const clothesChores = [
  "Do the laundry", "Hang up the laundry", "Fold the laundry",
  "Put laundry in closet"
];
const foodChores = [
  "Make a grocery list", "Go grocery shopping", "Cook dinner",
  "Set the table", "Clean out fridge of old food"
];

// Combine categories into a single array
const choresData = [
  ...selfcareChores.map((name, index) => ({ id: `selfcare-${index}`, name, category: "Selfcare" })),
  ...houseChores.map((name, index) => ({ id: `house-${index}`, name, category: "House" })),
  ...outdoorChores.map((name, index) => ({ id: `outdoors-${index}`, name, category: "Outdoors" })),
  ...clothesChores.map((name, index) => ({ id: `clothes-${index}`, name, category: "Clothes" })),
  ...foodChores.map((name, index) => ({ id: `food-${index}`, name, category: "Food" })),
];

// Define emojis for each category
const categoryEmojis = [
  { label: "Selfcare", emoji: "📚" },
  { label: "House", emoji: "🏠" },
  { label: "Outdoors", emoji: "🌳" },
  { label: "Clothes", emoji: "👕" },
  { label: "Food", emoji: "🍎" },
];

const Filter = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter chores based on selected category
  const filteredChores =
    selectedCategory === "All"
      ? choresData
      : choresData.filter((chore) => chore.category === selectedCategory);

  return (
    <div className="filter-container">
      <h2>SMILE - Your Chores</h2>

      {/* Emoji buttons for each category */}
      <div className="category-buttons">
        <button onClick={() => setSelectedCategory("All")} className={`category-btn ${selectedCategory === "All" ? "active" : ""}`}>
          🔄
        </button>
        {categoryEmojis.map((category) => (
          <button
            key={category.label}
            onClick={() => setSelectedCategory(category.label)}
            className={`category-btn ${selectedCategory === category.label ? "active" : ""}`}
            title={category.label}
          >
            {category.emoji}
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