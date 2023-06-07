import FormNote from '../../components/formNote/FormNote'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { notesDelete } from '../../redux/notes.Slice'
import { useParams } from 'react-router'
import { selectById } from '../../redux/notes.Slice'

const Note = ({ }) => {
  const { id: noteId } = useParams()
  const { title, description, tags } = useSelector(state => selectById(state, noteId))
  const dispatch = useDispatch()

  const handleDelete = useCallback(() => {
    dispatch(notesDelete(noteId))
  }, [noteId])

  return (
    <FormNote
      title={title}
      description={description}
      tags={tags}
      noteId={noteId}
      handleDelete={handleDelete} />
  )
}

export default Note