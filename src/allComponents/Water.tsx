import { useState, useEffect } from "react";

function Water() {
  const [water, setWater] = useState(0);

  // Læs localStorage, når komponenten indlæses første gang
  useEffect(() => {
    const savedWater = localStorage.getItem("dailyWater");
    const savedDate = localStorage.getItem("lastUpdatedDate");

    const today = new Date().toDateString(); // Hent dags dato

    if (savedDate === today) {
      // Hvis dato ikke er ændret (efter 00:00), hent gemt antal glas
      if (savedWater) {
        setWater(parseInt(savedWater, 10)); //10 er basen (radix), der angiver, hvilket talsystem der skal bruges til at fortolke strengen.
      }
    } else {
      // Hvis det er en ny dag, nulstil
      setWater(0);
      localStorage.setItem("dailyWater", "0");
      localStorage.setItem("lastUpdatedDate", today);
    }
  }, []);

  // Funktion til at reducere vandet
  const decreaseWater = () => {
    if (water > 0) {
      const newWater = water - 1; // Træk 1 fra
      setWater(newWater);
      localStorage.setItem("dailyWater", newWater.toString()); // Gem i localStorage
    }
  };

  // Funktion til at øge vandet
  const increaseWater = () => {
    const newWater = water + 1; // Tilføj 1 til
    setWater(newWater);
    localStorage.setItem("dailyWater", newWater.toString()); // Gem i localStorage
  };

  return (
    <div className="framedContent">
      <p id="waterAmount" aria-live="polite">Glas vand i dag: {water}</p>
      <div className="flexSA">
        <button
          className="water-plus"
          onClick={decreaseWater}
          aria-label="Reduce water"
          disabled={water === 0} // Deaktiver knappen, når vandmængden er 0
          aria-disabled={water === 0 ? "true" : "false"} // Angiver at knappen er deaktiveret
        >
          <p><i className="fa-solid fa-minus"></i></p>
        </button>
        <p className="water-icon" aria-hidden="true">💧</p>
        <button
          className="water-minus"
          onClick={increaseWater}
          aria-label="Increase water"
        >
          <p><i className="fa-solid fa-plus"></i></p>
        </button>
      </div>
    </div>
  );
}

export default Water;
