import { Container } from "@chakra-ui/react";

export default function Section({ children }) {
  return (
    <Container
      as="section"
      mt="6"
      maxW="80ch"
      textShadow="0 0 10px #006400, 0 0 10px #006400"
    >
      {children}
    </Container>
  );
}
