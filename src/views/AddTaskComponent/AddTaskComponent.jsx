import "./addTask.css";

import useAddTask from "../../hooks/useAddTask";

import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import InputComponent from "../../components/InputComponent/InputComponent";

function AddTaskComponent() {
  const addTask = useAddTask();

  return (
    <form>
      <label htmlFor="add-task">Nueva Tarea:</label>
      <InputComponent id="new-task" name="add-task" />
      <ButtonComponent onClick={addTask}>Agregar</ButtonComponent>
    </form>
  );
}

export default AddTaskComponent;
