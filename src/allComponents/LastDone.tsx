import { useContext } from "react";
import { CharacterContext } from "../context/CharacterContext";
import Filter from "src/assignments/Filter";

function LastDone() {
  const { completedTasks } = useContext(CharacterContext); // Hent completedTasks fra contexten

  return (
    <>
    <h2>Sidst gjort</h2>
    <div className="last-done-container baseContent">
      <ul>
        {completedTasks.length === 0 ? (
          <p>Ingen opgaver er færdiggjort endnu 😢</p> // Hvis der ikke er nogen færdige opgaver
        ) : (
          completedTasks.slice(-5).map((task) => (
            <li key={task.id} className="task-item">
            <div className='task-info'>
              <div className="task-category">
                {task.category}
              </div>
              <div className="task-nameAndPoints">
                <p className="task-name">{task.name}</p>
                <p className="task-points">{task.points}⚡️</p>
              </div>
            </div>
          </li>
          ))
        )}
      </ul>
    </div>
  </>

  );
}

export default LastDone;
