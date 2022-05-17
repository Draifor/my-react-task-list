import { useState, createContext } from "react";
import TaskComponent from "../TaskComponent/TaskComponent";
import AddTaskComponent from "../AddTaskComponent/AddTaskComponent";
import "./taskList.css";

export const TasksContext = createContext([
  [{ id: 0, description: "", status: "" }],
  (tasks) => tasks,
]);

function TaskListComponent() {
  const [tasks, setTasks] = useState([
    {
      id: 0,
      description: "Practicar React - 1 hora",
      status: 'pending'
    },
    {
      id: 1,
      description: "Practicar inglés - 1 hora",
      status: 'pending'
    },
    {
      id: 2,
      description: "Hacer ejercicio - 1 hora",
      status: 'pending'
    },
    {
      id: 3,
      description: "Trabajar en el proyecto - 1 hora",
      status: 'pending'
    },
    {
      id: 4,
      description: "Tocar guitarra - 30 minutos",
      status: 'pending'
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
