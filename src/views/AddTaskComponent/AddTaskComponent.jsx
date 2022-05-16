import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import useAddTask from "../../hooks/useAddTask";
import "./addTask.css";

function AddTaskComponent() {
  const addTask = useAddTask();

  return (
    <form>
      <label htmlFor="add-task">Nueva Tarea:</label>
      <input type="text" id="new-task" name="add-task" />
      <ButtonComponent onClick={addTask}>Agregar</ButtonComponent>
    </form>
  );
}

export default AddTaskComponent;
