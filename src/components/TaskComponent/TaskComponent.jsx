import "./task.css";
import  edit from './edit.svg'

import { useContext, useState } from "react";
import { TasksContext } from "../../views/TaskListComponent/TaskListComponent";

import ImageStatusComponent from "../ImageStatusComponent/ImageStatusComponent";
import SpanStatusComponent from "../SpanStatusComponent/SpanStatusComponent";

function TaskComponent({ position }) {
  const [ tasks ] = useContext(TasksContext);
  const { description } = tasks[ position ];
  const [ status, setStatus ] = useState("pending");

  const togglerStatus = () => {
    setStatus( () => status === "pending" ? "completed" : "pending");
  }

  return (
    <li className={ status }>
      <img src={edit} alt="Edit" />
      <ImageStatusComponent status={ status } onClick={ togglerStatus } />
      { description }
      <SpanStatusComponent isCompleted={ status === "pending" ? false : true } />
    </li>
  );
}

export default TaskComponent;
