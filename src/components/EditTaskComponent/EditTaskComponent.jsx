import './editTask.css';

import { useContext, useState } from "react";
import { TasksContext } from "../../views/TaskListComponent/TaskListComponent";
// import useEditTask from "../../hooks/useEditTask";

import ButtonComponent from "../ButtonComponent/ButtonComponent";

function EditTaskComponent({ position }) {
    // const [ task, editTask ] = useEditTask( position );
  const [tasks, setTasks] = useContext(TasksContext);
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
    <form className='edit-task'>
       <input type="text" name='edit-task' className="edit-title" value={newTitle} onChange={handleInput} />
       <textarea name="edit-task" className="edit-description" cols="30" rows="10" value={newDescription} onChange={handleDescription}></textarea>
       <ButtonComponent onClick={ handleEdit }>Guardar</ButtonComponent>
    </form>
  )
}

export default EditTaskComponent;
