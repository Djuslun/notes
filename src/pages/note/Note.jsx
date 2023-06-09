import FormNote from '../../components/formNote/FormNote'
import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { notesDelete } from '../../redux/notes.Slice'
import { useParams } from 'react-router'
import { selectById } from '../../redux/notes.Slice'
import { useNavigate } from 'react-router'

const Note = ({ }) => {
  const { id: noteId } = useParams()
  const { title, description, tags } = useSelector(state => selectById(state, noteId)) || {} // || {} нужен для случаев если useSelector вепнет undefined, т.к. деструктуризация выдаст ошибку
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (!title || !tags) {
      navigate('/not_found')
    }
  }, [title, tags])

  const handleDelete = useCallback(() => {
    navigate('/notes')
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