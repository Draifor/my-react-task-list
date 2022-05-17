import './main.css';

function BodyComponent({ title, children }) {
  return (
    <main>
        <h1>{title}</h1>
        <section className="main-container">{children}</section>
    </main>
  );
}

export default BodyComponent;
