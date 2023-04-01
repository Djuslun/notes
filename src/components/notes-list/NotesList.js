import { useSelector } from 'react-redux';
import { filteredNotes } from '../../servises/filterNotes';
import Note from '../note/Note';
import './notes-list.scss';

const NotesList = () => {
  const notes = useSelector(state => state.notes)
  const filter = useSelector(state => state.filter)

  const visibleNotes = filteredNotes(notes, filter)

  const notesList = visibleNotes.map(item => < Note key={item.id} {...item} />)

  return (
    <ul className="app-list">
      {notesList.length ? notesList : 'There no notes'}
    </ul>
  )
}

export default NotesList;