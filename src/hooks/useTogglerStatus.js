import { useContext } from "react";
import { TasksContext } from "./useHandleContext";

function useTogglerStatus(position) {
  const { tasks, setTasks, completedCounter, setCompletedCounter } =
    useContext(TasksContext);
  const currentTask = tasks[position];

  const togglerStatus = () => {
    setTasks(
      tasks.map((task) => {
        if (task.id === position)
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
