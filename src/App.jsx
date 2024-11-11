import { useState } from 'react'
import { LoginContext } from './context/LoginContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import Login from './login/Login';
import WelcomeMessage from './login/WelcomeMessage';
import AddTask from './assignments/AddTask'; 
import Character from './login/Character';
import Mood from './login/Mood';

 
function App() {
  const [name, setName] = useState('');
  const [showName, setShowName] = useState(false);

  return (
    <LoginContext.Provider value={{ name, setName, setShowName }}>
      <Router>
        <Routes>
          <Route path="/" element={showName ? <WelcomeMessage /> : <Login />} />
          <Route path="/character" element={<Character />} />
        </Routes>
      </Router>
    </LoginContext.Provider>
  )
}



export default App
