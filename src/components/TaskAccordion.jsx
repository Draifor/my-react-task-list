import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";

export default function TaskAccordion({ title, description, color }) {
  return (
    <Accordion allowMultiple>
      <AccordionItem border="none">
        <h2>
          <AccordionButton
            _focus={{ boxShadow: "0 0 8px 3px green" }}
            borderRadius="10"
          >
            <Box flex="1" fontSize="2xl" color={color} pr='10px' >
              {title}
            </Box>
            <Text fontSize="sm" w="10ch" py="0" color={color}>
              Mostrar Descripción
            </Text>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel fontSize="2xl" pb={4} color={color}>
          {description ? description : "No hay descripción"}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
