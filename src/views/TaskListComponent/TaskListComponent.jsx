import "./taskList.css";
import { useContext } from "react";
import { TasksContext } from "../../hooks/useHandleContext";

import TaskComponent from "../TaskComponent/TaskComponent";
import AddTaskComponent from "../../components/AddTaskComponent/AddTaskComponent";

function TaskListComponent() {
  const { tasks } = useContext(TasksContext);
  return (
    <>
      <ul className="task-list">
        {tasks.map((task) => {
          return <TaskComponent key={task.id} position={task.id} />;
        })}
      </ul>
        <AddTaskComponent />
    </>
  );
}

export default TaskListComponent;
