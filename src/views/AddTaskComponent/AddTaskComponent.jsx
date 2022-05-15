import { useContext } from "react";
import { TasksContext } from "../TaskListComponent/TaskListComponent";
import "./addTask.css";

function AddTaskComponent() {
  const [tasks, setTasks] = useContext(TasksContext);

  /**
   * When the form is submitted, prevent the default action, and return a new array with the new task
   * added to the end of the array.
   * @returns An array with the new task added to the end of the array.
   */
  const addTask = (event) => {
      event.preventDefault();
      const newTask = document.getElementById('new-task');
      const description = newTask.value;

      if (!description) return tasks;

      newTask.value = '';
    return [
      ...tasks,
      { id: tasks.length + 1, description: description },
    ];
  };

  return (
    <form>
      <label htmlFor="add-task">Nueva Tarea:</label>
      <input type="text" id="new-task" name="add-task" />
      <button onClick={(event) => setTasks(addTask(event))}>Agregar</button>
    </form>
  );
}

export default AddTaskComponent;
