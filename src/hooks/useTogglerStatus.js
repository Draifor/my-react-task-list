import { useContext } from "react";
import { TasksContext } from "../views/TaskListComponent/TaskListComponent";

function useTogglerStatus( position ) {
  const [tasks, setTasks] = useContext(TasksContext);
  const currentTask = tasks[position];

  const togglerStatus = () => {
    setTasks(
      tasks.map((task) => {
        if (task.id === position) task.status === "pending" ? task.status = "completed" : task.status = "pending";

        return { ...task };
      })
    );
  };

  return [ currentTask, togglerStatus ];
}

export default useTogglerStatus;
