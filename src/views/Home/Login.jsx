import { app } from "../../firebase-config";
import { useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

import {
  Center,
  Heading,
  Button,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Login() {
  const [errorMessage, setErrorMessage] = useState("");
  const bg = useColorModeValue("#090909", "#fafafa");

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((userCredentials) =>
        console.log(`Bienvenido ${userCredentials.user.displayName}`)
      )
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(errorMessage)})
  };

  return (
    <Center
      bg={bg}
      flexDirection="column"
      gap="5"
      border="1px solid #006400"
      boxShadow={`0 0 10px #006400, 0 0 10px #006400`}
      borderRadius="md"
      p="9"
      m="20px auto 0"
    >
      <Heading as="h1" size="xl">
        Inicia Sesión
      </Heading>
      <Divider />
      <Button
        bg="transparent"
        variant="my-style"
        onClick={handleGoogleLogin}
        size="lg"
      >
        Inicia Sesión con Google
      </Button>
      <Button bg="transparent" variant="my-style" size="lg">
        Inicia Sesión con Facebook
      </Button>
    </Center>
  );
}
