import "./taskList.css";
import { useContext } from "react";
import {TasksContext} from "../../components/BodyComponent/BodyComponent";

import TaskComponent from "../TaskComponent/TaskComponent";
import AddTaskComponent from "../AddTaskComponent/AddTaskComponent";

function TaskListComponent() {
  const {tasks} = useContext(TasksContext);
  return (
      <ul className="task-list">
        { tasks.map((task) => {
          return <TaskComponent key={ task.id } position={ task.id } />;
        }) }
        <AddTaskComponent />
      </ul>
  );
}

export default TaskListComponent;
