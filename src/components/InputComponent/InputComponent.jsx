import './input.css';

function InputComponent( { id, name, value }) {
  return <input type="text" id={ id } name={ name } defaultValue={ value } autoFocus />;
}

export default InputComponent;
