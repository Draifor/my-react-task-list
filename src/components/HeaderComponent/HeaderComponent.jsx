import logo from "./logo.svg";

import {
  Center,
  Heading,
  Image,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

function HeaderComponent() {
  const { colorMode, toggleColorMode } = useColorMode();
  const icon = useColorModeValue(<SunIcon />, <MoonIcon />);
  const hover = useColorModeValue("#006400", "#006400");
  const textColor = useColorModeValue("#fff", "#000");
  return (
    <Center as="header" mt={5} color="#006400" pointerEvents="none">
      <Image src={logo} h="4em" alt="check-list icon" />
      <Heading>Draifor's App</Heading>
      <IconButton
        onClick={toggleColorMode}
        icon={icon}
        bg={colorMode}
        color={textColor}
        position="absolute"
        top="49px"
        right="25%"
        _hover={{ bg: hover }}
        _focus={{ boxShadow: "none" }}
        pointerEvents="auto"
      />
    </Center>
  );
}

export default HeaderComponent;
