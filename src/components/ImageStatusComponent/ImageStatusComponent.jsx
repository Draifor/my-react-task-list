import "./imageStatus.css";
import check from "./check.svg";
import uncheck from "./uncheck.svg";

function ImageStatusComponent({ status, onClick, disabled }) {
  return (
    <>
      <img
        src={status === "pending" ? uncheck : check}
        className={status === "pending" ? "uncheck" : "check"}
        alt={status === "pending" ? "uncheck icon" : "check icon"}
        onClick={disabled ? null : onClick}
      />
    </>
  );
}

export default ImageStatusComponent;
