import { useState } from 'react'
import Login from './Login/Login'
import './App.css'
import WelcomeMessage from './Login/WelcomeMessage';
import { LoginContext } from './Context/LoginContext';
import AddTask from './assignments/AddTask'; 


function App() {
  const [name, setName] = useState('');
  const [showName, setShowName] = useState(false);

  return (
    <>
    <LoginContext.Provider value={{name, setName, setShowName}}>
      {showName ? <WelcomeMessage /> : <Login />}
    </LoginContext.Provider>
    
    </>
  )
}



export default App
