import { useContext } from "react";
import { TasksContext } from "../hooks/useHandleContext";

import { List, ListItem } from "@chakra-ui/react";
import TaskComponent from "./TaskComponent/TaskComponent";
import AddTaskComponent from "./AddTaskComponent";

function TaskListComponent() {
  const { tasks } = useContext(TasksContext);

  return (
    <>
      <List
        fontSize="3xl"
        my="5"
        borderRadius="20px"
        border="2px solid darkgreen"
        boxShadow="0 0 20px darkgreen"
        p="0 20px 20px"
      >
        {tasks.map((task) => (
          <ListItem key={task.id} _first={{ mt: "0" }}>
            <TaskComponent idTask={task.id} />
          </ListItem>
        ))}
      </List>
      <AddTaskComponent />
    </>
  );
}

export default TaskListComponent;
