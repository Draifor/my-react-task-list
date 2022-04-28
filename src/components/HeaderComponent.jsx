import logo from "../logo.svg";

function HeaderComponent(props) {
  const { name, lastName } = props;
  return (
    <>
      <div>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
            {name} {lastName}
          </h2>
      </div>
      <h1>Lista de tareas</h1>
    </>
  );
}

export default HeaderComponent;
