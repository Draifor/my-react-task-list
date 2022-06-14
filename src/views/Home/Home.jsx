import { Heading, Text, Box } from "@chakra-ui/react";
import Login from "./Login";
import Section from "../../layout/Section";
export default function Home() {
  return (
    <Box as="article" display='contents' >
      <Heading as="h1" size="2xl">
        App Lista de tareas
      </Heading>
      <Section>
        <Text fontSize="3xl">
          Bienvenido a la mejor aplicación para gestionar tus tareas
        </Text>
      </Section>
        <Login/>
    </Box>
  );
}
