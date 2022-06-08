import {
  FormControl,
  FormLabel,
  Textarea,
  Input,
  VStack,
  HStack,
  Button,
} from "@chakra-ui/react";

import useAddTask from "../hooks/useAddTask";

export default function FormAddComponent({ setAddTask }) {
  const {
    newTaskTitle,
    newTaskDescription,
    handleInput,
    handleDescription,
    handleSubmit,
    errorValidation,
  } = useAddTask(setAddTask);

  return (
    <VStack spacing={4} alignItems="center">
      <FormControl w="xl" display="flex" flexDirection="column" gap="10px">
        <FormLabel htmlFor="new-task" fontSize="2xl" m="0" textAlign="center">
          Agregar Tarea:
        </FormLabel>
        <Input
          type="text"
          id="new-task"
          placeholder="Añade un nombre a la tarea"
          value={newTaskTitle}
          onChange={handleInput}
          focusBorderColor="#006400"
          borderColor="#00640055"
          bg="#00640055"
          fontSize="2xl"
          textAlign="center"
          autoFocus
        />
        <Textarea
          placeholder="Añade una descripción"
          value={newTaskDescription}
          onChange={handleDescription}
          focusBorderColor="#006400"
          borderColor="#00640055"
          bg="#00640055"
          fontSize="2xl"
          textAlign="center"
          resize="none"
        />
        <HStack spacing="5" justify="center">
          <Button variant="my-style" w="40" onClick={handleSubmit}>
            Agregar
          </Button>
          <Button variant="my-style" w="40" onClick={() => setAddTask(false)}>
            Cancelar
          </Button>
        </HStack>
        {errorValidation !== "" && <p>{errorValidation}</p>}
      </FormControl>
    </VStack>
  );
}
