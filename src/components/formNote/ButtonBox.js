const ButtonBox = ({ noteId, edit, handleDelete, handleOpen, handleEdit }) => {

  return <div className="button__box">
    {noteId
      ? <button className="form-note__button" type="button" onClick={handleDelete}>Delete</button>
      : <button className="form-note__button" type="submit">Submit</button>}
    {noteId
      ? <button
        type="button"
        className="form-note__button"
        onClick={handleOpen}>
        Close
      </button>
      : null}
    {noteId
      ? <button
        type={!edit ? "submit" : 'button'}
        className="form-note__button"
        onClick={handleEdit}
      >
        {edit ? 'Ok' : 'Edit'}
      </button>
      : null}
  </div >
}
export default ButtonBox