import { useContext } from "react";
import { TasksContext } from "../hooks/useHandleContext";

import { List, ListItem } from "@chakra-ui/react";
import TaskComponent from "./TaskComponent/TaskComponent";
import AddTaskComponent from "../components/AddTaskComponent/AddTaskComponent";

function TaskListComponent() {
  const { tasks } = useContext(TasksContext);

  return (
    <>
      <List
        fontSize="3xl"
        my="5"
        p="5"
        borderRadius="20px"
        border="2px solid darkgreen"
        boxShadow="0 0 20px darkgreen"
      >
        {tasks.map((task) => (
          <ListItem>
            <TaskComponent key={task.id} position={task.id} />
          </ListItem>
        ))}
      </List>
      <AddTaskComponent />
    </>
  );
}

export default TaskListComponent;
