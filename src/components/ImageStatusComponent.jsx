import check from "../assets/check.svg";
import uncheck from "../assets/uncheck.svg";
import { Image } from "@chakra-ui/react";

function ImageStatusComponent({ status, onClick, disabled }) {
  return (
    <>
      <Image
        src={status === "pending" ? uncheck : check}
        w={status === "pending" ? "40px" : "49px"}
        alt={status === "pending" ? "uncheck icon" : "check icon"}
        onClick={disabled ? null : onClick}
        _active={{ transform: "scale(0.9)" }}
      />
    </>
  );
}

export default ImageStatusComponent;
