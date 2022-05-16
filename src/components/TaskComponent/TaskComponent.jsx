import TogglerStatusComponent from "../TogglerStatusComponent/TogglerStatusComponent";
import  edit from './edit.svg'
import "./task.css";

function TaskComponent({ position }) {
  return (
    <li>
      <img src={edit} alt="Edit" />
      <TogglerStatusComponent position={position}/>
    </li>
  );
}

export default TaskComponent;
