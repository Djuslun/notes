import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { notesDelete } from '../../redux/notes.Slice'
import FormNote from '../formNote/FormNote'
import { useParams } from 'react-router'
import { selectById } from '../../redux/notes.Slice'
import './note.scss'
// 

const Note = () => {
  const { id: noteId } = useParams()
  const { title, description, tags } = useSelector(state => selectById(state, noteId))
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
        handleDelete={handleDelete} />
    </div>
  )
}

export default Note