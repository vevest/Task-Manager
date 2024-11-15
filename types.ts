// types.ts eller lignende
export interface AddTaskFunction {
    category: string;
    setCategory: (value: string) => void;
    taskName: string;
    setTaskName: (value: string) => void;
    points: number;
    setPoints: (value: number) => void;
  }
  

  