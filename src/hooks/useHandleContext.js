import { useState, createContext, useEffect } from "react";

export const TasksContext = createContext({
  tasks: [{ id: 0, description: "", status: "" }],
  setTaks: (tasks) => tasks,
  completedCounter: 0,
  setCompletedCounter: (counter) => counter,
  idGenerator: () => 0,
});

const idGenerator = () => {
  const date = new Date().getTime();
  const random1 = Math.random() * 1000;
  const random2 = Math.round(Math.random() * 1000 + random1);
  return random2 + "fdg" + date;
};
const storedTasks = JSON.parse(localStorage.getItem("tasks"));
const initialTasks = storedTasks
  ? storedTasks
  : [
      {
        id: idGenerator(),
        title: "Practicar inglés - 1 hora",
        description: "Usar Duolingo y Elsa Speak",
        status: "pending",
      },
      {
        id: idGenerator(),
        title: "Hacer ejercicio - 1 hora",
        description: "",
        status: "pending",
      },
      {
        id: idGenerator(),
        title: "Trabajar en el proyecto - 1 hora",
        description: "Implementar los formularios",
        status: "pending",
      },
      {
        id: idGenerator(),
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
    idGenerator,
  };
}
