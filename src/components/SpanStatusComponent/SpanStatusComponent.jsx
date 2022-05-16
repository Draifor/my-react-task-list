import './span.css';

function SpanStatusComponent({ isCompleted }) {
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

export default SpanStatusComponent;
