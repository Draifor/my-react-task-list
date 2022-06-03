import "./nav.css";
import { Link } from "react-router-dom";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

export default function NavComponent() {
  return (
    <nav className="App-nav">
      <ul>
        <li>
          <Link to="/home">
            <ButtonComponent>Home</ButtonComponent>
          </Link>
        </li>
        <li>
          <Link to="/tasks">
            <ButtonComponent>Tareas</ButtonComponent>
          </Link>
        </li>
        <li>
          <Link to="about-us">
            <ButtonComponent>Sobre Nosotros</ButtonComponent>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
