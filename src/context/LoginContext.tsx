import { createContext, useState, ReactNode } from "react";

// Definer typerne for contexten
interface LoginContextType {
  name: string;
  setName: (name: string) => void;
  showName: boolean;
  setShowName: (show: boolean) => void;
}

// Opret en standardværdi for contexten
const defaultLoginContext: LoginContextType = {
  name: "",
  setName: () => {},
  showName: false,
  setShowName: () => {},
};

// Opret contexten med den korrekte type
export const LoginContext = createContext<LoginContextType>(defaultLoginContext);

export const LoginProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [name, setName] = useState<string>(""); // State til at gemme brugernavnet
  const [showName, setShowName] = useState<boolean>(false); // State til at vise, om brugeren er logget ind
  
  return (
    <LoginContext.Provider value={{ name, setName, showName, setShowName }}>
      {children}
    </LoginContext.Provider>
  );
};
