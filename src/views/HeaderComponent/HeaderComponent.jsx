import "./header.css";
import logo from "./logo.svg";

function HeaderComponent() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="check-list icon" />
      <h2>Draifor's App</h2>
    </header>
  );
}

export default HeaderComponent;
