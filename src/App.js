import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Box, Container, Center, useColorModeValue } from "@chakra-ui/react";

import HeaderComponent from "./components/HeaderComponent/HeaderComponent.jsx";
import NavComponent from "./components/NavComponent";
import FooterComponent from "./components/FooterComponent.jsx";

const Home = lazy(() => import("./views/Home.jsx"));
const Tasks = lazy(() => import("./views/Tasks.jsx"));
const AboutUs = lazy(() => import("./views/AboutUs.jsx"));

function App() {
  const bg = useColorModeValue("#060606", "#fafafa");
  const color = useColorModeValue("#fafafa", "#006400");
  return (
    <Router>
      <Box bg={bg} minH="100vh">
        <Container
          justifyContent="space-between"
          textAlign="center"
          fontSize="1.5em"
          color={color}
          minH="100vh"
          maxW="95vw"
          gap={4}
          centerContent
        >
          <HeaderComponent />
          <NavComponent />

          <Center as="main" flexGrow="1">
            <Suspense fallback={<h2>Cargando...</h2>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/about-us" element={<AboutUs />} />
              </Routes>
            </Suspense>
          </Center>
          <FooterComponent />
        </Container>
      </Box>
    </Router>
  );
}

export default App;
