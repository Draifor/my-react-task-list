import useHandleContext from "../hooks/useHandleContext";

import { Box, Heading, Text } from "@chakra-ui/react";
import Section from "../layout/Section";
import TaskListComponent from "../components/TaskListComponent.jsx";

function Tasks() {
  const {
    TasksContext,
    tasks,
    setTasks,
    completedCounter,
    setCompletedCounter,
    taskCounter,
    idGenerator,
  } = useHandleContext();
  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        completedCounter,
        setCompletedCounter,
        idGenerator,
      }}
    >
      <Box as="article">
        <Heading as="h1" size="2xl">
          Lista de Tareas
        </Heading>
        <Section>
          <Text>
            {completedCounter} de {taskCounter} tareas completadas
          </Text>
          <TaskListComponent />
        </Section>
      </Box>
    </TasksContext.Provider>
  );
}

export default Tasks;
