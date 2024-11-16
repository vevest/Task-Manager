import React, { useState, useContext, FormEvent } from 'react';
import { TaskContext } from '../context/TaskContext';
import { Task } from '../types';

const AddTask: React.FC<{ addTask: (task: { category: string; taskName: string; points: number }) => void }> = ({ addTask }) => {
  const { taskName, setTaskName, categories, points } = useContext(TaskContext)!;  // Brug konteksten korrekt her
  const [category, setCategory] = useState<string | null>(null);  // Gemmer valgt kategori
  const [selectedPoints, setSelectedPoints] = useState<number | null>(null);  // Gemmer valgte points

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (taskName.trim() && category && selectedPoints) {
      const newTask: Task = {
        category,
        taskName,
        points: selectedPoints,
      };

      console.log('Tilføjer opgave:', newTask);

      addTask(newTask);   // Ny opgave tilføjes 
      setTaskName('');    // Nulstil opgavenavn
      setCategory(null);  // Nulstil kategori
      setSelectedPoints(null);    // Nulstil points
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Tilføj opgave"
      />

      {/* Valg af kategori */}
      <div>
        <h3>Vælg kategori:</h3>
        <div>
          {categories.map((categoryItem) => (
            <button
              key={categoryItem.value}
              type="button"
              onClick={() => setCategory(categoryItem.value)}>
              {categoryItem.label}
            </button>
          ))}
        </div>
      </div>

      {/* Valg af antal Points */}
      <div>
        <h3>Vælg antal points:</h3>
        <div>
          {points.map((point) => (
            <button
              key={point}
              type="button"
              onClick={() => setSelectedPoints(point)}>
              {point}
            </button>
          ))}
        </div>
      </div>

      {/* Deaktiver submit-knap, hvis felterne ikke er udfyldt */}
      <button type="submit" disabled={!taskName.trim() || !category || !selectedPoints}> 
        Tilføj
      </button>
    </form>
  );
}

export default AddTask;
