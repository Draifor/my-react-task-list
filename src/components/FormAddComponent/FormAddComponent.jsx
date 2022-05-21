import './formAdd.css';
import { useContext, useState } from "react";
import { TasksContext } from "../BodyComponent/BodyComponent";

import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import TextAreaComponent from '../TextAreaComponent/TextAreaComponent';
import InputComponent from '../InputComponent/InputComponent';

export default function FormAddComponent({ setAddTask }) {
  const {tasks, setTasks} = useContext(TasksContext);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [errorValidation, setErrorValidation] = useState('');

  const handleInput = (event) => setNewTaskTitle(event.target.value);
const handleDescription = (event) => setNewTaskDescription(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTaskTitle.length <= 3) return setErrorValidation('El nombre de la tarea es demasiado corto')
    else setErrorValidation('');
    setAddTask(false);
    setTasks([
      ...tasks,
      { id: tasks.length, title: newTaskTitle, description: newTaskDescription, status: "pending" },
    ]);
  };

  return (
    <form className='form-add-task'>
      <label htmlFor="add-task">Nueva Tarea:</label>
      <InputComponent
        type="text"
        id="new-task-input"
        name="add-task"
        placeholder='Nombre de la tarea'
        value={newTaskTitle}
        onChange={handleInput}
        autoFocus
      />
      <TextAreaComponent
        name="add-task"
        id="new-task-textarea "
        cols="30"
        rows="3"
        placeholder='Descripción'
        value={newTaskDescription}
        onChange={handleDescription}
      />
      <ButtonComponent onClick={handleSubmit}>Agregar</ButtonComponent>
      <ButtonComponent onClick={() => setAddTask(false)}>Cancelar</ButtonComponent>
      {errorValidation !== '' && <p>{errorValidation}</p>}
    </form>
  );
}
