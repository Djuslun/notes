import Note from '../note/Note';

import './notes-list.scss';

const NotesList = ({ notes, onDeleteNote, onNoteChange }) => {

  const notesList = notes.map(item => {
    const { id, ...itemProps } = item
    return (
      < Note
        key={id}
        {...itemProps}
        onDeleteNote={() => onDeleteNote(id)}
        onNoteChange={(event) => onNoteChange(id, event)} />
    )
  })
  return (
    <ul className="app-list list-group">
      {notesList.length ? notesList : 'There no notes'}
    </ul>
  )
}

export default NotesList;