import { useState } from 'react'
import { LoginContext } from './context/LoginContext';

import Login from './login/Login'
import WelcomeMessage from './login/WelcomeMessage';
import AddTask from './assignments/AddTask'; 
import Character from './login/Character';
import Mood from './login/Mood';


function App() {
  return (
    <>
      <Character />
      {/* <Mood /> */} 
    </>
  )
  // const [name, setName] = useState('');
  // const [showName, setShowName] = useState(false);

  // return (
  //   <>
  //   <LoginContext.Provider value={{name, setName, setShowName}}>
  //     {showName ? <WelcomeMessage /> : <Login />}
  //   </LoginContext.Provider>
    
  //   </>
  // )
}



export default App
