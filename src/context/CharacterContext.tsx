import React, { createContext, useState, ReactNode } from 'react';


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
}

// Opret en standardværdi for parametrene 
const defaultContext: CharacterContextType = {
  character: null,
  setCharacter: () => {},
  tasks: [],
  setTasks: () => {},
  completedTasks: [],
  addCompletedTask: () => {},
};

// Opret et context
export const CharacterContext = createContext<CharacterContextType>(defaultContext);

// Opret en CharacterProvider komponent
export const CharacterProvider = ({ children }: { children: ReactNode }) => {
  const [character, setCharacter] = useState<string | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

  const addCompletedTask = (task: Task) => {
    setCompletedTasks((prev) => [...prev, task]);  // Tilføjer den færdige opgave til completedTasks
  };

  return (
    <CharacterContext.Provider value={{ character, setCharacter, tasks, setTasks, completedTasks, addCompletedTask }}>
      {children}
    </CharacterContext.Provider>
  );
};