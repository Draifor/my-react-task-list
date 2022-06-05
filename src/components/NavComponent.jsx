import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
} from "@chakra-ui/react";

export default function NavComponent() {
  return (
    <Breadcrumb separator="" >
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="/home">
          <Button variant="my-style" w='173px' >HOME</Button>
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="/tasks">
          <Button variant="my-style" w='173px' >TAREAS</Button>
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="/about-us">
          <Button variant="my-style">SOBRE NOSOTROS</Button>
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}
