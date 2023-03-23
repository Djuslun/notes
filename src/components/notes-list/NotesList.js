import Note from '../note/Note';


import './notes-list.scss';

const NotesList = ({ notes }) => {

  const notesList = notes.map(item => {
    const { id, ...itemProps } = item
    return (
      < Note key={id} {...itemProps} />
    )
  })
  return (
    <ul className="app-list list-group">
      {notesList}
    </ul>
  )
}

export default NotesList;