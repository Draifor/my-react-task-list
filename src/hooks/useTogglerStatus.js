import { useContext } from "react";
import { TasksContext } from "./useHandleContext";

function useTogglerStatus(idTask) {
  const { tasks, setTasks, completedCounter, setCompletedCounter } =
    useContext(TasksContext);
  const [ currentTask ] = tasks.filter((task) => task.id === idTask);

  const togglerStatus = () => {
    setTasks(
      tasks.map((task) => {
        if (task.id === idTask)
          if (task.status === "pending") {
            task.status = "completed";
            setCompletedCounter(completedCounter + 1);
          } else {
            task.status = "pending";
            setCompletedCounter(completedCounter - 1);
          }

        return { ...task };
      })
    );
  };

  return [currentTask, togglerStatus];
}

export default useTogglerStatus;
