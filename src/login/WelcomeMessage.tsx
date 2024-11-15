import React, { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { Link } from 'react-router-dom';

function WelcomeMessage() {
  const {name} = useContext(LoginContext);
  return (
    <section className="center">
      <h1>Hej {name} !</h1> 
      <h2>Velkommen til Smile!</h2>
      <div className="boxType1">
        <p className="framedContent">Få styr på din hverdag sammen med os, i forsøget på at gøre hverdagens kedelige gøremål sjovere! </p>
        <p className="framedContent">Pointsystem for at holde motivationen oppe.</p>
        <p className="framedContent">Motiverende citater</p> 
        <Link className="button buttonBottom" to= '/character'>Gå videre</Link>
      </div>
    </section>
  )
}

export default WelcomeMessage;