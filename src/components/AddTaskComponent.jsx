import { useState } from "react";

import { Button } from "@chakra-ui/react";
import FormAddComponent from "./FormAddComponent";

function AddTaskComponent() {
  const [isAddTask, setIsAddTask] = useState(false);

  const handleAdd = () => setIsAddTask(true);

  return (
    <>
      {isAddTask ? (
        <FormAddComponent setAddTask={setIsAddTask} />
      ) : (
        <Button variant="my-style" px="5" onClick={handleAdd}>
          Agregar Tarea
        </Button>
      )}
    </>
  );
}

export default AddTaskComponent;
