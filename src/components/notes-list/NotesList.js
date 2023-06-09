import NoteListItem from '../note-list-item/NoteListItem';
import './notes-list.scss';

const NotesList = ({ notes, className = '' }) => {
  const notesList = notes.map(({ id, title, description, tags }) => (
    < NoteListItem
      key={id}
      id={id}
      title={title}
      description={description}
      tags={tags} />))


  return (
    <ul className={`app-list ${className}`}>
      {notesList.length
        ? <>{notesList}</>
        : <li className='app-list__title'>There are no notes</li>}
    </ul>
  )
}

export default NotesList;