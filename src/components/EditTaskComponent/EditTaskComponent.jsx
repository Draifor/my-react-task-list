import './editTask.css';

import { useContext, useState } from "react";
import {TasksContext} from "../BodyComponent/BodyComponent";
// import useEditTask from "../../hooks/useEditTask";

import ButtonComponent from "../ButtonComponent/ButtonComponent";
import InputComponent from '../InputComponent/InputComponent';
import TextAreaComponent from '../TextAreaComponent/TextAreaComponent';

function EditTaskComponent({ position }) {
    // const [ task, editTask ] = useEditTask( position );
  const {tasks, setTasks} = useContext(TasksContext);
  const { title, description } = tasks[position];
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const handleInput = (event) => setNewTitle(event.target.value);
  const handleDescription = (event) => setNewDescription(event.target.value);
  const handleEdit = (event) => {
    event.preventDefault();
    setTasks(
      tasks.map((task) => {
        if (task.id === position)
          return { ...task, title: newTitle, description: newDescription, isEditable: false };
        return { ...task };
      })
    );
  };

  return (
    <form className='form-edit-task'>
       <fieldset className='form-fieldset-edit'>
         <InputComponent type="text" name='edit-task' className="edit-title" value={newTitle} onChange={handleInput} autoFocus />
         <TextAreaComponent name="edit-task" className="edit-description" cols="30" rows="5" value={newDescription} onChange={handleDescription}/>
       </fieldset>
       <ButtonComponent onClick={ handleEdit }>Guardar</ButtonComponent>
    </form>
  )
}

export default EditTaskComponent;
