function TaskComponent(props) {
    return (
      <label>
        <input type="checkbox"/> {props.task}
      </label>
    );
}

export default TaskComponent;
