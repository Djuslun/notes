import './note.scss'
import { useDispatch } from 'react-redux'
import { deleteNote } from '../../redux/actions'
import FormNote from '../formNote/FormNote'

const Note = ({ title, description, tags, id, handleOpen }) => {
  const dispatch = useDispatch()

  const handleDelete = () => dispatch(deleteNote(id))

  return (
    <div className='note'>
      <FormNote
        title={title}
        description={description}
        tags={tags}
        id={id}
        handleOpen={handleOpen}
        handleDelete={handleDelete} />
    </div>
  )
}

export default Note