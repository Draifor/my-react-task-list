import './header.css';
import logo from "./logo.svg";

function HeaderComponent({ name }) {
  return (
      <header className="App-header">
          <img src={logo} className="App-logo" alt="check-list icon" />
          <h2>
            {name}
          </h2>
      </header>
  );
}

export default HeaderComponent;
