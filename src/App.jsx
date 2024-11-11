import { useState } from 'react'
import Login from './login/Login'
import WelcomeMessage from './login/WelcomeMessage';
import { LoginContext } from './context/LoginContext';
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
