import "./task.css";
import edit from "./edit.svg";

import useTogglerStatus from "../../hooks/useTogglerStatus";
import useHandleEdit from "../../hooks/useHandleEdit";

import ImageStatusComponent from "../../components/ImageStatusComponent/ImageStatusComponent";
import SpanStatusComponent from "../../components/SpanStatusComponent/SpanStatusComponent";
import EditTaskComponent from "../../components/EditTaskComponent/EditTaskComponent";

function TaskComponent({ position }) {
  const [task, togglerStatus] = useTogglerStatus(position);
  const handleEdit = useHandleEdit(position);

  const { description, status, isEditable } = task;

  function renderContent() {
    if (!isEditable)
      return (
        <>
          <span contentEditable={isEditable}>{description}</span>
          <SpanStatusComponent
            isCompleted={status === "pending" ? false : true}
          />
        </>
      );
    else return <EditTaskComponent position={position} />;
  }

  return (
    <li className={status}>
      <img src={edit} onClick={handleEdit} alt="Edit" />
      <ImageStatusComponent status={status} onClick={togglerStatus} />
      {renderContent()}
    </li>
  );
}

export default TaskComponent;
