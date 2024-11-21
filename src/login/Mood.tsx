import { Link } from 'react-router-dom';

import smileCircle from '../assets/smileCircle.png';
import smileFace from '../assets/smileFace.png';
import sadSmile from '../assets/sadSmile.png';
import neutralSmile from '../assets/neutralSmile.png';
import happySmile from '../assets/happySmile.png';

// Opret array med citater
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
  "\"Det er ikke vigtigt, hvor hurtigt du går, så længe du ikke stopper.\" – Confucius"
];

function Mood() {
  // Randomisér citatet
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className='containerMood'>
      <div className='logo'>
        <img src={smileCircle} alt="Smile" className='smileCircle' aria-hidden="true" />
        <img src={smileFace} alt="Smile" className='smileFace' aria-hidden="true" />
      </div>
      <p id="question">Hvordan har din dag været?</p>

      {/* Mood-smiley billeder med aria-labels */}
      <div className='moodBox'>
        <Link to='/homepage' aria-label="Jeg er glad">
          <img src={happySmile} alt="Happy Smile" />
        </Link>
        <Link to='/homepage' aria-label="Jeg føler mig neutral">
          <img src={neutralSmile} alt="Neutral Smile" />
        </Link>
        <Link to='/homepage' aria-label="Jeg er trist">
          <img src={sadSmile} alt="Sad Smile" />
        </Link>
      </div>
      
    </div>
  );
}

export default Mood;
