import "./taskList.css";

import { useState, createContext } from "react";

import TaskComponent from "../TaskComponent/TaskComponent";
import AddTaskComponent from "../AddTaskComponent/AddTaskComponent";

export const TasksContext = createContext([
  [{ id: 0, description: "", status: "" }],
  (tasks) => tasks,
]);

function TaskListComponent() {
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
      description: "Enfocarme en cardio",
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

  return (
    <TasksContext.Provider value={[ tasks, setTasks ]}>
      <ul className="task-list">
        { tasks.map((task) => {
          return <TaskComponent key={ task.id } position={ task.id } />;
        }) }
        <AddTaskComponent />
      </ul>
    </TasksContext.Provider>
  );
}

export default TaskListComponent;
