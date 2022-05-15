import './App.css';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import BodyComponent from './components/BodyComponent/BodyComponent';
import TaskListComponent from './views/TaskListComponent/TaskListComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';

function App() {
  const name = "Draifor's App";
  return (
    <div className='App-container'>
      <HeaderComponent name={name} />
      <BodyComponent title='Lista de Tareas'>
        <TaskListComponent/>
      </BodyComponent>
      <FooterComponent name="Luis Alfredo Parra - Draifor"/>
    </div>
  );
}

export default App;
