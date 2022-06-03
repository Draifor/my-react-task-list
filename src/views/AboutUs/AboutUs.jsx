import "./about.css";

export default function AboutUs() {
  return (
    <article className="App-about-us">
      <h1>Sobre Nosotros</h1>
      <section className="about-us-description">
        <p>
          Esta aplicación fue desarrollada por Luis Alfredo Parra, un
          desarrollador de software que se dedica a la creación de aplicaciones
          web y móviles.
        </p>
        <p>
          Esta lista de tareas te permite gestionar tus activididades añadiendo,
          modificando o eliminando tareas de acuerdo a tus necesidades, puedes
          marcar las tareas que ya han sido completadas, además hay un contador
          que te permite ver la cantidad de tareas que ya han sido completadas
          frente al total de tareas.
        </p>
        <p>
          Esta aplicación fue desarrollada utilizando las mejores prácticas en
          el desarrollo de software y las últimas tecnologías como lo son HTML,
          CSS, JavaScript y React.
        </p>
      </section>
    </article>
  );
}
