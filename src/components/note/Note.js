import './note.scss';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import Editable from '../editable/Editable';

const Note = ({ note, onDeleteNote, onNoteChange }) => {
  const [noteValue, setNoteValue] = useState(note)
  const [edit, setEdit] = useState(true)


  const editChange = () => {
    setEdit(edit => !edit)
  }



  return (
    <li className="note">
      <Editable
        edit={edit}
        note={noteValue}
        onNoteChange={onNoteChange}
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
          onClick={editChange}> {edit ? 'Edit' : 'Ok'}
        </button>
      </div>
    </li>
  )
}

export default Note;