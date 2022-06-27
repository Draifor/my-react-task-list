import { useContext, useState } from "react";
import { TasksContext } from "./useHandleContext";
import useTogglerEdit from "./useTogglerEdit";

export function useEditTask(idTask) {
  const { tasks, setTasks } = useContext(TasksContext);
  const [currentTask] = tasks.filter((task) => task.id === idTask);
  const { title, description } = currentTask;
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const { handleEdit, updateDocument } = useTogglerEdit(idTask);

  const handleInput = (event) => setNewTitle(event.target.value);
  const handleDescription = (event) => setNewDescription(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTitle.length < 3) {
      alert("El nombre de la tarea es muy corto");
      return;
    }
    const newTask = {
      ...currentTask,
      title: newTitle,
      description: newDescription,
      isEditable: false,
    };
    updateDocument(newTask);
    setTasks(tasks.map((task) => (task.id === idTask ? newTask : task)));
  };

  return {
    newTitle,
    newDescription,
    handleInput,
    handleDescription,
    handleSubmit,
    handleEdit,
    updateDocument,
  };
}
