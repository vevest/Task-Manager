import React, { createContext, useState, ReactNode } from 'react';

// Definer typerne for CharacterContext
interface CharacterContextType {
  character: string | null;
  setCharacter: (characterSrc: string) => void;
}

// Opret en standardværdi for contexten
const defaultContext: CharacterContextType = {
  character: null,
  setCharacter: () => {},
};

// Opret et context
export const CharacterContext = createContext<CharacterContextType>(defaultContext);

// Opret en CharacterProvider komponent
export const CharacterProvider = ({ children }: { children: ReactNode }) => {
  const [character, setCharacter] = useState<string | null>(null);

  return (
    <CharacterContext.Provider value={{ character, setCharacter }}>
      {children}
    </CharacterContext.Provider>
  );
};