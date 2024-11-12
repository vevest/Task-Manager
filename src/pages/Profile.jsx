import Navbar from "../allComponents/Navbar"
import React, { useContext } from 'react';
import { CharacterContext } from "../context/CharacterContext"; 

function Profile() {
  const { character } = useContext(CharacterContext);
  return (
    <>
      <h1>Profile</h1>
      <div className="framedContent flex">
        <div className="selectedCharacter">
        <img className="characterProfile" src={character} alt="Det valgte icon" />
        </div>
        <div className="grid">
          <h3>Point i denne uge</h3>
          <h3>120 ⚡️</h3>
        </div>
      </div>
      
      <Navbar />
    </>
  )
}

export default Profile;