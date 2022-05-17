import { useContext } from "react";
import { TasksContext } from "../views/TaskListComponent/TaskListComponent";

function useEditTask(position) {
  const [tasks, setTasks] = useContext(TasksContext);
  const currentTask = tasks[position];

  const editTask = (event) => {
    event.preventDefault();
    const newDescription = document.getElementById(
      `edit-task-${position}`
    ).value;

    setTasks(
      tasks.map((task) => {
        if (task.id === position)
          return { ...task, description: newDescription, isEditable: false };
        return { ...task };
      })
    );
  };
  return [currentTask, editTask];
}

export default useEditTask;
