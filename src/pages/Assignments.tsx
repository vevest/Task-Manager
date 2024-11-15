import Navbar from "../allComponents/Navbar"
import AddTask from "../assignments/AddTask"
import Filter from "../assignments/Filter"

function Assignments() {

  return (
    <>
      <h1>Assignments</h1>
      <AddTask />
      <Filter />
      <Navbar />
    </>
  )
}

export default Assignments;