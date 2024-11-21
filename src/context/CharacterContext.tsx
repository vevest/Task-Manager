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
    () => localStorage.getItem("selectedCharacter"));
  const [tasks, setTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);
  const [addTaskToFilter, setAddTaskToFilter] = useState<boolean>(false);  // Ny state for addTaskToFilter

  const addCompletedTask = (task: Task) => {
    setCompletedTasks((prev) => [...prev, task]);  // Tilføjer den færdige opgave til completedTasks
  };

  // Opdater localStorage, når character ændres
  useEffect(() => {
    if (character) {
      localStorage.setItem("selectedCharacter", character);
    }
  }, [character]);

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
    }}>
      {children}
    </CharacterContext.Provider>
  );
};
