import { useState } from "react";

function Water() {
  const [water, setWater] = useState(0);

    // Funktion til at reducere vandet
    const decreaseWater = () => {
      if (water > 0) {
        setWater(water - 1); // Træk 1 fra
      }
    };
  
    // Funktion til at øge vandet
    const increaseWater = () => {
      setWater(water + 1); // Tilføj 1 til
    };
  

  return(
    <div className="framedContent">
      <p>Glas vand i dag: {water}</p>
      <div className="flexSA">
        <button className="water-plus" onClick={decreaseWater}><p>-</p></button>
        <p className="water-icon">💧</p>
        <button className="water-minus" onClick={increaseWater}><p>+</p></button>
      </div>

    </div>
  )
}

export default Water;