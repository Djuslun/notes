import Note from '../note/Note';
import { useMemo } from 'react';

import './notes-list.scss';

const NotesList = ({ notes, onDeleteNote, onNoteChange, onTagDelete, onEditChange }) => {

  const notesList = notes.map(item => {

    const { id, ...itemProps } = item
    return (
      < Note
        key={id}
        {...itemProps}
        onDeleteNote={() => onDeleteNote(id)}
        onNoteChange={(event, edit) => onNoteChange(id, event, edit)}
        onTagDelete={(tag, edit) => onTagDelete(id, tag, edit)}
        onEditChange={(edit) => onEditChange(id, edit)} />
    )
  })
  return (
    <ul className="app-list list-group">
      {notesList.length ? notesList : 'There no notes'}
    </ul>
  )
}

export default NotesList;