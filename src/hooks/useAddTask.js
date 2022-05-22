import { useContext, useState } from "react";
import { TasksContext } from "./useHandleContext";

export default function useAddTask(setAddTask) {
  const { tasks, setTasks } = useContext(TasksContext);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [errorValidation, setErrorValidation] = useState("");

  const handleInput = (event) => setNewTaskTitle(event.target.value);
  const handleDescription = (event) =>
    setNewTaskDescription(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTaskTitle.length <= 3)
      return setErrorValidation("El nombre de la tarea es demasiado corto");
    else setErrorValidation("");
    setAddTask(false);
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: newTaskTitle,
        description: newTaskDescription,
        status: "pending",
      },
    ]);
  };
  return {
    newTaskTitle,
    newTaskDescription,
    handleInput,
    handleDescription,
    handleSubmit,
    errorValidation,
  };
}
