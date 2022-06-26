import { app } from "../../firebase-config";
import fbIcon from "../../assets/fb-r.svg";
import googleIcon from "../../assets/google-r.svg";

import { useState, useEffect } from "react";
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
  Image,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import Icon from "../../components/Icon";
import useUser from "../../hooks/useUser";

export default function Login() {
  const bg = useColorModeValue("#090909", "#fafafa");
  const color = useColorModeValue("#fafafa", "#006400");
  const [errorMessage, setErrorMessage] = useState("");
  const { user, setUser } = useUser;

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((userCredentials) => {
        setUser({
          name: userCredentials.user.displayName,
          image: userCredentials.user.photoURL,
        });
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(errorMessage);
      });
  };

  const handleFacebookLogin = () => {
    const provider = new FacebookAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((userCredentials) => {
        setUser({
          name: userCredentials.user.displayName,
          image: userCredentials.user.photoURL,
        });
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(errorMessage);
      });
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

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
      {/* {<Image src={user.image} alt={user.name} />} */}
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
