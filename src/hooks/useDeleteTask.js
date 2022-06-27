import { useContext } from "react";
import { doc, collection, deleteDoc } from "firebase/firestore";
import { dataBase } from "../firebase-config";
import { TasksContext } from "./useHandleContext";

export default function useDeleteTask(idTask) {
  const { tasks, setTasks } = useContext(TasksContext);

  const deleteDocument = async () => {
    try {
      const taskRef = doc(collection(dataBase, "tasks"), idTask);
      await deleteDoc(taskRef);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = () => {
    const confirmDelete = prompt(
      "¿Estás seguro de que quieres eliminar esta tarea?",
      "Si"
    );
    if (confirmDelete === "Si") {
      deleteDocument();
      setTasks(tasks.filter((task) => task.id !== idTask));
    }
  };
  return handleDelete;
}
