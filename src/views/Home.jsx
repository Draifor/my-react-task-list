import { Heading, Text, Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box as='article' flexGrow='1' >
      <Heading as="h1" size='2xl' >Lista de tareas</Heading>
      <Text fontSize="3xl">
        Bienvenido a la mejor aplicación para gestionar tus tareas
      </Text>
    </Box>
  );
}
