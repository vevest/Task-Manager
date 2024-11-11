import React, { useContext } from "react";
import { LoginContext } from "../Context/LoginContext";

function WelcomeMessage() {
  const { name } = useContext(LoginContext);
  return (
    <section>
      <h1>Hej {name} !</h1> 
      <h2>Velkommen til Smile!</h2>
      <div className="boxType1">
        <p className="framedContent">Få styr på din hverdag sammen med os, i forsøget på at gøre hverdagens kedelige gøremål sjovere! </p>
        <p className="framedContent">Pointsystem for at holde motivationen oppe.</p>
        <p className="framedContent">Motiverende citater</p>
        <button className="buttonBottom">Gå videre</button>
      </div>
    </section>
  )
}

export default WelcomeMessage;