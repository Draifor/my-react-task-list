import { useContext } from "react";
import { TasksContext } from "./useHandleContext";

export default function useDeleteTask(idTask) {
  const { tasks, setTasks } = useContext(TasksContext);

  const handleDelete = () => {
    setTasks(tasks.filter((task) => task.id !== idTask));
  };
  return handleDelete;
}
