import { useContext } from "react";
import { TasksContext } from "../components/BodyComponent/BodyComponent";

function useHandleEdit(position) {
  const {tasks, setTasks} = useContext(TasksContext);

  const handleEdit = () => {
    setTasks(
      tasks.map((task) => {
        if (task.id === position)
          if (task.status === "pending")
            task.isEditable === true
              ? (task.isEditable = false)
              : (task.isEditable = true);

        return { ...task };
      })
    );
  };

  return handleEdit;
}

export default useHandleEdit;
