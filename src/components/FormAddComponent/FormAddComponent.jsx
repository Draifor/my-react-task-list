import { useContext, useState } from "react";
import { TasksContext } from "../../views/TaskListComponent/TaskListComponent.jsx";

import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export default function FormAddComponent({ isAddTask, setAddTask }) {
  const [tasks, setTasks] = useContext(TasksContext);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [errorValidation, setErrorValidation] = useState('');

  const handleInput = (event) => setNewTaskTitle(event.target.value);
const handleDescription = (event) => setNewTaskDescription(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTaskTitle.length <= 3) return setErrorValidation('El nombre de tarea es demasiado corto')
    else setErrorValidation('');
    setAddTask(false);
    setTasks([
      ...tasks,
      { id: tasks.length, title: newTaskTitle, description: newTaskDescription, status: "pending" },
    ]);
  };

  return (
    <form>
      <label htmlFor="add-task">Nueva Tarea:</label>
      <input
        type="text"
        id="new-task-input"
        name="add-task"
        value={newTaskTitle}
        onChange={handleInput}
        autoFocus
      />
      <textarea
        name="add-task"
        id="new-task-textarea "
        cols="30"
        rows="10"
        value={newTaskDescription}
        onChange={handleDescription}
      ></textarea>
      <ButtonComponent onClick={handleSubmit}>Agregar</ButtonComponent>
      <ButtonComponent onClick={() => setAddTask(false)}>Cancelar</ButtonComponent>
      {errorValidation !== '' && <p>{errorValidation}</p>}
    </form>
  );
}
