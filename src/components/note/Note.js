import './note.scss';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';

const Note = ({ note }) => {
  return (
    <li className="note">
      <p className='note__text' contentEditable="true">{note}</p>
      <div className='note__buttons'>
        <IconButton className='delete-button' aria-label="delete">
          <DeleteIcon />
        </IconButton>

        <button type="button"
          className='edit-button'> Edit
        </button>
      </div>
    </li>
  )
}

export default Note;