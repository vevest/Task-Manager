import { useState, useEffect, Children } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { LoginContext } from './context/LoginContext';
import { CharacterContext } from './context/CharacterContext';
import { CharacterProvider } from './context/CharacterContext';
import { PointsProvider } from './context/PointsContext';  // Importér PointsProvider

import Login from './login/Login';
import WelcomeMessage from './login/WelcomeMessage';
import Character from './login/Character';
import Mood from './login/Mood';
import Homepage from './pages/Homepage';
import Profile from './pages/Profile';
import Assignments from './pages/Assignments'; // Inkluderer nu Filter

interface Task {
  id: number;
  title: string;
  completed: boolean;
  // Tilføj flere felter efter behov
}

interface CharacterContextType {
  character: string | null;
  setCharacter: React.Dispatch<React.SetStateAction<string | null>>;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  addTaskToFilter: boolean;
  setAddTaskToFilter: React.Dispatch<React.SetStateAction<boolean>>;
}

interface LoginContextType {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setShowName: React.Dispatch<React.SetStateAction<boolean>>;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]); // Gemmer opgaver i en liste
  const [name, setName] = useState<string>('');
  const [showName, setShowName] = useState<boolean>(false);
  const [character, setCharacter] = useState<string | null>(null); // Gemmer karakteren som en string eller null
  const [addTaskToFilter, setAddTaskToFilter] = useState<boolean>(false);

  // Hent navn og karakter fra localStorage
  useEffect(() => {
    const savedName = localStorage.getItem("loginName");
    const savedCharacter = localStorage.getItem("selectedCharacter");
    
    if (savedName) {
      setName(savedName);
      setShowName(true);  // Opdater login-status, hvis der er et gemt navn
    }

    if (savedCharacter) {
      setCharacter(savedCharacter);  // Hent og opdater gemt karakter
    }
  }, []);

  return (
    <PointsProvider>
        <CharacterProvider>
          <LoginContext.Provider value={{ name, setName, setShowName }}>
            <Router>
              <Routes>
                {/* Root route */}
                <Route path="/" element={showName ? <WelcomeMessage /> : <Login />} />
                {/* Andre ruter */}
                <Route path="/character" element={<Character />} />
                <Route path="/mood" element={<Mood />} />
                <Route path="/homepage" element={<Homepage />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/assignments" element={<Assignments />} /> {/* Filter er nu inkluderet i Assignments */}
              </Routes>
            </Router>
          </LoginContext.Provider>
        </CharacterProvider>
      </PointsProvider>
  );
}

export default App;
