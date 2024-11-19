import Navbar from "../allComponents/Navbar";
import React, { useContext } from 'react';
import { CharacterContext } from "../context/CharacterContext"; 
import { LoginContext } from "../context/LoginContext";
import { Link } from "react-router-dom";
import { PointsContext } from '../context/PointsContext'; // Import PointsContext

function Profile() {
  const { name } = useContext(LoginContext);  // Hent login-navnet
  const { character } = useContext(CharacterContext); // Hent karakterbillede
  const { setShowName } = useContext(LoginContext); // Håndter loginvisning
  const { weeklyPoints } = useContext(PointsContext); // Hent ugentlige points fra PointsContext

  const handleClick = () => {
    setShowName(null);
  }

  return (
    <>
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
