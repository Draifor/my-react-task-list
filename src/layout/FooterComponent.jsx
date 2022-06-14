import { Text, useColorModeValue } from "@chakra-ui/react";

function FooterComponent() {
  const textShadow = useColorModeValue(
    "0 0 10px #006400, 0 0 10px #006400",
    "0 0 1px #006400, 0 0 1px #006400"
  );

  return (
    <Text p="10px 0 10px" textShadow={textShadow}>
      Todos los derechos reservados Luis Alfredo Parra - Draifor&copy; 2022
    </Text>
  );
}

export default FooterComponent;
