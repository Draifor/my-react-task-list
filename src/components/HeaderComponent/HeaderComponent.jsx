import logo from "./logo.svg";
import './header.css';

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
