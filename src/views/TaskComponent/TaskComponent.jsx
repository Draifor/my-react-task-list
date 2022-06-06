import "./task.css";
import edit from "./edit.svg";

import { useState } from "react";
import useTogglerStatus from "../../hooks/useTogglerStatus";
import useTogglerEdit from "../../hooks/useTogglerEdit";

import { Grid, Image } from "@chakra-ui/react";
import ImageStatusComponent from "../../components/ImageStatusComponent/ImageStatusComponent";
import TaskAccordion from "../../components/TaskAccordion";
import StatusComponent from "../../components/StatusComponent/StatusComponent";
import EditTaskComponent from "../EditTaskComponent/EditTaskComponent";

function TaskComponent({ position }) {
  const [task, togglerStatus] = useTogglerStatus(position);
  const togglerEdit = useTogglerEdit(position);
  const [showDescription, setShowDescription] = useState(false);

  const { title, description, status, isEditable } = task;
  const handleDescription = () =>
    showDescription === true
      ? setShowDescription(false)
      : setShowDescription(true);

  function renderContent() {
    if (!isEditable)
      return (
        <>
          <span className="task" onClick={handleDescription}>
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
    <>
      <Grid
        templateColumns="40px 40px 1fr 189px"
        columnGap="5"
        alignItems="center"
      >
        <Image src={edit} w="40px" />
        <ImageStatusComponent status={status} onClick={togglerStatus} />
        <TaskAccordion title={title} description={description} color={status === 'completed' ? '#666' : '#fff'} />
        <StatusComponent isCompleted={status === "pending" ? false : true} />
      </Grid>

      <div
        className={`${status} ${
          showDescription === true && "description"
        } viejo`}
      >
        <img src={edit} onClick={togglerEdit} alt="Edit" />
        <ImageStatusComponent status={status} onClick={togglerStatus} />
        {renderContent()}
      </div>
    </>
  );
}

export default TaskComponent;
