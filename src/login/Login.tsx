import React, { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import Greeting from "./Greeting"; // Import Greeting-komponenten
import smileCircle from '../assets/smileCircle.png';
import smileFace from '../assets/smileFace.png';

const Login: React.FC = () => {
  const { name, setName, setShowName, showName } = useContext(LoginContext);

  const handleChance = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value); 
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name) {
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
              onChange={handleChance} 
            />
            <button 
              type="submit" 
              className={`${!name ? "disabled" : ""}`}
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
