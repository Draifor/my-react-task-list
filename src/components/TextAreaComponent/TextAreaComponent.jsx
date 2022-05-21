import "./textArea.css";

export default function TextAreaComponent({
  name,
  id,
  className,
  cols,
  rows,
  placeholder,
  value,
  onChange,
}) {
  return (
    <textarea
      name={name}
      id={id}
      className={className}
      cols={cols}
      rows={rows}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
