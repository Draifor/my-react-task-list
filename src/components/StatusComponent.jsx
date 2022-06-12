import { Tag, useColorModeValue } from "@chakra-ui/react";

function StatusComponent({ isCompleted }) {
  const color = useColorModeValue("#fff", "#006400");

  return (
    <>
      <Tag
        p="7px 20px"
        bg={isCompleted ? "#006400" : "transparent"}
        fontSize="2xl"
        color={isCompleted ? "#fff" : color}
        border="2px solid #006400"
        boxShadow="none"
        justifyContent="center"
        userSelect="none"
      >
        {isCompleted ? "Completado" : "Pendiente"}
      </Tag>
    </>
  );
}

export default StatusComponent;
