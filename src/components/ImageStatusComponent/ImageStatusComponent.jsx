import check from "./check.svg";
import uncheck from "./uncheck.svg";
import './imageStatus.css'

function ImageStatusComponent({ status, onClick }) {

  return (
    <>
      {status === "pending" ? (
        <>
          <img
            src={uncheck}
            className="uncheck"
            alt="uncheck icon"
            onClick={onClick}
          />
        </>
      ) : (
        <>
          <img
            src={check}
            className="check"
            alt="check icon"
            onClick={onClick}
          />
        </>
      )}
    </>
  );
}

export default ImageStatusComponent;
