import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HeaderComponent from "./views/HeaderComponent/HeaderComponent.jsx";
import NavComponent from "./components/NavComponent/NavComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent.jsx";

const Home = lazy(() => import("./views/Home/Home.jsx"));
const Tasks = lazy(() => import("./views/Tasks/Tasks.jsx"));
const AboutUs = lazy(() => import("./views/AboutUs/AboutUs.jsx"));

function App() {
  return (
    <Router>
      <div className="App-container">
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
      </div>
    </Router>
  );
}

export default App;
