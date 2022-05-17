import './editTask.css';

import useEditTask from "../../hooks/useEditTask";

import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

function EditTaskComponent({ position }) {
    const [ task ,editTask ] = useEditTask( position );

  return (
    <form className='edit'>
       <InputComponent id={`edit-task-${position}`} value={task.description} />
       <ButtonComponent onClick={ editTask }>Guardar</ButtonComponent>
    </form>
  )
}

export default EditTaskComponent;
