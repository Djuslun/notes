import './note.scss';

import { useState } from 'react';

import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Editable from '../editable/Editable';
import Tag from '../tag/Tag';

const Note = ({ note, tags, onDeleteNote, onNoteChange, onTagDelete, onEditChange }) => {
  const [edit, setEdit] = useState(true)

  const editChange = () => {
    setEdit(edit => !edit)
    onEditChange(!edit)
  }

  const tagList = tags.map((item, index) => <Tag onTagDelete={() => onTagDelete(item, edit)} tag={item} key={index} />)

  return (
    <li className="note">
      <div className="note__body">
        <Editable
          edit={edit}
          note={note}
          onNoteChange={(event) => onNoteChange(event, edit)}
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
      </div>
      <div className="note__tags">
        {tagList}
      </div>
    </li>
  )
}

export default Note;