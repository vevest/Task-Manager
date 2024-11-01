import smileCircle from './assets/smileCircle.png';
import smileFace from './assets/smileFace.png';

function App() {
  return (
    <>
    <div className='logo'>
      <img src={smileCircle} alt="Smile" className='smileCircle' /> 
      <img src={smileFace} alt="Smile" className='smileFace' />
    </div>
  

    <form>
    <input type="text" placeholder='Navn' />
    <button type="submit">LOGIN</button>
    </form>
    </>
  )
}

export default App
