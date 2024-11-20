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
            <img src={smileCircle} alt="Smile" className="smileCircle" />
            <img src={smileFace} alt="Smile" className="smileFace" />
          </div>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Navn" 
              onChange={handleChange} 
              value={name || ""} // Sikrer, at inputfeltet viser navnet fra context
            />
            <button 
              type="submit" 
              className={`${!name ? "disabled" : ""}`} // Deaktiver knap, hvis der ikke er indtastet navn
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
