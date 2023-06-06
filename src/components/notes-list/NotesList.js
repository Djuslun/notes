import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAll, fetchNotes } from '../../redux/notes.Slice'
import NoteListItem from '../note-list-item/NoteListItem';
import './notes-list.scss';

const NotesList = () => {
  const dispatch = useDispatch()

  const notes = useSelector(selectAll)
  const { filter } = useSelector(store => store.notes)

  const getVisibleNotes = (filter) => {
    if (filter === 'all') {
      return notes
    } else {
      return notes.filter(item => item.tags.includes(filter))
    }
  }

  const visibleNotes = getVisibleNotes(filter)

  const notesList = visibleNotes.map(({ id, title, description, tags }) => (
    < NoteListItem
      key={id}
      id={id}
      title={title}
      description={description}
      tags={tags} />))

  const getElements = () => {
    return notesList.length ?
      <>
        <li className='app-list__title'>Notes</li>
        {notesList}
      </>
      : <li className='app-list__title'>There are no notes</li>
  }

  const elements = getElements()

  return (
    <ul className="app-list">
      {elements}
    </ul>
  )
}

export default NotesList;