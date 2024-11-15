import React, { useContext, useState } from 'react';
import { CharacterContext } from "../context/CharacterContext"; 
import { Link } from 'react-router-dom';

import character1 from '../assets/characters/character1.png';
import character2 from '../assets/characters/character2.png';
import character3 from '../assets/characters/character3.png';
import character4 from '../assets/characters/character4.png';
import character5 from '../assets/characters/character5.png';
import character6 from '../assets/characters/character6.png';
import character7 from '../assets/characters/character7.png';
import character8 from '../assets/characters/character8.png';
import character9 from '../assets/characters/character9.png';
import character10 from '../assets/characters/character10.png';
import character11 from '../assets/characters/character11.png';
import character12 from '../assets/characters/character12.png';
import character13 from '../assets/characters/character13.png';
import character14 from '../assets/characters/character14.png';
import character15 from '../assets/characters/character15.png';

// Importer flere karakterbilleder, hvis nødvendigt.

function Character() {
  const { setCharacter } = useContext(CharacterContext);
  const [selectedCharacter, setSelectedCharacter] = useState(null);


  const characters = [
    { id: 1, src: character1, alt: 'Pige' },
    { id: 2, src: character2, alt: 'Dreng' },
    { id: 3, src: character3, alt: 'Egern' },
    { id: 4, src: character4, alt: 'Fisk' },
    { id: 5, src: character5, alt: 'Pige' },
    { id: 6, src: character6, alt: 'Dreng' },
    { id: 7, src: character7, alt: 'Pige' },
    { id: 8, src: character8, alt: 'Dreng' },
    { id: 9, src: character9, alt: 'Pige' },
    { id: 10, src: character10, alt: 'Dreng' },
    { id: 11, src: character11, alt: 'Pige' },
    { id: 12, src: character12, alt: 'Dreng' },
    { id: 13, src: character13, alt: 'Pige' },
    { id: 14, src: character14, alt: 'Dreng' },
    { id: 15, src: character15, alt: 'Pige' },
    // Tilføj flere karakterer her.
  ];

  // Funktion til at håndtere, når en karakter vælges
  const handleCharacterClick = (characterId, characterSrc) => {
    setSelectedCharacter(characterId);  // Sætter den valgte karakter
    setCharacter(characterSrc);
  };

  return (
    <div className='center'>
      <h1>Vælg din karakter</h1>
      <div className="character-selection">
        {characters.map((character) => (
          <div
            key={character.id}
            className={`character ${selectedCharacter === character.id ? 'selected' : ''}`}
            onClick={() => {
              handleCharacterClick(character.id, character.src)
            }}
          >
            <img
              src={character.src}
              alt={character.alt}
            />
          </div>
        ))}
      </div>
      <Link 
        to={`${selectedCharacter ? "/mood" : ""}`} 
        className={`buttonBottom button ${!selectedCharacter ? "disabled" : ""}`} 
      > 
        Kom i gang
      </Link>
    </div> 
  );
}

export default Character;
