import "./task.css";
import edit from "./edit.svg";

import { useState } from "react";
import useTogglerStatus from "../../hooks/useTogglerStatus";
import useHandleEdit from "../../hooks/useHandleEdit";

import ImageStatusComponent from "../../components/ImageStatusComponent/ImageStatusComponent";
import StatusComponent from "../../components/StatusComponent/StatusComponent";
import EditTaskComponent from "../../components/EditTaskComponent/EditTaskComponent";

function TaskComponent({ position }) {
  const [task, togglerStatus] = useTogglerStatus(position);
  const handleEdit = useHandleEdit(position);

  const { title, description, status, isEditable } = task;
  const [showDescription, setShowDescription] = useState(false);
  const handleDescription = () =>
    showDescription === true
      ? setShowDescription(false)
      : setShowDescription(true);

  function renderContent() {
    if (!isEditable)
      return (
        <>
          <span className='task' onClick={handleDescription}>
            <span className="task-title">{title}</span>
            {showDescription === true && (
              <span className="task-description">
                {description !== "" ? description : "No hay descripción"}
              </span>
            )}
          </span>
          <StatusComponent isCompleted={status === "pending" ? false : true} />
        </>
      );
    else return <EditTaskComponent position={position} />;
  }

  return (
    <li className={`${status} ${showDescription === true && "description"}`}>
      <img src={edit} onClick={handleEdit} alt="Edit" />
      <ImageStatusComponent status={status} onClick={togglerStatus} />
      {renderContent()}
    </li>
  );
}

export default TaskComponent;
