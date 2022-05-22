import { useContext, useState } from "react";
import { TasksContext } from "./useHandleContext";

export function useEditTask(position) {
  const { tasks, setTasks } = useContext(TasksContext);
  const { title, description } = tasks[position];
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const handleInput = (event) => setNewTitle(event.target.value);
  const handleDescription = (event) => setNewDescription(event.target.value);
  const handleEdit = (event) => {
    event.preventDefault();
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
    handleEdit,
  };
}
