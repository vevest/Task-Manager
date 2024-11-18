import Navbar from "../allComponents/Navbar"
import React, { useContext } from 'react';
import { CharacterContext } from "../context/CharacterContext"; 
import { LoginContext } from "../context/LoginContext";
import { Link } from "react-router-dom";

function Profile() {
  const { character } = useContext(CharacterContext);
  const { setShowName } = useContext(LoginContext);

  const handleClick = () => {
    setShowName(null);
  }
  return (
    <>
      <h1>Profil</h1>
      <div className="framedContent flex">
        <div className="selectedCharacter">
        <img className="characterProfile" src={character} alt="Det valgte icon" />
        </div>
        <div className="grid">
          <h3>Point i denne uge</h3>
          <h3>120 ⚡️</h3>
        </div>
      </div>
      <div>
          <Link to="/" onClick={handleClick}><h3>Log ud</h3></Link>
      </div>
      
      <Navbar />
    </>
  )
}

export default Profile;