import { Heading, Text, Box } from "@chakra-ui/react";
import Section from "../components/Section";
export default function Home() {
  return (
    <Box as="article">
      <Heading as="h1" size="2xl">
        App Lista de tareas
      </Heading>
      <Section>
        <Text fontSize="3xl">
          Bienvenido a la mejor aplicación para gestionar tus tareas
        </Text>
      </Section>
    </Box>
  );
}
