import "./addTask.css";

import { useState } from "react";
// import useAddTask from "../../hooks/useAddTask";

import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import FormAddComponent from "../../components/FormAddComponent/FormAddComponent";

function AddTaskComponent() {
  // const addTask = useAddTask();
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
