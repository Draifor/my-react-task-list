import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function TaskAccordion({ title, description, status }) {
  const completedColor = useColorModeValue("#666", "#666");
  const pendingColor = useColorModeValue("#fff", "#000");
  const color = status === "completed" ? completedColor : pendingColor;

  return (
    <Accordion allowMultiple>
      <AccordionItem border="none">
        <h2>
          <AccordionButton
            _focus={{ boxShadow: "0 0 8px 3px green" }}
            borderRadius="10"
          >
            <Box flex="1" fontSize="2xl" color={color} pr="10px">
              {title}
            </Box>
            <Text fontSize="sm" color={color} w="10ch" py="0">
              Mostrar Descripción
            </Text>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel fontSize="2xl" color={color} pb={4}>
          {description ? description : "No hay descripción"}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
