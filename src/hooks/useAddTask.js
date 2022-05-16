import { useContext } from "react";
import { TasksContext } from "../views/TaskListComponent/TaskListComponent.jsx";

function useAddTask() {
    const [tasks, setTasks] = useContext(TasksContext);

    return (event) => {
        event.preventDefault();
        const newTask = document.getElementById("new-task");
        const description = newTask.value;

        if (!description) return tasks;

        newTask.value = "";
        setTasks([ ...tasks, { id: tasks.length, description: description } ]);
    };
}

export default useAddTask;
