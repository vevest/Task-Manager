import React, { ReactNode, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import { Task, AddCategory, AddPoints } from "../types"; // Importér både AddCategory og AddPoints fra types.ts

const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [taskName, setTaskName] = useState<string>("");

  return (
    <TaskContext.Provider value={{ taskName, setTaskName, categories: AddCategory, points: AddPoints }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;