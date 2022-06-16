import { app } from "../../firebase-config";
import fbIcon from "../../assets/fb-r.svg";
import googleIcon from "../../assets/google-r.svg";

import { useState, createContext } from "react";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";

import {
  Center,
  Heading,
  Button,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import Icon from "../../components/Icon";

const userContext = createContext({
  user: { name: "", ImgProfile: "" },
  setUser: () => {},
});

export default function Login() {
  const [errorMessage, setErrorMessage] = useState("");
  const bg = useColorModeValue("#090909", "#fafafa");
  const color = useColorModeValue("#fafafa", "#006400");

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((userCredentials) =>
        console.log(`Bienvenido ${userCredentials.user.displayName}`)
      )
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(errorMessage);
      });
  };

  const handleFacebookLogin = () => {
    const provider = new FacebookAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((userCredentials) =>
        console.log(`Bienvenido ${userCredentials.user.displayName}`)
      )
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(errorMessage);
      });
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
        leftIcon={<Icon src={googleIcon} alt="Google icon" />}
        size="lg"
        color={color}
      >
        Inicia Sesión con Google
      </Button>
      <Button
        bg="transparent"
        leftIcon={<Icon src={fbIcon} alt="Facebook icon" />}
        onClick={handleFacebookLogin}
        variant="my-style"
        color={color}
        size="lg"
      >
        Inicia Sesión con Facebook
      </Button>
    </Center>
  );
}
