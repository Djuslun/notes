const ButtonBox = ({ id, edit, handleDelete, handleOpen, handleEdit }) => {

  return <div className="button__box">
    {id
      ? <button className="form-note__button" type="button" onClick={handleDelete}>Delete</button>
      : <button className="form-note__button" type="submit">Submit</button>}
    {id
      ? <button
        type="button"
        className="form-note__button"
        onClick={handleOpen}>
        Close
      </button>
      : null}
    {id
      ? <button
        type={!edit ? "submit" : 'button'}
        className="form-note__button"
        onClick={handleEdit}
      >
        Edit
      </button>
      : null}
  </div >
}
export default ButtonBox