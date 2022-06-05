import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Box, Container } from "@chakra-ui/react";

import HeaderComponent from "./views/HeaderComponent/HeaderComponent.jsx";
import NavComponent from "./components/NavComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent.jsx";

const Home = lazy(() => import("./views/Home.jsx"));
const Tasks = lazy(() => import("./views/Tasks.jsx"));
const AboutUs = lazy(() => import("./views/AboutUs/AboutUs.jsx"));

function App() {
  return (
    <Router>
      <Box bg="#060606" minH="100vh" >
        <Container
          justifyContent="space-between"
          textAlign="center"
          fontSize="1.5em"
          color="white"
          minH="100vh"
          maxW='95vw'
          gap={4}
          centerContent
        >
          <HeaderComponent />
          <NavComponent />

          <Suspense fallback={<h2>Cargando...</h2>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/about-us" element={<AboutUs />} />
            </Routes>
          </Suspense>
          <FooterComponent />
        </Container>
      </Box>
    </Router>
  );
}

export default App;
