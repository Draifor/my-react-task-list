import { useState, createContext, useEffect } from "react";

export const TasksContext = createContext({
  tasks: [{ id: 0, description: "", status: "" }],
  setTaks: (tasks) => tasks,
  completedCounter: 0,
  setCompletedCounter: (counter) => counter,
});

const storedTasks = JSON.parse(localStorage.getItem("tasks"));
const initialTasks = storedTasks
  ? storedTasks
  : [
      {
        id: 0,
        title: "Practicar React - 1 hora",
        description: "Desarrollar el laboratorio de formularios",
        status: "pending",
      },
      {
        id: 1,
        title: "Practicar inglés - 1 hora",
        description: "Usar Duolingo y Elsa Speak",
        status: "pending",
      },
      {
        id: 2,
        title: "Hacer ejercicio - 1 hora",
        description: "",
        status: "pending",
      },
      {
        id: 3,
        title: "Trabajar en el proyecto - 1 hora",
        description: "Implementar los formularios",
        status: "pending",
      },
      {
        id: 4,
        title: "Tocar guitarra - 30 minutos",
        description: "Hacer ejercicos de fingerpicking",
        status: "pending",
      },
    ];

export default function useHandleContext() {
  const [tasks, setTasks] = useState(initialTasks);
  const initialCompletedCounter = tasks.filter(
    (task) => task.status === "completed"
  ).length;
  const [taskCounter, setTaskCounter] = useState(tasks.length);
  const [completedCounter, setCompletedCounter] = useState(
    initialCompletedCounter
  );

  useEffect(() => {
    setTaskCounter(tasks.length);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return {
    TasksContext,
    tasks,
    setTasks,
    taskCounter,
    setTaskCounter,
    completedCounter,
    setCompletedCounter,
  };
}
