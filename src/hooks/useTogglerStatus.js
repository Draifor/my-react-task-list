import { useContext } from "react";
import { TasksContext } from "./useHandleContext";

function useTogglerStatus(idTask) {
  const { tasks, setTasks } =
    useContext(TasksContext);
  const [ currentTask ] = tasks.filter((task) => task.id === idTask);

  const togglerStatus = () => {
    setTasks(
      tasks.map((task) => {
        if (task.id === idTask)
          if (task.status === "pending") {
            task.status = "completed";
          } else {
            task.status = "pending";
          }

        return { ...task };
      })
    );
  };

  return [currentTask, togglerStatus];
}

export default useTogglerStatus;
