import { useState, createContext, useEffect } from "react";
import { dataBase } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";

export const TasksContext = createContext({
  tasks: [{ id: 0, description: "", status: "" }],
  setTaks: (tasks) => tasks,
  completedCounter: 0,
  setCompletedCounter: (counter) => counter,
});

export default function useHandleContext() {
  let dataBaseTasks = [];
  const [tasks, setTasks] = useState([]);
  const initialCompletedCounter = tasks.filter(
    (task) => task.status === "completed"
  ).length;
  const [taskCounter, setTaskCounter] = useState(tasks.length);
  const [completedCounter, setCompletedCounter] = useState(
    initialCompletedCounter
  );

  const readDocuments = async () => {
    try {
      const querySnapshot = await getDocs(collection(dataBase, "tasks"));

      dataBaseTasks = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setTasks(dataBaseTasks);
      console.log(tasks);
      console.log(dataBaseTasks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    readDocuments();
  }, []);

  useEffect(() => {
    setTaskCounter(tasks.length);
    setCompletedCounter(
      tasks.filter((task) => task.status === "completed").length
    );
    console.log("Se cambió el estado de las tareas");
  }, [tasks]);

  return {
    TasksContext,
    tasks,
    setTasks,
    taskCounter,
    setTaskCounter,
    completedCounter,
    readDocuments,
  };
}
