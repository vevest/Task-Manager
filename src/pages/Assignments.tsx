import Navbar from "../allComponents/Navbar";
import AddTask from "../assignments/AddTask";
import Filter from "../assignments/Filter";

function Assignments() {

  return (
    <>
      <h1>Mine opgaver</h1>
      <p>Vælg eller opret dine egne opgaver og optjen points!</p>
      <Filter />
      <AddTask />
      <Navbar />
    </>
  );
}

export default Assignments;
