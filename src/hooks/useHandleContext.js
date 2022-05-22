import { useState, createContext, useEffect } from "react";

export const TasksContext = createContext({
  tasks: [{ id: 0, description: "", status: "" }],
  setTaks: (tasks) => tasks,
  completedCounter: 0,
  setCompletedCounter: (counter) => counter,
});

export default function useHandleContext() {
  const [tasks, setTasks] = useState([
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
  ]);
  const [taskCounter, setTaskCounter] = useState(tasks.length);
  const [completedCounter, setCompletedCounter] = useState(0);

  useEffect(() => {
    setTaskCounter(tasks.length);
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
