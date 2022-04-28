import TaskComponent from "./TaskComponent";

function TaskListComponent() {
    return (
      <div>
        <ul className="task-list">
          <li>
            <TaskComponent task="Practicar 1 hora React" />
          </li>
          <li>
            <TaskComponent task="Practicar 1 hora inglés" />
          </li>
          <li>
            <TaskComponent task="Hacer  1 hora de ejercicio" />
          </li>
          <li>
            <TaskComponent task="Trabajar en el proyecto" />
          </li>
        </ul>
      </div>
    );
}

export default TaskListComponent;
