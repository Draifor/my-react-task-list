import { useContext } from "react";
import { dataBase } from "../firebase-config";
import { doc, collection, updateDoc } from "firebase/firestore";
import { TasksContext } from "./useHandleContext";

export default function useTogglerEdit(idTask) {
  const { tasks, setTasks } = useContext(TasksContext);

  const updateDocument = async (newTask) => {
    try {
      const taskRef = doc(collection(dataBase, "tasks"), idTask);
      await updateDoc(taskRef, newTask);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = () => {
    setTasks(
      tasks.map((task) => {
        if (task.id === idTask)
          if (task.status === "pending") {
            task.isEditable = task.isEditable ? false : true;
            updateDocument(task);
            console.log(task);
          }
        return { ...task };
      })
    );
  };

  return { handleEdit, updateDocument };
}
