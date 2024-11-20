import Navbar from "../allComponents/Navbar";
import Level from "../allComponents/Level";
import LastDone from "../allComponents/LastDone";
import PointsOverviewWeek from "../allComponents/PointsOverviewWeek";
import React, { useContext, useEffect } from 'react';
import { CharacterContext } from "../context/CharacterContext"; 
import { LoginContext } from "../context/LoginContext";
import { Link } from "react-router-dom";
import { PointsContext } from '../context/PointsContext'; // Import PointsContext

function Profile() {
  const { name, setShowName } = useContext(LoginContext);  // Hent login-navnet
  const { character } = useContext(CharacterContext); // Hent karakterbillede
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
      <div className="framedContent flex">
        <div className="selectedCharacter">
          <img className="characterProfile" src={character} alt="Det valgte icon" />
        </div>
        <div className="grid">
          <h3>Point i denne uge</h3>
          {/* Vis dynamiske ugentlige points her */}
          <h3>{weeklyPoints} ⚡️</h3> {/* Brug de ugentlige points fra konteksten */}
        </div>
      </div>
      <PointsOverviewWeek />
      <LastDone />
      <div>
        <Link to="/" onClick={handleClick}>
          <h3>Log ud</h3>
        </Link>
      </div>
      
      <Navbar />
    </>
  );
}

export default Profile;
