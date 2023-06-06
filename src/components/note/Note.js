import './note.scss'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { notesDelete } from '../../redux/notes.Slice'
import FormNote from '../formNote/FormNote'
import { useHttp } from '../../hooks/http.hook'

const Note = ({ title, description, tags, id: noteId, handleOpen }) => {
  const { request } = useHttp()

  const dispatch = useDispatch()

  const handleDelete = useCallback(() => {
    // request(`https://cautious-tuna-nightshirt.cyclic.app/api/notes/${noteId}`, 'DELETE')
    //   .then(dispatch(notesDelete(noteId)))
    //   .catch((e) => console.log(e))
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