import React, { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { Link } from 'react-router-dom';
import getWelcomeMessage from './Greeting'; // Importér funktionen fra Greeting.tsx

function WelcomeMessage() {
  const { name } = useContext(LoginContext); // Hent brugerens navn fra LoginContext
  const welcomeMessage = getWelcomeMessage(name); // Generér dynamisk besked

  return (
    <section className="center">
      <h1>{welcomeMessage}</h1> {/* Dynamisk velkomstbesked */}
      <h2>Velkommen til Smile!</h2>
      <div className="boxType1">
        <p className="framedContent">Få styr på din hverdag sammen med os, i forsøget på at gøre hverdagens kedelige gøremål sjovere! </p>
        <p className="framedContent">Pointsystem for at holde motivationen oppe.</p>
        <p className="framedContent">Motiverende citater</p> 
        <Link to="/character"><button>Gå videre</button></Link>
      </div>
    </section>
  );
}

export default WelcomeMessage;
