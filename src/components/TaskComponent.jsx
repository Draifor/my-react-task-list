import "./task.css"

function TaskComponent({ description, status }) {
    return (
      <>
        <input type="checkbox" /> {description}
        <span>{status === "Pendiente" ? "Pendiente" : "Completado"}</span>
      </>
    );
}

export default TaskComponent;
