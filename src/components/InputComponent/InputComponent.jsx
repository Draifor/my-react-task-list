import "./input.css";

function InputComponent({
  type,
  id,
  name,
  className,
  placeholder,
  value,
  onChange,
  autoFocus,
}) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      autoFocus={autoFocus}
    />
  );
}

export default InputComponent;
