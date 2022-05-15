import { useState } from "react";
import check from "./check.svg";
import uncheck from "./uncheck.svg";
import "./task.css";

function TaskComponent({ description }) {
  const [status, setStatus] = useState("pending");
  return (
    <li className={status}>
      {status === "completed" ? (
        <>
          <img
            src={check}
            className="check"
            alt="check icon"
            onClick={() => setStatus("pending")}
          />
          {description}
          <span className="completed">Completado</span>
        </>
      ) : (
        <>
          <img
            src={uncheck}
            className="uncheck"
            alt="uncheck icon"
            onClick={() => setStatus("completed")}
          />
          {description}
          <span className="pending">Pendiente</span>
        </>
      )}
    </li>
  );
}

export default TaskComponent;
