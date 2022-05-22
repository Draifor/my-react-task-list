import { useState } from "react";

import ButtonComponent from "../ButtonComponent/ButtonComponent";
import FormAddComponent from "../../views/FormAddComponent/FormAddComponent";

function AddTaskComponent() {
  const [isAddTask, setIsAddTask] = useState(false);

  const handleAdd = () => setIsAddTask(true);

  return (
    <>
      {isAddTask ? (
        <FormAddComponent setAddTask={setIsAddTask} />
      ) : (
        <ButtonComponent onClick={handleAdd}>Agregar Tarea</ButtonComponent>
      )}
    </>
  );
}

export default AddTaskComponent;
