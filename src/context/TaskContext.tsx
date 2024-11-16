import { createContext } from "react";
import { Task, AddCategory, AddPoints } from "../types";

// Definer TaskContextType med de værdier, der skal være tilgængelige
export interface TaskContextType {
  taskName: string;
  setTaskName: React.Dispatch<React.SetStateAction<string>>;
  categories: { label: string; value: string }[]; // Categories type
  points: number[]; // Points type
}

// Opret TaskContext med den definerede type
export const TaskContext = createContext<TaskContextType | undefined>(undefined);

