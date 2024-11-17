import Navbar from "../allComponents/Navbar";
import React, { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { CharacterContext } from "../context/CharacterContext";

function Homepage() {
  const { character } = useContext(CharacterContext);
  const { name } = useContext(LoginContext);

  // Funktion til at returnere den tidsbestemte velkomstbesked
  const getGreeting = () => {
    const currentHour = new Date().getHours(); // Få den nuværende time på dagen
    if (currentHour >= 4 && currentHour < 9) {
      return `God morgen ${name}! 👏`; // Morgen (04:00 - 08:59)
    } else if (currentHour >= 9 && currentHour < 12) {
      return `God formiddag ${name}! 👏`; // Formiddag (09:00 - 11:59)
    } else if (currentHour >= 12 && currentHour < 18) {
      return `God dag ${name}! 👏`; // Dag (12:00 - 17:59)
    } else if (currentHour >= 18 && currentHour < 24) {
      return `God aften ${name}! 👏`; // Aften (18:00 - 23:59)
    } else {
      return `God nat ${name}! 👏`; // Nat (00:00 - 03:59)
    }
  };

  return (
    <>
      <h1>{getGreeting()}</h1> {/* Brug getGreeting() til at vise den tidsbestemte besked */}
      <h2>Velkommen tilbage</h2>
      <div className="selectedCharacter">
        <img className="characterHomepage" src={character} alt="Det valgte icon" />
      </div>
      <Navbar />
    </>
  );
}

export default Homepage;
