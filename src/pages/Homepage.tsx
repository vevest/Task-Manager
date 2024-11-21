import Navbar from "../allComponents/Navbar";
import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { LoginContext } from "../context/LoginContext";
import { CharacterContext } from "../context/CharacterContext";
import { PointsContext } from '../context/PointsContext'; // Import PointsContext

function Homepage() {
  const { character } = useContext(CharacterContext);
  const { name } = useContext(LoginContext);
  const { tasks } = useContext(CharacterContext);
  const { weeklyPoints } = useContext(PointsContext); // Hent ugentlige points fra PointsContext


    // Array med citater
    const quotes = [
      "\"Succes er ikke endeligt, fiasko er ikke fatalt: Det er modet til at fortsætte, der tæller.\" – Winston Churchill",
      "\"Det, du gør i dag, kan forbedre din morgen.\" – Ralph Marston",
      "\"Det eneste, der står imellem dig og dit mål, er de vilkår, du giver dig selv.\" – Brian Tracy",
      "\"Tag små skridt i den rigtige retning, og du vil nå langt.\" – Ukendt",
      "\"Gør det, du kan, med det du har, hvor du er.\" – Theodore Roosevelt",
      "\"Den bedste tid at plante et træ var for 20 år siden. Den næstbedste tid er nu.\" – Kinesisk ordsprog",
      "\"Det er ikke, hvad du gør, men hvordan du gør det.\" – Tony Robbins",
      "\"Vær ikke bange for at fejle. Vær bange for at du ikke prøver.\" – Ukendt",
      "\"Hver dag er en ny chance for at ændre dit liv.\" – Ukendt",
      "\"Når du føler, at du er på kanten af at give op, er du kun én lille indsats væk fra at komme videre.\" – Ukendt",
      "\"Kraften til at skabe er i dine hænder.\" – Ukendt",
      "\"Tingene sker ikke for dig. De sker for, hvad du gør med dem.\" – Ukendt",
      "\"Livet handler ikke om at vente på stormen, men om at lære at danse i regnen.\" – Ukendt",
      "\"Det er ikke vigtigt, hvor hurtigt du går, så længe du ikke stopper.\" – Confucius",
    ];
  
    // Randomisér citatet
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  // Funktion til at returnere den tidsbestemte velkomstbesked
  const getGreeting = () => {
    const currentHour = new Date().getHours(); // Få den nuværende time på dagen
    if (currentHour >= 4 && currentHour < 9) {
      return `God morgen ${name}! 🌅`; // Morgen (04:00 - 08:59)
    } else if (currentHour >= 9 && currentHour < 12) {
      return `God formiddag ${name}! ☕`; // Formiddag (09:00 - 11:59)
    } else if (currentHour >= 12 && currentHour < 18) {
      return `God dag ${name}! ☀️`; // Dag (12:00 - 17:59)
    } else if (currentHour >= 18 && currentHour < 24) {
      return `God aften ${name}! 🌆`; // Aften (18:00 - 23:59)
    } else {
      return `Nårh, er du en natteravn, ${name}? 🌙`; // Nat (00:00 - 03:59)
    }
  };

  return (
    <div className="containerHomepage">
      <div className="homepage-msg">
        <h1>{getGreeting()}</h1> {/* Brug getGreeting() til at vise den tidsbestemte besked */}
        <h2>Velkommen tilbage</h2>
      </div>
      <div className="selectedCharacter">
        <img className="characterHomepage" src={character} alt="Det valgte icon" />
      </div>
      <div className="gridToFlex-Box2">
                <div className="framedContent">
          <div className="flexSB">
            <h2>4 nyeste opgaver</h2>
            <Link to={"/assignments"}><h2>Se alle</h2></Link>
          </div>
          <ul className="latestAssignments">
            {tasks.length === 0 ? (
              <p className="no-tasks">Ingen opgaver i øjeblikket 🔆</p>
            ) : (
              tasks.slice(-4).map((task) => (
                <li key={task.id} className="task-item">
                  <div className="task-info">
                    <div className="task-category">
                      {task.category}
                    </div>
                    <div className="task-nameAndPoints">
                      <p className="task-name">{task.name}</p>
                      <p className="task-points">{task.points}⚡️</p>
                    </div>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
        <div className="reverse">
          <div className="framedContent">
          <h2 className="textCenter">Point i denne uge</h2>
            {/* Vis dynamiske ugentlige points her */}
          <p className="textCenter pBig">{weeklyPoints} ⚡️</p> {/* Brug de ugentlige points fra konteksten */}
          </div>
          <div className="home-quote">
            <p className="random-quote">{randomQuote}</p> {/* Vis det randomiserede citat */}
          </div>
        </div>
        
      </div>

      <Navbar />
    </div>
  );
}

export default Homepage;
