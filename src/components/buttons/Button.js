
const Button = ({ children, type, onClick }) => {
  return (
    <button
      type={type}
      className="form-note__button"
      onClick={onClick}>
      {children}
    </button>
  )
}
export default Button