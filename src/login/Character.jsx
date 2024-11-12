import React, { useContext, useState } from 'react';
import { CharacterContext } from "../context/CharacterContext"; 
import { Link } from 'react-router-dom';

import character1 from '../assets/character1.png';
import character2 from '../assets/character2.png';
// Importer flere karakterbilleder, hvis nødvendigt.

function Character() {
  const { setCharacter } = useContext(CharacterContext);
  const [selectedCharacter, setSelectedCharacter] = useState(null);


  const characters = [
    { id: 1, src: character1, alt: 'Pige' },
    { id: 2, src: character2, alt: 'Dreng' },
    { id: 3, src: character1, alt: 'Pige' },
    { id: 4, src: character2, alt: 'Dreng' },
    { id: 5, src: character1, alt: 'Pige' },
    { id: 6, src: character2, alt: 'Dreng' },
    { id: 7, src: character1, alt: 'Pige' },
    { id: 8, src: character2, alt: 'Dreng' },
    { id: 9, src: character1, alt: 'Pige' },
    { id: 10, src: character2, alt: 'Dreng' },
    { id: 11, src: character1, alt: 'Pige' },
    { id: 12, src: character2, alt: 'Dreng' },
    { id: 13, src: character1, alt: 'Pige' },
    { id: 14, src: character2, alt: 'Dreng' },
    { id: 15, src: character1, alt: 'Pige' },
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
