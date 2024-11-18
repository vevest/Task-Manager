/* import React, { useState, useEffect } from 'react';

// Ugentlige points + level system
// Skal opdateres, basis kode for nu...

// Få den aktuelle ugedag
const getCurrentDay = () => {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date();
  return daysOfWeek[today.getDay()];
};

// Beregne niveau baseret på points
const getLevel = (points: number) => {
  return Math.floor(points / 1000);
};

const Points: React.FC = () => {
  const [weeklyPoints, setWeeklyPoints] = useState<number>(0);
  const [totalPoints, setTotalPoints] = useState<number>(0);
  const [level, setLevel] = useState<number>(0);

  useEffect(() => {
    const currentDay = getCurrentDay();

    // Hvis det er mandag, nulstilles de ugentlige points
    if (currentDay === 'Monday') {
      setWeeklyPoints(0);
    }

    // Opdater niveau baseret på samlede points
    setLevel(getLevel(totalPoints));
  }, [totalPoints]);

  // Funktion til at opdatere ugentlige points
  const addWeeklyPoints = (points: number) => {
    const newWeeklyPoints = weeklyPoints + points;
    setWeeklyPoints(newWeeklyPoints);
    setTotalPoints(totalPoints + points);
  };

  return (
    <div>
      <h1>Points System</h1>
      <h2>Ugentlige points: {weeklyPoints}</h2>
      <h2>Samlede points: {totalPoints}</h2>
      <h2>Level: {level}</h2>
    </div>
  );
};

export default Points;
