import "./task.css";
import edit from "./edit.svg";

import { useContext } from "react";
import { TasksContext } from "../../views/TaskListComponent/TaskListComponent";

import ImageStatusComponent from "../ImageStatusComponent/ImageStatusComponent";
import SpanStatusComponent from "../SpanStatusComponent/SpanStatusComponent";

function TaskComponent({ position }) {
  const [tasks, setTasks] = useContext(TasksContext);
  const { description, status } = tasks[position];

  const togglerStatus = () => {
    setTasks(
      tasks.map((task) => {
        if (task.id === position) {
          if (task.status === "pending") task.status = "completed";
          else task.status = "pending";
        }
        return { ...task };
      })
    );
  };

  return (
    <li className={status}>
      <img src={edit} alt="Edit" />
      <ImageStatusComponent status={status} onClick={togglerStatus} />
      {description}
      <SpanStatusComponent isCompleted={status === "pending" ? false : true} />
    </li>
  );
}

export default TaskComponent;
