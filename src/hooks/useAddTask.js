import { useContext, useState } from "react";
import { TasksContext } from "./useHandleContext";
import { dataBase } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";

export default function useAddTask(setAddTask) {
  const { tasks, setTasks } = useContext(TasksContext);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [errorValidation, setErrorValidation] = useState("");

  const addDocument = async (newTask) => {
    try {
      const docRef = await addDoc(collection(dataBase, "tasks"), newTask);

      setTasks([...tasks, { id: docRef.id, ...newTask }]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (event) => setNewTaskTitle(event.target.value);
  const handleDescription = (event) =>
    setNewTaskDescription(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTaskTitle.length <= 3)
      return setErrorValidation("El nombre de la tarea es demasiado corto");
    else setErrorValidation("");
    const newTask = {
      title: newTaskTitle,
      description: newTaskDescription,
      isEditable: false,
      status: "pending",
    };
    addDocument(newTask);
    setAddTask(false);
  };
  return {
    newTaskTitle,
    newTaskDescription,
    handleInput,
    handleDescription,
    handleSubmit,
    errorValidation,
  };
}
