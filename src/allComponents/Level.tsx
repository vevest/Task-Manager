import { useContext } from 'react';
import { PointsContext } from '../context/PointsContext'; // Import PointsContext

function Level() {
  const { weeklyPoints } = useContext(PointsContext); // Hent ugentlige points fra PointsContext

  // Definer niveauerne og deres pointmål
  const levels = [
    { level: 0, pointsRequired: 100 },
    { level: 1, pointsRequired: 200 },
    { level: 2, pointsRequired: 400 },
    { level: 3, pointsRequired: 800 },
    { level: 4, pointsRequired: 1600 },
    { level: 5, pointsRequired: 3200 },
    { level: 6, pointsRequired: 6400 },
    { level: 7, pointsRequired: 8300 },
    { level: 8, pointsRequired: 14000 },
    { level: 9, pointsRequired: 20000 },
    // Du kan tilføje flere niveauer her
  ];

  // Find det aktuelle niveau baseret på point
  const currentLevel = levels.find((level) => weeklyPoints < level.pointsRequired);
  const nextLevel = currentLevel ? currentLevel.level + 1 : levels.length + 1; // Find næste niveau

  // Find pointmålet for det nuværende niveau og næste niveau
  const currentLevelPoints = currentLevel ? currentLevel.pointsRequired : levels[levels.length - 1].pointsRequired;
  const nextLevelPoints = nextLevel <= levels.length ? levels[nextLevel - 1].pointsRequired : levels[levels.length - 1].pointsRequired;

  // Beregn procenten for fremgang til næste niveau
  const progressToNextLevel = (weeklyPoints / nextLevelPoints) * 100;

  return (
    <div className="level">
      {/* Niveau og punktstatus */}
      <p>Level {currentLevel ? currentLevel.level : levels.length}</p>
      <div className="container">
        <p>{weeklyPoints}/{nextLevelPoints}</p><p>
        <span className="lyn">⚡️</span></p>
        <div 
          className="color" 
          style={{ width: `${progressToNextLevel}%` }}
          role="progressbar" 
          aria-valuenow={weeklyPoints} 
          aria-valuemin={0} 
          aria-valuemax={nextLevelPoints} 
          aria-label={`Progress to next level: ${progressToNextLevel.toFixed(2)}%`}
        >
          {/* Dette er den visuelle progressbar, og den er nu beriget med ARIA information */}
        </div>
      </div>
    </div>
  );
}

export default Level;
