import './note.scss'
import { useDispatch } from 'react-redux'
import { deleteNote } from '../../redux/actions'
import FormNote from '../formNote/FormNote'

const Note = ({ title, description, tags, id: noteId, handleOpen }) => {
  const dispatch = useDispatch()

  const handleDelete = () => dispatch(deleteNote(noteId))

  return (
    <div className='note'>
      <FormNote
        title={title}
        description={description}
        tags={tags}
        noteId={noteId}
        handleOpen={handleOpen}
        handleDelete={handleDelete} />
    </div>
  )
}

export default Note