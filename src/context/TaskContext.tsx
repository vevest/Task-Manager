import { createContext } from "react";
import { Task } from "../types";

// Definér en type for TaskContext
export interface TaskContextType {
  tasks: Task[];  // Liste over opgaver
  addTask: (task: Task) => void;  // Funktion til at tilføje opgaver
  categories: { label: string; value: string }[];  // Kategorier til opgaver
  points: number[];  // Mulige points-værdier
  taskName: string;  // Opgavens navn
  setTaskName: React.Dispatch<React.SetStateAction<string>>;  // Funktion til at ændre taskName
}

// Opret konteksten med standardværdier
export const TaskContext = createContext<TaskContextType | undefined>(undefined);
