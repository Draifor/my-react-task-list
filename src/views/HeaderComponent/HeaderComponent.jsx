import logo from "./logo.svg";

import { Center, Heading, Image } from '@chakra-ui/react';

function HeaderComponent() {
  return (
    <Center as="header" mt={5} color="#006400" pointerEvents='none'>
      <Image src={logo} h='4em' alt="check-list icon" />
      <Heading>Draifor's App</Heading>
    </Center>
  );
}

export default HeaderComponent;
