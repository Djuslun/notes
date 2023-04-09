import Button from "./Button"

const NoteButtons = ({ edit, handleDelete, handleEdit, handleOpen }) => {
  return (
    <div className="button__box">
      <Button
        type="button"
        onClick={handleDelete}>
        Delete
      </Button>
      <Button
        type="button"
        onClick={handleOpen}>
        Close
      </Button>
      <Button
        type={!edit ? "submit" : 'button'}
        onClick={handleEdit}  >
        {edit ? 'Ok' : 'Edit'}
      </Button>
    </div >
  )
}
export default NoteButtons