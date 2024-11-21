import React, { createContext, useState, useEffect, ReactNode } from 'react';

// Definer typerne med typescript
interface Task {
  id: string;
  name: string;
  category: string;
  points: number;
}

// Definer typerne for CharacterContext
interface CharacterContextType {
  character: string | null;
  setCharacter: (characterSrc: string) => void;
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  completedTasks: Task[]; // Ny liste for færdige opgaver
  addCompletedTask: (task: Task) => void; // Tilføj funktion for færdige opgaver
  addTaskToFilter: boolean;  // State for filter status
  setAddTaskToFilter: (value: boolean) => void;  // Funktion til at ændre filter status
}

// Opret en standardværdi for parametrene
const defaultContext: CharacterContextType = {
  character: null,
  setCharacter: () => {},
  tasks: [],
  setTasks: () => {},
  completedTasks: [],
  addCompletedTask: () => {},
  addTaskToFilter: false,  // Initial state for filter
  setAddTaskToFilter: () => {},  // Placeholder funktion for setAddTaskToFilter
};

// Opret et context
export const CharacterContext = createContext<CharacterContextType>(defaultContext);

// Opret en CharacterProvider komponent
export const CharacterProvider = ({ children }: { children: ReactNode }) => {
  const [character, setCharacter] = useState<string | null>(
    () => localStorage.getItem("selectedCharacter")
  );

  // indlæs tasks fra localStorage
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : []; // returnerer tom liste, hvis der ikke er gemte tasks
  });

  const [completedTasks, setCompletedTasks] = useState<Task[]>(() => {
    const savedCompletedTasks = localStorage.getItem("completedTasks");
    return savedCompletedTasks ? JSON.parse(savedCompletedTasks) : [];
  });

  const [addTaskToFilter, setAddTaskToFilter] = useState<boolean>(false);  // Ny state for addTaskToFilter

  const addCompletedTask = (task: Task) => {
    setCompletedTasks((prevCompletedTasks) => {
      const updatedTasks = [...prevCompletedTasks, task];
      localStorage.setItem("completedTasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  // Opdater localStorage, når karakter ændres
  useEffect(() => {
    if (character) {
      localStorage.setItem("selectedCharacter", character);
    }
  }, [character]);

  // Opdater localStorage, når tasks tilføjes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Opdater localStorage, når completedTasks ændres
  useEffect(() => {
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
  }, [completedTasks]);

  return (
    <CharacterContext.Provider
      value={{
        character,
        setCharacter,
        tasks,
        setTasks,
        completedTasks,
        addCompletedTask,
        addTaskToFilter, // Ny værdi for addTaskToFilter
        setAddTaskToFilter, // Ny funktion for setAddTaskToFilter
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

