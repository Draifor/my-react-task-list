import "./span.css";

function StatusComponent({ isCompleted }) {
  return (
    <>
      {isCompleted === true ? (
        <span className="completed status">Completado</span>
      ) : (
        <span className="pending status">Pendiente</span>
      )}
    </>
  );
}

export default StatusComponent;
