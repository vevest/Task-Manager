import { useContext } from "react";
import { CharacterContext } from "../context/CharacterContext";

function LastDone() {
  const { completedTasks } = useContext(CharacterContext);

  return (
    <div className="last-done-container">
      <h2>Sidst Gjorte Opgaver</h2>
      <ul>
        {completedTasks.length === 0 ? (
          <p>Ingen opgaver er færdiggjort endnu.</p>
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
