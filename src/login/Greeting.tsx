import React, { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const Greeting: React.FC = () => {
  const { name } = useContext(LoginContext);

  const getGreeting = (): string => {
    const now = new Date();
    const hours = now.getHours();

    if (hours >= 4 && hours <= 8) {
      return `God morgen ${name}`;
    } else if (hours >= 9 && hours <= 11) {
      return `God formiddag ${name}`;
    } else if (hours >= 12 && hours <= 17) {
      return `God eftermiddag ${name}`;
    } else if (hours >= 18 && hours <= 23) {
      return `God aften ${name}`;
    } else {
      return `Nårh, er du en natteravn, ${name}?`;
    }
  };

  return (
    <h1
      tabIndex={0} // Gør overskriften tastaturvenlig
      aria-live="polite" // Meddelelsen opdateres dynamisk, og skærmlæsere informerer brugeren
    >
      {getGreeting()}
    </h1>
  );
};

export default Greeting;
