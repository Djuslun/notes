import { useDispatch } from 'react-redux';
import { deleteNote, changeEdit } from '../../redux/actions';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Editable from '../editable/Editable';
import Tag from '../tag/Tag';
import { styledTags } from '../../servises/styledTag';

import './note.scss';

const Note = ({ note, id, tags, edit }) => {

  const dispatch = useDispatch()

  const editChange = () => dispatch(changeEdit(id, !edit))

  const onDeleteNote = () => dispatch(deleteNote(id))

  const tagList = tags.map((item, index) => <Tag tag={item} key={index} id={id} />)

  const styledNote = styledTags(note, edit)

  return (
    <li className="note">
      <div className="note__body">
        <Editable
          edit={edit}
          note={styledNote}
          id={id}
        />
        <div className='note__buttons'>
          <IconButton
            className='delete-button'
            aria-label="delete"
            onClick={onDeleteNote}>
            <DeleteIcon />
          </IconButton>
          <button
            type="button"
            className='edit-button'
            onClick={editChange}>
            {edit ? 'Edit' : 'Ok'}
          </button>
        </div>
      </div>
      <div className="note__tags">
        {tagList}
      </div>
    </li>
  )
}

export default Note;