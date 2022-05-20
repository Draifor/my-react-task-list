import "./App.css";

import HeaderComponent from "./views/HeaderComponent/HeaderComponent.jsx";
import BodyComponent from "./components/BodyComponent/BodyComponent.jsx";
import TaskListComponent from "./views/TaskListComponent/TaskListComponent.jsx";
import FooterComponent from "./components/FooterComponent/FooterComponent.jsx";

function App() {
  return (
    <div className="App-container">
      <HeaderComponent />
      <BodyComponent title="Lista de Tareas">
        <TaskListComponent />
      </BodyComponent>
      <FooterComponent />
    </div>
  );
}

export default App;
