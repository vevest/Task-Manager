import React, { ReactNode, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import { Task } from "../types";  // Importér Task typen

const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // State til at gemme alle opgaver
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskName, setTaskName] = useState<string>("");  // Opgavens navn

  // Funktion til at tilføje en opgave
  const addTask = (task: Task) => {
    setTasks((prevTasks) => [...prevTasks, task]);  // Tilføj den nye opgave til listen
  };

  // Eksempel på kategorier og points (kan også være dynamiske)
  const categories = [
    { label: "Books", value: "Books" },
    { label: "Kitchen", value: "Kitchen" },
    { label: "Wash", value: "Wash" },
    { label: "Clothes", value: "Clothes" },
    { label: "Livingroom", value: "Livingroom" },
    { label: "Bedroom", value: "Bedroom" },
    { label: "Bags", value: "Bags" },
  ];

  const points = [1, 2, 3, 5, 10];

  return (
    <TaskContext.Provider value={{ tasks, addTask, categories, points, taskName, setTaskName }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
