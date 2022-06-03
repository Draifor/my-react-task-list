import "./main.css";
import useHandleContext from "../../hooks/useHandleContext";

import TaskListComponent from "../TaskListComponent/TaskListComponent.jsx";

function Tasks() {
  const {
    TasksContext,
    tasks,
    setTasks,
    completedCounter,
    setCompletedCounter,
    taskCounter,
  } = useHandleContext();
  return (
    <TasksContext.Provider
      value={{ tasks, setTasks, completedCounter, setCompletedCounter }}
    >
      <main>
        <h1>Lista de Tareas</h1>
        <p>
          {completedCounter} de {taskCounter} tareas completadas
        </p>
        <section className="main-container">
          <TaskListComponent />
        </section>
      </main>
    </TasksContext.Provider>
  );
}

export default Tasks;
