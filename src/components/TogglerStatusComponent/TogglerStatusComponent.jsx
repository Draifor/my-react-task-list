import { useContext, useState } from "react";
import { TasksContext } from "../../views/TaskListComponent/TaskListComponent";
import check from "./check.svg";
import uncheck from "./uncheck.svg";
import './toggler.css'

function TogglerStatusComponent({ position }) {
  const [ tasks ] = useContext(TasksContext);
  const { description } = tasks[position];
  const [ status, setStatus ] = useState('pending');
  return (
    <>
      {status === "pending" ? (
        <>
          <img
            src={uncheck}
            className="uncheck"
            alt="uncheck icon"
            onClick={() => setStatus("completed")}
          />
          {description}
          <span className="pending status">Pendiente</span>
        </>
      ) : (
        <>
          <img
            src={check}
            className="check"
            alt="check icon"
            onClick={() => setStatus("pending")}
          />
          <span className="text-completed">{description}</span>
          <span className="completed status">Completado</span>
        </>
      )}
    </>
  );
}

export default TogglerStatusComponent;
