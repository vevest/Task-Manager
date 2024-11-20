import { useContext } from "react";
import { CharacterContext } from "../context/CharacterContext";
import Filter from "src/assignments/Filter";

function LastDone() {
  const { completedTasks } = useContext(CharacterContext); // Hent completedTasks fra contexten

  return (
    <div className="last-done-container baseContent">
      <h2>Sidst Gjorte Opgaver</h2>
      <ul>
        {completedTasks.length === 0 ? (
          <p>Ingen opgaver er færdiggjort endnu.</p> // Hvis der ikke er nogen færdige opgaver
        ) : (
          completedTasks.map((task) => (
            <li key={task.id}>
              <p>
                {task.name} - {task.category} - {task.points}⚡️
              </p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default LastDone;
