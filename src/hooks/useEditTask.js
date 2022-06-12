import { useContext, useState } from "react";
import { TasksContext } from "./useHandleContext";
import useTogglerEdit from "./useTogglerEdit";

export function useEditTask(idTask) {
  const { tasks, setTasks } = useContext(TasksContext);
  const [currentTask] = tasks.filter((task) => task.id === idTask);
  const { title, description } = currentTask;
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const handleEdit = useTogglerEdit(idTask);

  const handleInput = (event) => setNewTitle(event.target.value);
  const handleDescription = (event) => setNewDescription(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTitle.length < 3) {
      alert("El nombre de la tarea es muy corto");
      return;
    }
    setTasks(
      tasks.map((task) => {
        if (task.id === idTask)
          return {
            ...task,
            title: newTitle,
            description: newDescription,
            isEditable: false,
          };
        return { ...task };
      })
    );
  };

  return {
    newTitle,
    newDescription,
    handleInput,
    handleDescription,
    handleSubmit,
    handleEdit,
  };
}
