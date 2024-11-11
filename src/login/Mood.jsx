import smileCircle from '../assets/smileCircle.png';
import smileFace from '../assets/smileFace.png';

function Mood() {


  return (
    <div className='center'>
      <p>Husk hver dag er en ny chance for at nå dine mål.</p>
      <div className='logo'>
        <img src={smileCircle} alt="Smile" className='smileCircle' /> 
        <img src={smileFace} alt="Smile" className='smileFace' />
      </div>
      <p>Hvordan har din dag været?</p>
      <div className='moodBox'>
        <img src={smileFace} alt="Smile" className='smileCircle' />
        <img src={smileFace} alt="Smile" className='smileCircle' />
        <img src={smileFace} alt="Smile" className='smileCircle' />
      </div>
    </div>
  );
}

export default Mood;
