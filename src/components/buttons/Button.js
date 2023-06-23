
const Button = ({ children, type, onClick, className }) => {
  const clazzName = className ? className : 'form-note__button'
  return (
    <button
      type={type}
      className={clazzName}
      onClick={onClick}>
      {children}
    </button>
  )
}
export default Button