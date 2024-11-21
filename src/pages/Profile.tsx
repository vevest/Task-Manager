import Navbar from "../allComponents/Navbar";
import Level from "../allComponents/Level";
import LastDone from "../allComponents/LastDone";
import Filter from "src/assignments/Filter";
import PointsOverviewWeek from "../allComponents/PointsOverviewWeek";
import React, { useContext, useEffect } from 'react';
import { CharacterContext } from "../context/CharacterContext"; 
import { LoginContext } from "../context/LoginContext";
import { Link } from "react-router-dom";
import { PointsContext } from '../context/PointsContext'; // Import PointsContext

function Profile() {
  const { name, setShowName } = useContext(LoginContext);  // Hent login-navnet
  const { character, completedTasks } = useContext(CharacterContext); // Hent karakterbillede og hente færdige opgaver
  const { weeklyPoints } = useContext(PointsContext); // Hent ugentlige points fra PointsContext

  // Tjek om brugeren er logget ind, når komponenten indlæses
  useEffect(() => {
    const savedName = localStorage.getItem("loginName");
    if (!savedName) {
      setShowName(false); // Hvis der ikke er gemt navn, logg ud
    }
  }, [setShowName]);

  const handleClick = () => {
    setShowName(false);
    localStorage.removeItem("loginName"); // Fjern login-status fra localStorage
  }

  return (
    <>
      <Level />
      <h1>{name}'s uge</h1>
      <div className="gridToFlex-Box2">
        <div className="framedContent flex">
          <div className="selectedCharacter">
            <img
              className="characterProfile"
              src={character || "default-image-path.jpg"} // Tilføjer fallback værdi
              alt={`Billede af valgte karakter: ${character || "Ikon"}`} // Tilføj beskrivende alt-tekst for skærmlæsere
              aria-labelledby="selectedCharacter" // Tilføjer ARIA-label for at beskrive billedet
            />
          </div>
          <div className="grid">
            <h2 id="weekly-points-title">Point i denne uge</h2>
            <p className="pBig" aria-labelledby="weekly-points-title">{weeklyPoints} ⚡️</p> {/* Brug de ugentlige points fra konteksten */}
          </div>
        </div>
        <PointsOverviewWeek />
      </div>
      <LastDone />
      <div className="center">
        <Link to="/" aria-label="Log ud">
          <button onClick={handleClick} aria-labelledby="logout-button">Log ud</button>
        </Link>
      </div>
      <Navbar />
    </>
  );
}

export default Profile;
