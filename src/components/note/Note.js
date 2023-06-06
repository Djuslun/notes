import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { notesDelete } from '../../redux/notes.Slice'
import FormNote from '../formNote/FormNote'
import './note.scss'

const Note = ({ title, description, tags, id: noteId, handleOpen }) => {
  const dispatch = useDispatch()

  const handleDelete = useCallback(() => {
    dispatch(notesDelete(noteId))
  }, [noteId])

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