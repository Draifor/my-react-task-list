import "./imageStatus.css";
import check from "./check.svg";
import uncheck from "./uncheck.svg";

function ImageStatusComponent({ status, onClick }) {
  return (
    <>
      <img
        src={status === "pending" ? uncheck : check}
        className={status === "pending" ? "uncheck" : "check"}
        alt={status === "pending" ? "uncheck icon" : "check icon"}
        onClick={onClick}
      />
    </>
  );
}

export default ImageStatusComponent;
