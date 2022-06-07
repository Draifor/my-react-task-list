import { useContext, useState } from "react";
import { TasksContext } from "./useHandleContext";
import useTogglerEdit from "./useTogglerEdit";

export function useEditTask(position) {
  const { tasks, setTasks } = useContext(TasksContext);
  const { title, description } = tasks[position];
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const handleEdit = useTogglerEdit(position);

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
        if (task.id === position)
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
