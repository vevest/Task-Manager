{/*import { createContext } from "react";
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
export const TaskContext = createContext<TaskContextType | undefined>(undefined);*/}



// TaskContext med pointsystem
import React, { createContext, useState, ReactNode } from 'react';
import { Task } from '../types'; // Importer din Task type, hvis det er relevant

// Definer TaskContextType med opgaver, points og nødvendige funktioner
export interface TaskContextType {
  tasks: Task[];  // Liste over opgaver
  addTask: (task: Task) => void;  // Funktion til at tilføje opgaver
  weeklyPoints: number;  // Ugentlige points
  totalPoints: number;  // Samlede points
  addPoints: (points: number) => void;  // Funktion til at tilføje points
  resetWeeklyPoints: () => void;  // Funktion til at nulstille ugentlige points
  categories: { value: string; label: string }[];  // Kategorier
  points: number[];  // Points værdier
  taskName: string;  // Opgavens navn
  setTaskName: (name: string) => void;  // Funktion til at opdatere taskName
}

export const TaskContext = createContext<TaskContextType | undefined>(undefined);

const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);  // Liste over opgaver
  const [taskName, setTaskName] = useState<string>('');  // Opgavens navn
  const [weeklyPoints, setWeeklyPoints] = useState<number>(0);  // Ugentlige points
  const [totalPoints, setTotalPoints] = useState<number>(0);  // Samlede points

  // Kategorier og points værdier
  const categories = [
    { value: 'Lav lektier', label: 'Study' },
    { value: 'Tøm skraldet', label: 'Kitchen' },
    { value: 'Ordn vasketøjet', label: 'Wash' },
    { value: 'Fold vasketøj', label: 'Clothes' },
    { value: 'Støvsug stuen', label: 'Livingroom' },
    { value: 'Skift sengetøj', label: 'Bedroom' },
    { value: 'Køb ind', label: 'Shop' },
    // Flere kategorier
  ];

  const points = [5, 10, 15, 20, 25];  // Eksempel på points værdier

  // Funktion til at tilføje opgaver
  const addTask = (task: Task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
    addPoints(task.points);  // Opdater ugentlige og samlede points når en opgave tilføjes
  };

  // Funktion til at tilføje points
  const addPoints = (pointsToAdd: number) => {
    setWeeklyPoints((prev) => prev + pointsToAdd);
    setTotalPoints((prev) => prev + pointsToAdd);
  };

  // Funktion til at nulstille ugentlige points hver mandag
  const resetWeeklyPoints = () => {
    setWeeklyPoints(0);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        weeklyPoints,
        totalPoints,
        addPoints,
        resetWeeklyPoints,
        categories,
        points,
        taskName,
        setTaskName,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
