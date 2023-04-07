import { useSelector } from 'react-redux';

import Note from '../note-list-item/NoteListItem';
import './notes-list.scss';

const NotesList = () => {
  const filter = useSelector(({ filter }) => filter)
  const notesId = useSelector(({ tags }) => tags[filter])

  const notesList = notesId.map(id => < Note key={id} id={id} />)

  return (
    <ul className="app-list">
      {notesList.length
        ? <>
          <li className='app-list__title'>Notes</li>
          {notesList}
        </>
        : <li className='app-list__title'>There are no notes</li>}
    </ul>
  )
}

export default NotesList;