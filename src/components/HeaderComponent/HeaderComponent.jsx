import list from "./list.svg";

function HeaderComponent({ name, lastName }) {
  return (
    <>
      <div>
          <img src={list} className="App-logo" alt="logo" />
          <h2>
            {name} {lastName}
          </h2>
      </div>
      <h1>Lista de tareas</h1>
    </>
  );
}

export default HeaderComponent;
