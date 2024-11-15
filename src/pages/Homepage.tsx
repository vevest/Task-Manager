import Navbar from "../allComponents/Navbar"
import React, { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { CharacterContext } from "../context/CharacterContext"; 

function Homepage() {
  const { character } = useContext(CharacterContext);
  const {name} = useContext(LoginContext);

  return (
    <>
      <h1>Godmorgen {name}!👏 </h1>
      <h2>Velkommen tilbage</h2>
      <div className="selectedCharacter">
        <img className="characterHomepage" src={character} alt="Det valgte icon" />
      </div>
      <Navbar />
    </>
  )
}

export default Homepage;