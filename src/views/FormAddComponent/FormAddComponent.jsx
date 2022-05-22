import "./formAdd.css";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import TextAreaComponent from "../../components/TextAreaComponent/TextAreaComponent";
import InputComponent from "../../components/InputComponent/InputComponent";
import useAddTask from "../../hooks/useAddTask";

export default function FormAddComponent({ setAddTask }) {
  const {
    newTaskTitle,
    newTaskDescription,
    handleInput,
    handleDescription,
    handleSubmit,
    errorValidation,
  } = useAddTask(setAddTask);

  return (
    <form className="form-add-task">
      <label htmlFor="add-task">Agregar Tarea:</label>
      <InputComponent
        type="text"
        id="new-task-input"
        name="add-task"
        placeholder="Nombre de la tarea"
        value={newTaskTitle}
        onChange={handleInput}
        autoFocus
      />
      <TextAreaComponent
        name="add-task"
        id="new-task-textarea "
        cols="30"
        rows="3"
        placeholder="Descripción"
        value={newTaskDescription}
        onChange={handleDescription}
      />
      <ButtonComponent onClick={handleSubmit}>Agregar</ButtonComponent>
      <ButtonComponent onClick={() => setAddTask(false)}>
        Cancelar
      </ButtonComponent>
      {errorValidation !== "" && <p>{errorValidation}</p>}
    </form>
  );
}
