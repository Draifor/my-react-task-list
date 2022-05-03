import { useState } from "react";
import check from "./check.svg";
import "./task.css";

function TaskComponent({ description }) {
  const [status, setStatus] = useState("pending");
  return (
    <li>
      ◆
      {status === "completed" ? (
        <span className="completed" onClick={() => setStatus("pending")}>
          Completado
        </span>
      ) : (
        <span className="pending" onClick={() => setStatus("completed")}>
          Pendiente
        </span>
      )}
      {description}
      {status === "completed" ? (
        <img src={check} className="check" alt="check icon" />
      ) : (
        ""
      )}
    </li>
  );
}

export default TaskComponent;
