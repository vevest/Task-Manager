import React, { useContext, useEffect } from "react";
import { LoginContext } from "../context/LoginContext";
import Greeting from "./Greeting"; // Import Greeting-komponenten
import smileCircle from '../assets/smileCircle.png';
import smileFace from '../assets/smileFace.png';

const Login: React.FC = () => {
  const { name, setName, setShowName, showName } = useContext(LoginContext);

  // Tjekker, om der er gemt et navn i localStorage, når komponenten indlæses
  useEffect(() => {
    const savedName = localStorage.getItem("loginName"); // Hent gemt navn fra localStorage
    if (savedName) {
      setName(savedName); // Opdater context med det gemte navn
      setShowName(true);  // Sæt brugeren som "logget ind"
    }
  }, [setName, setShowName]);

  // Håndterer ændringer i inputfeltet
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value); // Opdater context med det nye navn
  };

  // Håndterer loginformularens indsendelse
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Forhindrer sidegenindlæsning
    if (name) {
      localStorage.setItem("loginName", name); // Gem navnet i localStorage
      setShowName(true); // Skift til logged-in tilstand
    }
  };

  return (
    <>
      {/* Hvis showName er false, vises login-formularen */}
      {!showName ? (
        <>
          <div className="logo">
            <img 
              src={smileCircle} 
              alt="Smile" 
              className="smileCircle" 
              aria-hidden="true" // Gør smilet billede ikke-væsentligt for skærmlæsere
            />
            <img 
              src={smileFace} 
              alt="Smile" 
              className="smileFace" 
              aria-hidden="true" // Gør smilet billede ikke-væsentligt for skærmlæsere
            />
          </div>

          <form onSubmit={handleSubmit} aria-labelledby="login-form" role="form">
            <label htmlFor="name" className="sr-only">Indtast dit navn</label> {/* Skjult label for skærmlæsere */}
            <input 
              type="text" 
              id="name"
              placeholder="Navn" 
              onChange={handleChange} 
              value={name || ""} // Sikrer, at inputfeltet viser navnet fra context
              aria-required="true" // Markerer feltet som påkrævet
            />
            <button 
              type="submit" 
              className={`${!name ? "disabled" : ""}`} 
              disabled={!name} // Deaktiverer knappen, hvis der ikke er noget navn
              aria-disabled={name ? "false" : "true"} // Forbedrer tilgængelighed ved at angive knapens tilstand
            >
              Login
            </button>
          </form>
        </>
      ) : (
        // Hvis showName er true, vis Greeting-komponenten
        <Greeting />
      )}
    </>
  );
};

export default Login;
