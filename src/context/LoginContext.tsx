import { createContext, useState } from "react";

export const LoginContext = createContext({
    name: "",
    setName: (name: string) => {}, // Placeholder-funktion
    showName: false,
    setShowName: (show: boolean) => {} // Placeholder-funktion
});

export const LoginProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [name, setName] = useState<string>(""); // State til at gemme brugernavnet
    const [showName, setShowName] = useState<boolean>(false); // State til at vise om brugeren er logget ind
  
    return (
      <LoginContext.Provider value={{ name, setName, showName, setShowName }}>
        {children}
      </LoginContext.Provider>
    );
  };