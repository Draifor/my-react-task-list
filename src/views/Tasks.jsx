import useHandleContext from "../hooks/useHandleContext";

import { Box, Heading, Text } from "@chakra-ui/react";
import TaskListComponent from "./TaskListComponent/TaskListComponent.jsx";

function Tasks() {
  const {
    TasksContext,
    tasks,
    setTasks,
    completedCounter,
    setCompletedCounter,
    taskCounter,
  } = useHandleContext();
  return (
    <TasksContext.Provider
      value={{ tasks, setTasks, completedCounter, setCompletedCounter }}
    >
      <Box as="main" flexGrow="1">
        <Heading as="h1" size="2xl">
          Lista de Tareas
        </Heading>
        <Text>
          {completedCounter} de {taskCounter} tareas completadas
        </Text>
        <TaskListComponent />
      </Box>
    </TasksContext.Provider>
  );
}

export default Tasks;
