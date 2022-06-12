import edit from "./edit.svg";
import del from "./delete.svg";

import useTogglerStatus from "../../hooks/useTogglerStatus";
import useTogglerEdit from "../../hooks/useTogglerEdit";
import useDeleteTask from "../../hooks/useDeleteTask";

import { Grid, Image } from "@chakra-ui/react";
import ImageStatusComponent from "../ImageStatusComponent/ImageStatusComponent";
import TaskAccordion from "../TaskAccordion";
import StatusComponent from "../StatusComponent";
import EditTaskComponent from "../EditTaskComponent";

function TaskComponent({ idTask }) {
  const [task, togglerStatus] = useTogglerStatus(idTask);
  const togglerEdit = useTogglerEdit(idTask);
  const handleDelete = useDeleteTask(idTask);

  const { title, description, status, isEditable } = task;
  function renderContent() {
    if (!isEditable)
      return (
        <>
          <TaskAccordion
            title={title}
            description={description}
            status={status}
          />
          <StatusComponent isCompleted={status === "pending" ? false : true} />
          <Image src={del} w="35px" onClick={handleDelete} alt="Delete icon" />
        </>
      );
    else return <EditTaskComponent idTask={idTask} />;
  }

  return (
    <Grid
      templateColumns={`40px 40px 1fr 189px ${!isEditable ? "40px" : ""}`}
      columnGap={isEditable ? "7" : "5"}
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
