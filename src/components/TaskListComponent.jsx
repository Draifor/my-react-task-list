import { useState } from "react";
import TaskComponent from "./TaskComponent";

function TaskListComponent() {
  const defaultTasks = [
    { description: "Practicar 1 hora React", status: "Pendiente" },
    { description: "Practicar 1 hora inglés", status: "Pendiente" },
    { description: "Hacer  1 hora de ejercicio", status: "Pendiente" },
    { description: "Trabajar en el proyecto", status: "Pendiente" },
  ];
  const [tasks, setTask] = useState(defaultTasks);
    return (
      <div>
        <ul className="task-list">
          {tasks.map(task=> {
            return (
              <li>
                <TaskComponent description={task.description} status={task.status}/>
              </li>
            );
          })}
        </ul>
        <button onClick={()=> setTask()}>Agregar tarea</button>
      </div>
    );
}

export default TaskListComponent;
