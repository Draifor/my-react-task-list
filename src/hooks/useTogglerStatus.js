import { useContext } from "react";
import useTogglerEdit from "./useTogglerEdit";
import { TasksContext } from "./useHandleContext";

export default function useTogglerStatus(idTask) {
  const { tasks, setTasks } = useContext(TasksContext);
  const [currentTask] = tasks.filter((task) => task.id === idTask);
  const { updateDocument } = useTogglerEdit(idTask);

  const togglerStatus = () => {
    setTasks(
      tasks.map((task) => {
        if (task.id === idTask) {
          task.status = task.status === "pending" ? "completed" : "pending";
          updateDocument(task);
        }

        return { ...task };
      })
    );
  };

  return [currentTask, togglerStatus];
}
