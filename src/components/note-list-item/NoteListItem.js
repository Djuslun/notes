import NoteListItemView from './NoteListItemView';
import { Link } from 'react-router-dom';
import './noteListItem.scss';

const NoteListItem = ({ id, title, tags }) => {

  const tagsElem = tags.map((tag, index) => (<div className='note-li__tag' key={index}>{tag}</div>))

  return (
    <Link to={`${id}`}>
      <NoteListItemView
        title={title}
        tagsElem={tagsElem} />
    </Link>
  )
}


export default NoteListItem;