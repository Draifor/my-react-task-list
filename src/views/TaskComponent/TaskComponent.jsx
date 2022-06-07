import edit from "./edit.svg";

import useTogglerStatus from "../../hooks/useTogglerStatus";
import useTogglerEdit from "../../hooks/useTogglerEdit";

import { Grid, Image } from "@chakra-ui/react";
import ImageStatusComponent from "../../components/ImageStatusComponent/ImageStatusComponent";
import TaskAccordion from "../../components/TaskAccordion";
import StatusComponent from "../../components/StatusComponent";
import EditTaskComponent from "../EditTaskComponent/EditTaskComponent";

function TaskComponent({ position }) {
  const [task, togglerStatus] = useTogglerStatus(position);
  const togglerEdit = useTogglerEdit(position);

  const { title, description, status, isEditable } = task;

  function renderContent() {
    if (!isEditable)
      return (
        <>
          <TaskAccordion
            title={title}
            description={description}
            color={status === "completed" ? "#666" : "#fff"}
          />
          <StatusComponent isCompleted={status === "pending" ? false : true} />
        </>
      );
    else return <EditTaskComponent position={position} />;
  }

  return (
    <Grid
      templateColumns="40px 40px 1fr 189px"
      columnGap="5"
      alignItems="center"
      mt={5}
    >
      <Image src={edit} w="40px" onClick={togglerEdit} alt="Edit" />
      <ImageStatusComponent
        status={status}
        onClick={togglerStatus}
        disabled={isEditable ? true : false}
      />
      {renderContent()}
    </Grid>
  );
}

export default TaskComponent;
