import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { LoginContext } from './context/LoginContext';
import { CharacterContext } from './context/CharacterContext';
import { TaskContext } from './context/TaskContext';

import Login from './login/Login';
import WelcomeMessage from './login/WelcomeMessage';
import Character from './login/Character';
import Mood from './login/Mood';
import Homepage from './pages/Homepage';
import Profile from './pages/Profile';
import Assignments from './pages/Assignments'; // Inkluderer nu Filter
import TaskProvider from "./providers/TaskProvider";
import AddTask from "./assignments/AddTask";

function App() {
  const [name, setName] = useState('');
  const [showName, setShowName] = useState(false);
  const [character, setCharacter] = useState(null);
  const [category, setCategory] = useState('');
  const [taskName, setTaskName] = useState('');
  const [points, setPoints] = useState('');

  return (
    <TaskProvider>
      <TaskContext.Provider value={{ category, setCategory, taskName, setTaskName, points, setPoints }}>
        <CharacterContext.Provider value={{ character, setCharacter }}>
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
                <Route path="/add-task" element={<AddTask />} />
              </Routes>
            </Router>
          </LoginContext.Provider>
        </CharacterContext.Provider>
      </TaskContext.Provider>
    </TaskProvider>
  );
}

export default App;
