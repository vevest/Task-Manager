import React, { useContext } from "react";
import { LoginContext } from "../Context/LoginContext";
import smileCircle from '../Assets/smileCircle.png';
import smileFace from '../Assets/smileFace.png';


function Login() {
  const { name, setName, setShowName } = useContext(LoginContext);

  const handleChance = (e) => {
    const value = e.target.value;
    setName(value); 
  }

  const handleSubmit = (e) => {
    e.preventDefault();  // Forhindrer sideopdatering
    if (name) {
      setShowName(true); // Sætter showName til true, hvis setName har en værdi
    }
  }

  return (
    <>
      <div className='logo'>
      <img src={smileCircle} alt="Smile" className='smileCircle' /> 
      <img src={smileFace} alt="Smile" className='smileFace' />
      </div>
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Navn' onChange={handleChance} />
      <button type='submit'>Login</button>
      </form> 
    </>
  )
}

export default Login;