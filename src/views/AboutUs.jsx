import { Box, Heading, Text } from "@chakra-ui/react";
import Section from "../components/Section";

export default function AboutUs() {
  return (
    <Box as="article">
      <Heading as="h1" size="2xl">
        Sobre Nosotros
      </Heading>
      <Section>
        <Text>
          Esta aplicación fue desarrollada por Luis Alfredo Parra, un
          desarrollador de software que se dedica a la creación de aplicaciones
          web y móviles.
        </Text>
        <Text>
          Esta lista de tareas te permite gestionar tus activididades añadiendo,
          modificando o eliminando tareas de acuerdo a tus necesidades, puedes
          marcar las tareas que ya han sido completadas, además hay un contador
          que te permite ver la cantidad de tareas que ya han sido completadas
          frente al total de tareas.
        </Text>
        <Text>
          Esta aplicación fue desarrollada utilizando las mejores prácticas en
          el desarrollo de software y las últimas tecnologías como lo son HTML,
          CSS, JavaScript y React.
        </Text>
      </Section>
    </Box>
  );
}
