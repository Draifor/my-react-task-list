import { VStack, Input, Textarea, Button } from "@chakra-ui/react";

import { useEditTask } from "../hooks/useEditTask";

function EditTaskComponent({ idTask }) {
  const {
    newTitle,
    newDescription,
    handleInput,
    handleDescription,
    handleSubmit,
    handleEdit,
  } = useEditTask(idTask);

  return (
    <>
      <form className="form-edit-task">
        <VStack>
          <Input
            type="text"
            placeholder="Añade un nombre a la tarea"
            value={newTitle}
            onChange={handleInput}
            focusBorderColor="#006400"
            borderColor={"#00640055"}
            bg={"#00640055"}
            fontSize={"2xl"}
            textAlign={"center"}
            autoFocus
          />
          <Textarea
            placeholder="Añade una descripción"
            value={newDescription}
            onChange={handleDescription}
            focusBorderColor="#006400"
            borderColor={"#00640055"}
            bg={"#00640055"}
            fontSize={"2xl"}
            textAlign={"center"}
            resize="none"
          />
        </VStack>
        <VStack spacing="15px">
          <Button variant="my-style" w="100%" onClick={handleSubmit}>
            Guardar
          </Button>
          <Button variant="my-style" w="100%" onClick={handleEdit}>
            Cancelar
          </Button>
        </VStack>
      </form>
    </>
  );
}

export default EditTaskComponent;
