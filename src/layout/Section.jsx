import { Container, useColorModeValue } from "@chakra-ui/react";

export default function Section({ children }) {
  const textShadow = useColorModeValue(
    "0 0 10px #006400, 0 0 10px #006400",
    "0 0 1px #006400, 0 0 1px #006400"
  );
  return (
    <Container as="section" mt="6" maxW="80ch" textShadow={textShadow}>
      {children}
    </Container>
  );
}
