import "./task.css";
import  edit from './edit.svg'

import { useState } from "react";

import ImageStatusComponent from "../ImageStatusComponent/ImageStatusComponent";
import SpanStatusComponent from "../SpanStatusComponent/SpanStatusComponent";

function TaskComponent({ task }) {
  const { description } = task;
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
