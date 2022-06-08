import { useContext } from "react";
import { TasksContext } from "./useHandleContext";

function useTogglerEdit(idTask) {
  const { tasks, setTasks } = useContext(TasksContext);

  const handleEdit = () => {
    setTasks(
      tasks.map((task) => {
        if (task.id === idTask)
          if (task.status === "pending")
            task.isEditable = task.isEditable ? false: true;

        return { ...task };
      })
    );
  };

  return handleEdit;
}

export default useTogglerEdit;
