import { useState, useEffect } from "react";

function Water() {
  const [water, setWater] = useState(0);

    // Læs localStorage, når komponenten indlæses første gang
    useEffect (() => {
      const savedWater = localStorage.getItem("dailyWater");
      if (savedWater) {
        setWater(parseInt(savedWater, 10)); //10 er basen (radix), der angiver, hvilket talsystem der skal bruges til at fortolke strengen.
      }
    }, []);

    // Funktion til at reducere vandet
    const decreaseWater = () => {
      if (water > 0) {
        const newWater = water - 1; // Træk 1 fra
        setWater(newWater);
        localStorage.setItem("dailyWater", newWater); // Gem i localStorage
      }
    };
  
    // Funktion til at øge vandet
    const increaseWater = () => {
      const newWater = water + 1; // Tilføj 1 til
      setWater(newWater);
      localStorage.setItem("dailyWater", newWater); // Gem i localStorage
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