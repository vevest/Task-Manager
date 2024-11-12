import { useState } from 'react'
import { LoginContext } from './context/LoginContext';
import { CharacterContext } from './context/CharacterContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { TaskContext } from './context/TaskContext';

import Login from './login/Login';
import WelcomeMessage from './login/WelcomeMessage'; 
import Character from './login/Character';
import Mood from './login/Mood'; 
import Homepage from './pages/Homepage';
import Profile from './pages/Profile';
import Assignments from './pages/Assignments';

 
function App() {
  const [name, setName] = useState('');
  const [showName, setShowName] = useState(false);
  const [character, setCharacter] = useState(null);
  const [category, setCategory] = useState('');
  const [taskName, setTaskName] = useState('');
  const [points, setPoints] = useState('');

  return (
    <TaskContext.Provider value={{category, setCategory,taskName, setTaskName,points,setPoints}}>
      <CharacterContext.Provider value={{ character, setCharacter }}>
        <LoginContext.Provider value={{ name, setName, setShowName }}>
          <Router>
            <Routes>
              <Route path="/" element={showName ? <WelcomeMessage /> : <Login />} />
              <Route path="/character" element={<Character />} />
              <Route path="/mood" element={<Mood />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/homepage" element={<Homepage />} />
              <Route path="/assignments" element={<Assignments />} /> 
            </Routes>
          </Router>
        </LoginContext.Provider>
      </CharacterContext.Provider>
    </TaskContext.Provider>
  )
}



export default App
