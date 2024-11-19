import React, { createContext, useState, useEffect, ReactNode } from 'react';

type PointsContextType = {
  weeklyPoints: number;
  totalPoints: number;
  addPoints: (points: number) => void;
};

export const PointsContext = createContext<PointsContextType | undefined>(undefined);

type PointsProviderProps = {
  children: ReactNode;
};

export const PointsProvider: React.FC<PointsProviderProps> = ({ children }) => {
  const [weeklyPoints, setWeeklyPoints] = useState<number>(0);
  const [totalPoints, setTotalPoints] = useState<number>(0);

  // Nulstil ugentlige points hver mandag kl. 00:00
  useEffect(() => {
    const now = new Date();
    const timeUntilMonday = 
      new Date(now.getFullYear(), now.getMonth(), now.getDate() + (7 - now.getDay() + 1) % 7, 0, 0, 0).getTime() - now.getTime();

    const resetWeeklyPoints = setTimeout(() => setWeeklyPoints(0), timeUntilMonday);

    return () => clearTimeout(resetWeeklyPoints);
  }, [weeklyPoints]);

  const addPoints = (points: number) => {
    setWeeklyPoints((prev) => prev + points);
    setTotalPoints((prev) => prev + points);
  };

  return (
    <PointsContext.Provider value={{ weeklyPoints, totalPoints, addPoints }}>
      {children}
    </PointsContext.Provider>
  );
};