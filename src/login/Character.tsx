import React, { useContext, useState, useEffect } from 'react';
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

interface CharacterType {
  id: number;
  src: string;
  alt: string;
}

function Character() {
  const { setCharacter } = useContext(CharacterContext);
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);

  const characters: CharacterType[] = [
    { id: 1, src: character1, alt: 'Hest' },
    { id: 2, src: character2, alt: 'Kanin' },
    { id: 3, src: character3, alt: 'Egern' },
    { id: 4, src: character4, alt: 'Fisk' },
    { id: 5, src: character5, alt: 'Frø' },
    { id: 6, src: character6, alt: 'Hund' },
    { id: 7, src: character7, alt: 'Bjørn' },
    { id: 8, src: character8, alt: 'Løve' },
    { id: 9, src: character9, alt: 'Ugle' },
    { id: 10, src: character10, alt: 'Kat' },
    { id: 11, src: character11, alt: 'Hamster' },
    { id: 12, src: character12, alt: 'Elefant' },
    { id: 13, src: character13, alt: 'Zebra' },
    { id: 14, src: character14, alt: 'Giraf' },
    { id: 15, src: character15, alt: 'Gris' },
  ];

  // Hent karakter fra localStorage
  useEffect(() => {
    const savedCharacter = localStorage.getItem('selectedCharacter');
    if (savedCharacter) {
      setSelectedCharacter(savedCharacter);
      setCharacter(savedCharacter);  // Opdater CharacterContext med den gemte karakter
    }
  }, [setCharacter]);

  // Funktion til at håndtere, når en karakter vælges
  const handleCharacterClick = (characterId: number, characterSrc: string) => {
    setSelectedCharacter(characterSrc);  // Sætter den valgte karakter
    setCharacter(characterSrc);
    localStorage.setItem('selectedCharacter', characterSrc); // Gemmer karakterbilledet i localStorage
  };

  return (
    <div className='center'>
      <h1 id="character-selection-heading">Vælg din karakter</h1>
      <div className="character-selection" role="region" aria-labelledby="character-selection-heading">
        {characters.map((character) => (
          <div
            key={character.id}
            className={`character ${selectedCharacter === character.src ? 'selected' : ''}`}
            onClick={() => handleCharacterClick(character.id, character.src)}
            role="button"
            tabIndex={0} // Gør karakterbillederne tastaturvenlige
            aria-label={`Vælg ${character.alt}`}
            onKeyPress={(e) => e.key === 'Enter' && handleCharacterClick(character.id, character.src)} // Tillader tastaturinteraktion
          >
            <img
              src={character.src}
              alt={character.alt}
              role="img"
              aria-label={character.alt}
            />
          </div>
        ))}
      </div>
      <Link 
        to={`${selectedCharacter ? "/mood" : ""}`} 
        aria-disabled={!selectedCharacter} // Deaktiverer linket, hvis ingen karakter er valgt
      >
        <button 
          className={`buttonBottom ${!selectedCharacter ? "disabled" : ""}`} 
          disabled={!selectedCharacter} // Deaktiverer knappen, hvis ingen karakter er valgt
          aria-label="Kom i gang"
        >
          Kom i gang
        </button>
      </Link>
    </div> 
  );
}

export default Character;
