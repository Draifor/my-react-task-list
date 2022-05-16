import './button.css';

function ButtonComponent({ onClick, children, disabled }) {
  return (
    <button className='app-button' onClick={onClick} disabled={disabled}>
        {children}
    </button>
  )
}

export default ButtonComponent;
