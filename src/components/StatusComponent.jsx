import { Tag } from "@chakra-ui/react";

function StatusComponent({ isCompleted }) {
  return (
    <>
      <Tag
        p="7px 20px"
        bg={isCompleted ? "#006400" : "transparent"}
        fontSize="2xl"
        color="white"
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
