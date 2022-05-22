import "./editTask.css";

import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import InputComponent from "../../components/InputComponent/InputComponent";
import TextAreaComponent from "../../components/TextAreaComponent/TextAreaComponent";
import { useEditTask } from "../../hooks/useEditTask";

function EditTaskComponent({ position }) {
  const {
    newTitle,
    newDescription,
    handleInput,
    handleDescription,
    handleEdit,
  } = useEditTask(position);

  return (
    <form className="form-edit-task">
      <fieldset className="form-fieldset-edit">
        <InputComponent
          type="text"
          name="edit-task"
          className="edit-title"
          value={newTitle}
          onChange={handleInput}
          autoFocus
        />
        <TextAreaComponent
          name="edit-task"
          className="edit-description"
          cols="30"
          rows="5"
          value={newDescription}
          onChange={handleDescription}
        />
      </fieldset>
      <ButtonComponent onClick={handleEdit}>Guardar</ButtonComponent>
    </form>
  );
}

export default EditTaskComponent;
