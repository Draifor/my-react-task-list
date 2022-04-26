function HeaderComponent(props) {
    const {name, lastName} = props;
    return (
    <div>
        <h1>Lista de tareas de {name} {lastName}</h1>
    </div>
    );
}

export default HeaderComponent;
