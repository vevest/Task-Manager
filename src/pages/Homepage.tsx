import Navbar from "../allComponents/Navbar";
import React, { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { CharacterContext } from "../context/CharacterContext";

function Homepage() {
  const { character } = useContext(CharacterContext);
  const { name } = useContext(LoginContext);

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
    <>
      <div className="homepage-msg">
      <h1>{getGreeting()}</h1> {/* Brug getGreeting() til at vise den tidsbestemte besked */}
      <h2>Velkommen tilbage</h2>
      </div>
      <div className="selectedCharacter">
        <img className="characterHomepage" src={character} alt="Det valgte icon" />
      </div>
      <div className="home-quote">
      <p className="random-quote">{randomQuote}</p> {/* Vis det randomiserede citat */}
      </div>
      <Navbar />
    </>
  );
}

export default Homepage;
