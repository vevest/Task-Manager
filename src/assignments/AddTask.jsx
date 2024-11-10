import { useState } from 'react';

function Task({ addTask, addCategory, addPoints }) {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [taskName, setTaskName] = useState('');
    const [selectedPoints, setSelectedPoints] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (taskName.trim() && selectedCategory && selectedPoints) {
        console.log('Tilføjer opgave til to do liste:', selectedPoints);  // Debugging for at sikre korrekt butiksnavn
        addTask(selectedCategory, taskName, selectedPoints);
        setSelectedCategory('');
        setTaskName('');
        setSelectedPoints('');
      }
    };
  
  
  //Opsætning af inputfelter til at tilføje en ny opgave
    return (
      <>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Tilføj opgave"
          />
  
          {/* Valg af kategori */}
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
            required
          >
            <option value="" disabled hidden>Vælg opgavekategori</option>
            <option value="bøger">📚</option>
            <option value="tallerken">🍽️</option>
            <option value="sæbe">🧼</option>
            <option value="tøj">👕</option>
            <option value="sofa">🛋️</option>
            <option value="seng">🛏️</option>
            <option value="poser">🛍️</option>
          </select>
  
          {/* Projektvalg - sørg for nyeste projekter er nederst */}
          <select 
            value={selectedShop}
            onChange={(e) => setSelectedShop(e.target.value)}
            required
          >
            <option value="" disabled hidden>Vælg butik</option>
            {shops.map((shop, index) => (
              <option key={index} value={shop}>{shop}</option>
            ))}
          </select>
  
          <button type="submit">Tilføj</button>
        </form>
      </>
    );
  }
  
  export default Task