import React, { createContext, useState, useEffect, ReactNode } from 'react';

// Definer typerne
type PointsContextType = {
  weeklyPoints: number;
  totalPoints: number;
  addPoints: (points: number) => void;
};

export const PointsContext = createContext<PointsContextType>({
  weeklyPoints: 0, // Standardværdi
  totalPoints: 0,  // Standardværdi
  addPoints: () => {}, // Standard funktion
});

// Props for PointsProvider
type PointsProviderProps = {
  children: ReactNode;
};

export const PointsProvider: React.FC<PointsProviderProps> = ({ children }) => {
  // Hent points fra localStorage, eller brug 0 som standard
  const savedWeeklyPoints = localStorage.getItem("weeklyPoints");
  const savedTotalPoints = localStorage.getItem("totalPoints");

  const [weeklyPoints, setWeeklyPoints] = useState<number>(
    savedWeeklyPoints ? parseInt(savedWeeklyPoints) : 0
  );
  const [totalPoints, setTotalPoints] = useState<number>(
    savedTotalPoints ? parseInt(savedTotalPoints) : 0
  );

  // Nulstil ugentlige points hver mandag kl. 00:00
  useEffect(() => {
    const now = new Date();
    const timeUntilMonday = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + (7 - now.getDay() + 1) % 7, // Beregn næste mandag
      0, 0, 0
    ).getTime() - now.getTime();

    const resetWeeklyPoints = setTimeout(() => {
      setWeeklyPoints(0); // Nulstil points
    }, timeUntilMonday);

    return () => clearTimeout(resetWeeklyPoints); // Ryd op ved komponent unmount
  }, [weeklyPoints]);

  // Funktion til at tilføje points og gemme dem i localStorage
  const addPoints = (points: number) => {
    // Opdaterer weeklyPoints og gemmer i localStorage
    setWeeklyPoints((prev) => {
      const newWeeklyPoints = prev + points;
      localStorage.setItem("weeklyPoints", newWeeklyPoints.toString());
      return newWeeklyPoints;
    });

    // Opdaterer totalPoints og gemmer i localStorage
    setTotalPoints((prev) => {
      const newTotalPoints = prev + points;
      localStorage.setItem("totalPoints", newTotalPoints.toString());
      return newTotalPoints;
    });
  };

  return (
    <PointsContext.Provider value={{ weeklyPoints, totalPoints, addPoints }}>
      {children}
    </PointsContext.Provider>
  );
};
